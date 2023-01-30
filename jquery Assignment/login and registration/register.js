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
        alert("user added successfully")
      }
      else {

        let a = JSON.parse(localStorage.getItem('UsersLogin'));
        let flag = 1;
        // console.log(typeof (a));

        $.each(a, function (position, value) {
          let storedemail = value.email;

          if (userData.email == storedemail) {
            alert("User already exists");
            flag = 0;
          }
        })


        if (flag == 1) {
          // console.log(flag);
          a.push(userData);
          localStorage.setItem('UsersLogin', JSON.stringify(a));
          alert("user added successfully");
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
      let a = JSON.parse(localStorage.getItem('UsersLogin'));
      // console.log(a);


      let flag = 1;
      let pos;
      $.each(a, function (position, value) {
        if (value.email == loginEmail && value.pswd == loginPass) {
          flag = 0;
          pos = position;
          return;
        }
      })

      if (flag == 0) {

        alert("Login Successfully");
        let presentUser = {
          fname: a[pos].fname,
          lname: a[pos].lname,
          pnumber: a[pos].pnumber,
          email: a[pos].email
        };
        localStorage.setItem("presentUser", JSON.stringify(presentUser));
        console.log("hello");
        window.location.href = "dashboard.html";
      }
      else {
        alert("invalid credentials");
      }
    }
  })






});