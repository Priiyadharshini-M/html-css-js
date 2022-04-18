var currentTab = 0; 
showTab(currentTab); 
const nameregex=/^[a-zA-Z ]{3,15}$/;
const lnameregex=/^[a-zA-Z ]{0,15}$/;
const emailregex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]{2,3}$/;
const passregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]){7,14}/;
const phnregex=/[6-9]\d{9}/;
const yopregex=/[0-1]{1}[0-9]{1}\/[1-2]{1}[09]{1}[0129]{1}[0-9]{1}/

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 2)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    //document.getElementById("nextBtn").value="Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  if(n==(x.length-1)){
    //   document.getElementById("nextBtn").style.display="none";
      document.getElementById("prevBtn").style.display="none";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) {return false;}
  x[currentTab].style.display = "none";
//   console.log("length"+x.length);
//   console.log(currentTab);
  currentTab = currentTab + n;
  
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
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
let genderMale=document.getElementById("male").checked;
let genderFemale=document.getElementById("female").checked;
let genderOthers=document.getElementById("others").checked;
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
    if(document.getElementById("practice").value=="Select Practice..")
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
return bool;
    }
function validateForm() {
  //var x, y, i, 
  var valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
    if(currentTab==0){
    if (!validateName()||!validateLname()||!validateEmail()||!validatePass()
    ||!validateCnfmPass()) {
      // add an "invalid" class to the field:
      // and set the current valid status to false:
      valid = false;
      //return valid;
    }
    }
    else if(currentTab==1){
      if(!validatedob()||!validateGender()||!validateState()||!validatePhone())
      {
        valid=false;
        //return valid;
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
        //return valid;
      }
    }
  
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
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