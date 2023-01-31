let arr = JSON.parse(localStorage.getItem('activeUser'));
let html =
    ` <div class="col">
<div class="card mt-3">
    <div class="card-header"><h2><i>Details</i></h2></div>
    <div class="card-body">
        <div><b>First Name:</b> ${arr.fname}</div>
        <div><b>Last Name:</b> ${arr.lname}</div>
        <div><b>Phone Number:</b> ${arr.pnumber}</div>
        <div><b>Email:</b> ${arr.email}</div>

        <div>
         <button type="button" class="btn btn-danger mt-2 update"><i>Update</i></button>
         
      </div>
    </div>      
  </div>
</div>
`

$(document).ready(function () {

    console.log($(".disp").html());
    $(".disp").html(html);
});

$(document).on("click", ".update", function () {
    $("#myModal").modal("show");

    // Validate : 
    $(".editForm").validate({
        rules: {
            fname: {
                required: true,
            },
            lname:
            {
                required: true
            },
            pnumber:
            {
                required: true
            }
        },

    });



})

$(".close").click(function () {
    $("#myModal").hide();
})

$(document).on("submit", ".editForm", function (e) {
    e.preventDefault();
    if ($(".editForm").valid()) {
        let aname = $(".fname").val();
        let blname = $(".lname").val();
        let cpnumber = $(".pnumber").val();

        arr.fname = aname;
        arr.lname = blname;
        arr.pnumber = cpnumber;


        localStorage.setItem("activeUser", JSON.stringify(arr));

        let arr1 = JSON.parse(localStorage.getItem('UsersLogin'));
        let answer;

        myobject = arr1.find((o, i) => {
            answer = i;
            return (o.email == arr1.email)
        })

        arr1[answer].fname = aname;
        arr1[answer].lname = blname;
        arr1[answer].pnumber = cpnumber;
        localStorage.setItem('UsersLogin', JSON.stringify(arr1));
        $(".disp").html(
            `
          <div class="col">
          <div class="card mt-3">
              <div class="card-header"><h2><i>Details</i></h2></div>
              <div class="card-body">
                  <div><b>First Name:</b> ${arr.fname}</div>
                  <div><b>Last Name:</b> ${arr.lname}</div>
                  <div><b>Phone Number:</b> ${arr.pnumber}</div>
                  <div><b>Email:</b> ${arr.email}</div>
        
                  <div>
                   <button type="button" class="btn btn-danger mt-2 update"><i>Update</i></button>
                </div>
              </div>      
            </div>
        </div>
          `
        );
    };

})

