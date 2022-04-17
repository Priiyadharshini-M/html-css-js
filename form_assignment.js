var currentTab = 0;
//var j=0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
// var genderMale=document.getElementById("male").value;
// var genderFemale=document.getElementById("female").value;
// var genderOthers=document.getElementById("others").value;
// let valuee;
// if(document.getElementById("bsc").checked)
// {
//   valuee=document.getElementById("bsc").value;
// }
// if(document.getElementById("bsc").checked)
// {
//   valuee=document.getElementById("bsc").value;
// }
const nameregex=/^[a-zA-Z ]{3,15}$/;
const lnameregex=/^[a-zA-Z ]{0,15}$/;
const emailregex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]{2,3}$/;
const passregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]){7,14}/;
const phnregex=/[6-9]\d{9}/;
const yopregex=/[0-1]{1}[0-9]{1}\/[1-2]{1}[09]{1}[0129]{1}[0-9]{1}/

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    //document.getElementById("nextBtn").value="Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) {return true;}
  //else if(n==1 && validateForm(j)) {j=j+1;}
  // Hide the current tab:
  //else if(n!=1 && validateForm(j+1))
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
function validateName()
{
    var bool;
    if(!nameregex.test(document.getElementById("fuser").value))
  {
    document.getElementById("fname").innerHTML=" ** Please fill the name only with alphabets between 2 to 15 characters";
    document.getElementById("fuser").style.border="4px solid red";
    bool=false;
}
  else{
    document.getElementById("fname").innerHTML="";
    document.getElementById("fuser").style.border="4px solid #aaaaaa";
    bool=true;
  }
  return bool;
}
function validateLname()
{
    if(!lnameregex.test(document.getElementById("luser").value))
  {
    document.getElementById("lname").innerHTML=" ** Please fill the name only with alphabets between 2 to 15 characters";
    document.getElementById("luser").style.border="4px solid red";
    bool=false;
  }
  else{
    document.getElementById("lname").innerHTML="";
    document.getElementById("luser").style.border="4px solid #aaaaaa";
    bool=true;
  }
  return bool;
}
function validateEmail()
{
    if(!emailregex.test(document.getElementById("email").value))
  {
    document.getElementById("eid").innerHTML=" ** Enter valid EmailId";
    document.getElementById("email").style.border="4px solid red";
    bool=false;
  }
  else{
    document.getElementById("eid").innerHTML="";
    document.getElementById("email").style.border="4px solid #aaaaaa";
    bool=true;
  }
  return bool;
}
function validatePass()
{
    if(!passregex.test(document.getElementById("pwd").value))
  {
    document.getElementById("pid").innerHTML=" ** ** Password should have atleat 1 special character,1 alphabet,1 number of length 7 to 14";
    document.getElementById("pwd").style.border="4px solid red";
    bool=false;
  }
  else{
    document.getElementById("pid").innerHTML="";
    document.getElementById("pwd").style.border="4px solid #aaaaaa";
    bool=true;
  }
  return bool;
}
function validateCnfmPass()
{
    if(document.getElementById("cpwd").value=="" || document.getElementById("cpwd").value!=document.getElementById("pwd").value)
  {
    document.getElementById("cpid").innerHTML=" ** Passwords are not matching";
    document.getElementById("cpwd").style.border="4px solid red";
    bool=false;
  }
  else{
    document.getElementById("cpid").innerHTML="";
    document.getElementById("cpwd").style.border="4px solid #aaaaaa";
    bool=true;
  }
  return bool;
}
function validatedob()
{
    if(document.getElementById("dob").value=="")
   {
      document.getElementById("dobid").innerHTML=" ** Please Select the date"
      document.getElementById("dob").style.border="4px solid red";
      bool=false;
   }
   else if(calculateAge(document.getElementById("dob").value)<18)
   {
      document.getElementById("dobid").innerHTML=" ** Age should be greater than 18"
      document.getElementById("dob").style.border="4px solid red";
      bool=false;
    }
   else{
      document.getElementById("dobid").innerHTML=""
      document.getElementById("dob").style.border="4px solid #aaaaaa";
      bool=true;
   }
   return bool;
}
function validateGender(){
let genderMale=document.getElementById("male").value;
let genderFemale=document.getElementById("female").value;
let genderOthers=document.getElementById("others").value;
if(genderMale==false && genderFemale==false && genderOthers==false){
    document.getElementById("genderid").innerHTML="Please select one of the options"
    bool=false;
}
else{
    document.getElementById("genderid").innerHTML="";
    bool=true;
}
return bool;
}
function validateState(){
if(document.getElementById("state").value=="Select State..")
{
document.getElementById("stateid").innerHTML=" ** Select your state";
document.getElementById("state").style.border="4px solid red";
bool=false
}
else{
document.getElementById("stateid").innerHTML="";
document.getElementById("state").style.border="4px solid #aaaaaa";
bool=true;
   }
   return bool;
}
function validatePhone()
{
    if(!phnregex.test(document.getElementById("phone").value))
  {
    document.getElementById("phid").innerHTML=" ** Number should start with 6/7/8/9 & should have 10 digits";
    document.getElementById("phone").style.border="4px solid red";
    bool=false;
}
  else{
    document.getElementById("phid").innerHTML="";
    document.getElementById("phone").style.border="4px solid #aaaaaa";
    bool=true;
  }
  return bool;
}
// function validateDegree(){
//     if(document.getElementById("degree")=="Select degree..")
//     {
//     document.getElementById("degreeid").innerHTML=" ** Select your degree";
//     document.getElementById("degree").style.border="4px solid red";
//     bool=false
//     }
//     else{
//     document.getElementById("degreeid").innerHTML="";
//     document.getElementById("degree").style.border="4px solid #aaaaaa";
//     bool=true;
//        }
//        return bool;
//     }
//     function validateYOP()
// {
//     if(!yopregex.test(document.getElementById("yop").value))
//   {
//     document.getElementById("yopid").innerHTML=" ** Enter valid date and month";
//     document.getElementById("yop").style.border="4px solid red";
//     bool=false;
//   }
//   else{
//     document.getElementById("yopid").innerHTML="";
//     document.getElementById("yop").style.border="4px solid #aaaaaa";
//     bool=true;
//   }
//   return bool;
// }
function validatePractice(){
    if(document.getElementById("practice")=="Select Practice..")
    {
    document.getElementById("practiceid").innerHTML=" ** Select your practice";
    document.getElementById("practice").style.border="4px solid red";
    bool=false
    }
    else{
    document.getElementById("practiceid").innerHTML="";
    document.getElementById("practice").style.border="4px solid #aaaaaa";
    bool=true;
       }
       return bool;
    }
    function validatecheck()
    {
        if(!document.getElementById("check").checked)
   {
      document.getElementById("checkid").innerHTML=" ** Please select this box if you want to proceed";
      bool=false;
    }
   else{
      document.getElementById("checkid").innerHTML=""
      bool=true;
}
    }
function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  //  for (i = j; i < y.length; i++) {
    // If a field is empty...
    if(currentTab==0){
    if (!validateName()||!validateLname()||!validateEmail()||!validatePass()
    ||!validateCnfmPass()) {
      // add an "invalid" class to the field:
      // and set the current valid status to false:
      valid = false;
      return valid;
    }
    }
    else if(currentTab==1){
      document.getElementById("test").innerHTML=currentTab;
      if(!validatedob()||!validateGender()||!validateState()||!validatePhone())
      {
        valid=false;
        return valid;
      }
    }
    // else if(currentTab==2){
    //   if(!validateYOP())
    //   {
    //     valid=false;
    //     return valid;
    //   }
    // }
    else if(currentTab==4){
      if(!validatePractice()||!validatecheck())
      {
        valid=false;
        return valid;
      }
    }
    // else{
    //     y[i].className += "";
    // }
  //}
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
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
function enable(degree)
{
  let valuee;
if(document.getElementById("be").checked)
{
  valuee=document.getElementById("be").value;
}
if(document.getElementById("bsc").checked)
{
  valuee=document.getElementById("bsc").value;
}
if(document.getElementById("mba").checked)
{
  valuee=document.getElementById("mba").value;
}
if(document.getElementById("msc").checked)
{
  valuee=document.getElementById("msc").value;
}
if(document.getElementById("me").checked)
{
  valuee=document.getElementById("me").value;
}
if(document.getElementById("phd").checked)
{
  valuee=document.getElementById("phd").value;
}
if(document.getElementById("bed").checked)
{
  valuee=document.getElementById("bed").value;
}
  var checked=document.getElementById(valuee+"yop");
  checked.disabled=degree.checked?false:true;
  if(!checked.disabled)
  {
    checked.focus();
  }
  function validateYOP()
{
    if(!yopregex.test(document.getElementById(valuee+"yop").value))
  {
    document.getElementById("yopid").innerHTML=" ** Enter valid date and month";
    document.getElementById(valuee+"yop").style.border="4px solid red";
    bool=false;
  }
  else{
    document.getElementById("yopid").innerHTML="";
    document.getElementById(valuee+"yop").style.border="4px solid #aaaaaa";
    bool=true;
  }
  return bool;
}
}