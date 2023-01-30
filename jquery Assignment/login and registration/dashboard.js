let a = JSON.parse(localStorage.getItem('presentUser'));

$(document).ready(function () {

    console.log($(".disp").html());
    $(".disp").html(
        `
  <div class="col">
  <div class="card mt-3">
      <div class="card-header"><h2><i>Details</i></h2></div>
      <div class="card-body">
          <div><b>First Name:</b> ${a.fname}</div>
          <div><b>Last Name:</b> ${a.lname}</div>
          <div><b>Phone Number:</b> ${a.pnumber}</div>
          <div><b>Email:</b> ${a.email}</div>

          <div>
           <button type="button" class="btn btn-danger mt-2 update"><i>Update</i></button>
           
        </div>
      </div>      
    </div>
</div>
  `
    )
});

$(document).on("click", ".update", function () {
    $("#exampleModal").modal("show");

    // Validate : 
    $(".myForm").validate({
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
    $("#exampleModal").hide();
})

$(document).on("submit", ".myForm", function (e) {
    e.preventDefault();
    if ($(".myForm").valid()) {
        let aname = $(".fname").val();
        let blname = $(".lname").val();
        let cpnumber = $(".pnumber").val();

        a.fname = aname;
        a.lname = blname;
        a.pnumber = cpnumber;

        console.log("hello");
        localStorage.setItem("presentUser", JSON.stringify(a));
        // localStorage.setItem('UsersLogin', JSON.stringify(a));
        // let b=localStorage.getItem('UsersLogin');

        let b = JSON.parse(localStorage.getItem('UsersLogin'));
        let flag = 1;
        console.log(typeof (a));
        let answer;

        $.each(b, function (position, value) {

            if (value.email == a.email) {
                answer = position;
                return;
            }
        });

        b[answer].fname = aname;
        b[answer].lname = blname;
        b[answer].pnumber = cpnumber;
        localStorage.setItem('UsersLogin', JSON.stringify(b));
        $(".disp").html(
            `
          <div class="col">
          <div class="card mt-3">
              <div class="card-header"><h2><i>Details</i></h2></div>
              <div class="card-body">
                  <div><b>First Name:</b> ${a.fname}</div>
                  <div><b>Last Name:</b> ${a.lname}</div>
                  <div><b>Phone Number:</b> ${a.pnumber}</div>
                  <div><b>Email:</b> ${a.email}</div>
        
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

