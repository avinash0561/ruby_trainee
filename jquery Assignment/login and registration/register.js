$(document).ready(function () {

  $(".regform").validate({
    rules: {
      fname: "required",
      lname: "required",
      pnumber:
      {
        required: true,
        minlength: 10,
        maxlength: 10
      },
      email:
      {
        required: true,
        email: true
      },
      pswd:
      {
        required: true,
        minlength: 5
      },
      conpswd:
      {
        required: true,
        minlength: 5,
        equalTo: "#pwd"
      }
    }
  });

  $(".regform").on("submit", function (e) {
    e.preventDefault();
    if ($(".regform").valid()) {
      let storedUsers = [];

      let fname = $(".fname").val();
      let lname = $(".lname").val();
      let pnumber = $(".pnumber").val();
      let email = $(".email").val();
      let pswd = $(".pswd").val();

      let userData = {
        fname: fname,
        lname: lname,
        pnumber: pnumber,
        email: email,
        pswd: pswd
      };


      if (localStorage.getItem('UsersLogin') == null) {
        storedUsers.push(userData);
        localStorage.setItem('UsersLogin', JSON.stringify(storedUsers));
        alert("Registered Successfully")//change message
      }
      else {

        let arr = JSON.parse(localStorage.getItem('UsersLogin')); //rename veriable name
        let flag = 1;

        if (arr.find((o, i) => o.email == email)) {
          alert("User already exists");
          return;
        }

        else {
          arr.push(userData);
          localStorage.setItem('UsersLogin', JSON.stringify(arr));
          alert("Registered Successfully")//change message
        }
      }

    }
  });


  $(".logform").validate({
    rules: {
      logemail:
      {
        required: true,
        email: true
      },
      logpswd:
      {
        required: true,
        minlength: 5
      }
    }
  });

  $(".logform").on("submit", function (e) {
    e.preventDefault();
    if ($(".logform").valid()) {
      let loginEmail = $(".logemail").val();
      let loginPass = $(".logpswd").val();
      let arr = JSON.parse(localStorage.getItem('UsersLogin')); //change varible name

      let myobject;
      let index;
      myobject = arr.find((o, i) => {
        index = i;
        return (o.email == loginEmail && o.pswd == loginPass)
      })

      if (myobject == undefined) {
        alert("Invalid Credentials")
      }
      else {
        window.location.href = "dashboard.html";
        alert("Login Successfully");
        let presentUser = {
          fname: arr[index].fname,
          pnumber: arr[index].pnumber,
          email: arr[index].email,
          lname: arr[index].lname,
        };

        localStorage.setItem("activeUser", JSON.stringify(presentUser));
      }
    };
  })
});