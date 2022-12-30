function clearErrors(elementClass) 
{
  var errors = document.getElementsByClassName(elementClass)[0];
  errors.innerHTML = "";
}
function seterror(id, error) {
  element = document.getElementById(id);
  element.innerHTML = error;
}

function validateform(event) 
{
  event.preventDefault();
  
  var val = true;
  var email = document.forms["myform"]["femail"].value;
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  var que = document.forms["myform"]["fquery"].value;
  var msg = document.forms["myform"]["fmessage"].value;
  var name = document.forms["myform"]["fname"].value;
  if (name == "") {
    seterror("nameerr", "Required");
    val = false;
   }

  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) 
  {
    seterror("emailerr", "Enter the valid email address");
    val = false;
  }

  
  if (que.length == 0) {
    seterror("queerr", "Length of Query cannot be zero!");
    val = false;
  }
  
  if (msg.length == 0) {
    seterror("msgerr", "Length of message cannot be zero");
    val = false;
  }
  if(val)
  {
    let mod=document.querySelector('.myformModal');
    mod.style.display='block';
    let content=document.querySelector(".modal-body");
    content.innerHTML =
    `
        <div>NAME: ${name}</div>
        <div>EMAIL: ${email}</div>
        <div>QUERY: ${que}</div>  
        <div>MESSAGE: ${msg}</div>
    `
  }
  else{
    let mod=document.querySelector('.myformModal');
    mod.style.display='none';
  }
 
}

function myfunc()
{
  let but=document.querySelector('.myformModal');
  but.style.display='none';
}



