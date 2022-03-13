//<script type="text/javascript">
    function formvalidation(){
         var name = document.getElementById("name").value;
         var phone = document.getElementById("phno").value;
         var email = document.getElementById("email").value;
         var dob = document.getElementById("dob").value;
         var password = document.getElementById("pwd").value;
         var confirmPass = document.getElementById("cpwd").value;
         var course = document.getElementById("ctype").value;
         const nameregex=/^[a-zA-Z]{3,15}$/;
         const phnregex=/[6-9]\d{9}/;
  if(!nameregex.test(name))
  {
    document.getElementById("username").innerHTML=" ** Please fill the name only with alphabets between 2 to 15 characters";
      return false;
  }
  else{
    document.getElementById("username").innerHTML="";
  }
  if(!phnregex.test(phone))
  {
    document.getElementById("phone").innerHTML=" ** The phone number should start with 6 or 7 or 8 or 9 and should contain 10 digits";
      return false;
  }
  else{
    document.getElementById("phone").innerHTML="";
  }
  if(password.length<=6 || password.length>15)
  {
    document.getElementById("pwds").innerHTML=" ** Password should be minimum of 7 and maximum of 14 in length";
    return false;
  }
  else{
    document.getElementById("pwds").innerHTML="";
  }
  if(password!=confirmPass)
  {
    document.getElementById("cpwds").innerHTML=" ** Passwords are not matching";
    return false;
  }
  else{
    document.getElementById("cpwds").innerHTML="";
  }
  if(course=="Select course..")
  {
    document.getElementById("course").innerHTML=" ** Please select a course";
          return false;
  }
  else{
    document.getElementById("course").innerHTML="";
        }
    }
    document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
        event.preventDefault()
        formvalidation()})