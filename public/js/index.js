
//This is the javascript code for sign in and create account eyeicon password//
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
 if(password.type  == "password"){
  password.type = "text";
  eyeicon.src = "eye-open.png";
}else{
  password.type = "password";
  eyeicon.src = "eye-close.png";
}
}
//This is where it ends//




      
  



