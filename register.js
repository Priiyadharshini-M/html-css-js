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
    const emailregex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]{2,3}$/;
    const passregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
//function formvalidation(){
   if(name=="")
   {
      document.getElementById("username").innerHTML=" ** Enter valid username"
   }
else if(!nameregex.test(name))
{
document.getElementById("username").innerHTML=" ** Enter the name only with alphabets between 3 to 15 characters";
 //return false;
}
else{
document.getElementById("username").innerHTML="";
fieldCount++;
}
if(phone=="")
   {
      document.getElementById("phone").innerHTML=" ** Enter phone number"
   }
else if(!phnregex.test(phone))
{
document.getElementById("phone").innerHTML=" ** The phone number should start with 6 or 7 or 8 or 9 and should contain 10 digits";
 //return false;
}
else{
document.getElementById("phone").innerHTML="";
fieldCount++;
}
if(email=="")
   {
      document.getElementById("emailid").innerHTML=" ** Email Id required"
   }
   else if(!emailregex.test(email)){
      document.getElementById("emailid").innerHTML=" ** Enter valid email id"
   }
   else{
      document.getElementById("emailid").innerHTML=""
      fieldCount++;
   }
   if(dob=="")
   {
      document.getElementById("db").innerHTML=" ** Please Select the date"
   }
   else if(calculateAge(dob)<18)
   {
      document.getElementById("db").innerHTML=" ** Age should be greater than 18"
   }
   else{
      document.getElementById("db").innerHTML=""
      fieldCount++;
   }
   /*if(document.getElementsByName("gender").value==""){
      document.getElementById("gender").innerHTML=" ** Please select one of these options"
   }
   else{
      document.getElementById("gender").innerHTML=""
   }*/
if(password=="")
   {
      document.getElementById("pwds").innerHTML=" ** Password Required"
   }
else if(password.length<=6 || password.length>15)
{
document.getElementById("pwds").innerHTML=" ** Password should be minimum of 7 and maximum of 14 in length";
//return false;
}
else if(!passregex.test(password))
{
   document.getElementById("pwds").innerHTML=" ** Your Password should contain atleat one special character, one alphabet and one number"
}
else{
document.getElementById("pwds").innerHTML="";
fieldCount++;
}
if(password!=confirmPass)
{
document.getElementById("cpwds").innerHTML=" ** Passwords are not matching";
//return false;
}
else{
document.getElementById("cpwds").innerHTML="";
fieldCount++;
}
if(course=="Select course..")
{
document.getElementById("course").innerHTML=" ** Select your course";
     //return false;
}
else{
document.getElementById("course").innerHTML="";
fieldCount++;
   }
   if(!document.getElementById("terms").checked)
   {
      document.getElementById("check").innerHTML=" ** Please select this box if you want to proceed";
   }
   else{
      document.getElementById("check").innerHTML=""
      fieldCount++;
}
}
function calculateAge(dob)
{
   var dob = new Date(dob);   
   var diff = Date.now() - dob.getTime();
   var age_dt = new Date(diff);       
   var year = age_dt.getUTCFullYear();
   var age = year - 1970;
   return age;
}
var fieldCount=0;
document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
   if(fieldCount<9){
  event.preventDefault()
   formvalidation()}
   else{
      alert("Successfully registered!!");
      document.getElementById("form_action").action="example1.html";
   }
})