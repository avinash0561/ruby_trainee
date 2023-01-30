function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}

// function display()
// {
//   return
//   `
  
//   `
// }

let arr = [];
$(document).ready(function () {

  $(".create").click(function () {
    $("#myModal").modal("show");
    $(".mychange").hide();
    $(".cancel").show();
    $(".save").show(); 


    $(".myForm").validate({
      rules: {
        titleVal: {
          required: true,
          minlength: 8
        },
      },
      rules: {
        messageVal: {
          required: true,
          minlength: 8
        },
      },
      messages: {
        titleVal: {
          required: "Title is required",
          minlength: "Title is required"
        },
        messageVal: {
          required: "Description is required",
          minlength: "Description is required"
        },
  
      }
    });
    
  });

  $(".save").click(function () {
    if($(".myForm").valid()){
      let cardTitle = $(".titl").val();
      let cardContent = $(".message").val();
  
      let myobject = {
        pid: uniqueID(),
        mytitle: cardTitle,
        mydesc: cardContent,
      };

      if (arr.find((y) => y.mytitle === myobject.mytitle)) {
        alert("Card already exists");
      }
      else {
        arr.push(myobject);
        $(".disp").html("");
        $.map(arr, function display(myobject) {
          $(".disp").append(
            `
                       <div class="col-md-4 ${myobject.pid} sahdow-lg">
                       <div class="card">
                    <div class="card-header"><h1><i>My Note</i></h1></div>
                    <div class="card-body">
                       
                        <div class="title">
                          <h3>${myobject.mytitle}</h3>
                        </div>
    
                        <div class="description">
                         ${myobject.mydesc}
                        </div>
                    </div>
                    <div class="card-footer" style="display: flex;    justify-content: space-between;">
                        
                    <button type="button" class="btn btn-info update m-1" updateItem="${myobject.pid}"><i> <i class="fa-solid fa-pen-to-square"></i> Update</i></button>
                    
                        <button type="button" class="btn btn-warning rem m-1" 
                        deleteItem="${myobject.pid}"><i> <i class="fa-solid fa-trash "></i> Remove</i></button>
                    </div>
                   </div>
                   </div>
                   `
          );
        });
        
      }
    }

    // ruk
    else{
      
      $(".myModal").show();
      return false;
    }

    var noOfCards = $(".counter").val();
        noOfCards = arr.length;
        $(".counter").html(`<i class="fa-sharp fa-solid fa-note-sticky icon fa-3x" style="color:black"></i> <sup><b>${arr.length}</b></sup>`);
  });


  $(document).on("click", ".rem", function (myobject) {
    let a = $(this).attr("deleteItem");
    $(`.${a}`).remove();
    let d = arr.indexOf(myobject.pid);
    arr.splice(d, 1);


    if(arr.lenght==0)
    {
      $(".counter").hide();
    }
   else{
    $(".counter").html(`<i class="fa-sharp fa-solid fa-note-sticky icon fa-3x" style="color:black;"></i> <sup><b>${arr.length}</b></sup>`);
   }
});



  $(document).on("click", ".update", function (e) {
    e.preventDefault();
    let b = $(this).attr("updateItem");
    console.log(b);
    $("#myId").val(b);
    $("#myModal").modal("show"); 
    $(".cancel").hide();
    $(".save").hide(); 
    $(".mychange").show();

   

    $(".myForm").validate({
      rules: {
        titleVal: {
          required: true,
          minlength: 8
        },
      },
      rules: {
        messageVal: {
          required: true,
          minlength: 8
        },
      },
      messages: {
        titleVal: {
          required: "Title is required",
          minlength: "Title is required"
        },
        messageVal: {
          required: "Message is required",
          minlength: "Message is required"
        },
  
      }
    });

  });


  $(".mychange").click(function() 
  {
    // console.log(($(".myForm").valid()))
    if($(".myForm").valid()){
      let cardTitle = $(".titl").val();
      let cardContent = $(".message").val();
      let z=$("#myId").val();
     
      let c;
        $.each(arr,function(ind,element)
        {
          if(element.pid==z)
          {
            c=ind;
          }
        } )

      if (arr.find((y) => y.mytitle == cardTitle)) {
        alert("Card already exists");
      }
      else {

        console.log(c);
        $(".disp").html("");

        arr[c].mytitle=cardTitle;
        arr[c].mydesc=cardContent;
        
        console.log(arr);
        
        
        $.map(arr, function display(myobject) {
          $(".disp").append(
            `
                       <div class="col-md-4 ${myobject.pid} sahdow-lg">
                       <div class="card">
                    <div class="card-header"><h4><i>My Card</i></h4></div>
                    <div class="card-body">
                       
                        <div class="title">
                          <p>${myobject.mytitle}</p>
                        </div>
    
                        <div class="description">
                         <p>${myobject.mydesc}0</p>
                        </div>
                    </div>
                    <div class="card-footer" style="display: flex;    justify-content: space-between;">
                        
                    <button type="button" class="btn btn-info update m-1" updateItem="${myobject.pid}"><i> <i class="fa-solid fa-pen-to-square"></i> Update</i></button>
                    
                        <button type="button" class="btn btn-warning rem m-1" 
                        deleteItem="${myobject.pid}"><i> <i class="fa-solid fa-trash "></i> Remove</i></button>
                    </div>
                   </div>
                   </div>
                   `
          );
        });
      }
    }

    else{
      $(".myModal").show();
      return false;
    }
  });
})





//     function check()
//   {
//     // console.log(localStorage)
//     if($(".regform").valid())
//     {
//         let key=Object.keys(localStorage);
//         let fname=$(".fname").val();
//         let lname=$(".lname").val();
//         let pnumber=$(".pnumber").val();
//         let email=$(".email").val();
//         let pswd=$(".pswd").val()

//         let arr=[];
//       let myObject=
//       {
//           fname:fname,
//           lname:lname,
//           pnumber:pnumber,
//           email:email,
//           pswd:pswd
//       };    
      
//       // let flag;
//       // $.each(arr,function(position,value) 
//       //   {
//       //     if (email == myObject.email);
//       //   })
  
//         if(key.length==0 )
//         {
//           arr.push(myObject);
//           localStorage.setItem("key", JSON.stringify(arr));
//           alert("User added Successfully");
//         }
//         // else if()
//         // {
//         //   alert("User already exists");
//         // }
//         else{
//           arr.push(myObject);
//           localStorage.setItem("key", JSON.stringify(arr));
//           alert("User added Successfully");
//         }

//     };
//   }

  

//   // function setData(a,b,c,d,e)
//   // {
      
//   //     arr.push(myObject);
//   //     localStorage.setItem("key", JSON.stringify(arr));
//   //     alert("You are registered successfully !!");
//   //     $(".regform").trigger("reset");
    
//   //   }





//   $('.logform').validate({
//     rules: {
//       email:
//       {
//           required:true,
//           email:true
//       },
//       pswd:
//       {
//           required:true,
//           minlength:5
//       }
//     },
//     submitHandler: function(form) {
//         form.submit();
//     }
// });

 
    
    // console.log("sahi");
  

  //   function userRegistration() {
  //     const userData = {
  //         email: document.getElementById('register-email').value,
  //         password: document.getElementById('register-pass').value
  //     };
  //     localStorage.setItem('UsersLogin', JSON.stringify(userData));
  //     window.location.reload();
  // }
  
  // function loginUser() {
  //     const loginEmail = document.getElementById('login-email').value
  //     const loginPass = document.getElementById('login-pass').value
  //     if (localStorage.getItem('UsersLogin')) {
  //         const loginDeets = JSON.parse(localStorage.getItem('UsersLogin'))
  //         if (loginEmail === loginDeets.email && loginPass === loginDeets.password) {
  //             console.log('Login successful')
  //         } else {
  //             console.log('Wrong credentials')
  //         }
  //     } else {
  //         console.log('Not a registered user')
  //     }
  // }
  
  
  // function UserRegistration() {
  //     let storedUsers = localStorage.UsersLogin ? JSON.parse(localStorage.UsersLogin) : [];
  //     const userData = {
  //         email: document.getElementById('register-email').value,
  //         password: document.getElementById('register-pass').value
  //     };
  //     storedUsers.push(userData);
  //     localStorage.setItem('UsersLogin', JSON.stringify(storedUsers));
  //     window.location.reload();
  // }
  
  // function loginUser() {
  //     const loginEmail = document.getElementById('login-email').value
  //     const loginPass = document.getElementById('login-pass').value
  //     if (localStorage.getItem('UsersLogin')) {
  //         const allStoredUsers = JSON.parse(localStorage.getItem('UsersLogin'));
  //         const matchedUser = allStoredUsers.filter(user => {
  //             return loginEmail === user.email && loginPass === user.password;
  //         })
  //         if (matchedUser.length) {
  //             console.log('Login successful')
  //         } else {
  //             console.log('Wrong credentials')
  //         }
  //     } else {
  //         console.log('Wrong credentials') // Don't say "Not a registered user"
  //     }
  // }
  



  // function check() {
    //     if ($(".regform").valid()) {
    //       let key = Object.keys(localStorage);
    //       let fname = $(".fname").val();
    //       let lname = $(".lname").val();
    //       let pnumber = $(".pnumber").val();
    //       let email = $(".email").val();
    //       let pswd = $(".pswd").val();
    
    //       let arr = [];
    //       let myObject =
    //       {
    //         fname: fname,
    //         lname: lname,
    //         pnumber: pnumber,
    //         email: email,
    //         pswd: pswd
    //       };
    
    //       if (key.length == 0) {
    //         arr.push(myObject);
    //         localStorage.setItem("key", JSON.stringify(arr));
    //         alert("User added Successfully");
    //       }
    //       else {
    //         let a = JSON.parse(localStorage.getItem("key"));
    //         let flag=1;
    //         $.each(a, function (position, value) {          
    //           let storedemail = value.email;
              
    //           if (myObject.email == storedemail) {
    //             flag=0;
    //             alert("User already exists");
    //           }
    
    //         })
    
    //         if(flag==1)
    //         {
    //           arr.push(myObject);
    //             localStorage.setItem("key", JSON.stringify(arr));
    //             alert("User added Successfully");
    //         }
            
    //       }
    
    //     }
    //   }
    // console.log("local storage",localStorage)