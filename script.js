
function validateUser(){

  event.preventDefault();

  let log_email = document.getElementById("log_email");

  let pass_email = document.getElementById("pass_email");

  let log_email_error = document.getElementById("log_email_error");

  let log_email_verify = document.getElementById("log_email_verify");

  let log_pass_error = document.getElementById("log_pass_error");

  let log_pass_verify = document.getElementById("log_pass_verify");

  var log_email_check =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var log_pass_check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;



  if(!log_email.value.match(log_email_check))
  {
    event.preventDefault();
    log_email_error.innerHTML = "Must be a valid email";
  }

  else
  {
    log_email_error.innerHTML = "";
  }

  if (log_email.value.match(log_email_check))
  {
    log_email_verify.innerHTML = "Your Email Address is Valid"
  }

  if(!log_pass.value.match(log_pass_check))
  {
    event.preventDefault();
    log_pass_error.innerHTML = "Password should be at least 8 characters and should contain numbers, letters, symbols and 1 uppercase letter";
  }

  else
  {
    log_pass_error.innerHTML = "";
  }

  if (log_pass.value.match(log_pass_check))
  {
    log_pass_verify.innerHTML = "Password is Correct"
  }

  console.log(log_email.value + "\n" + log_pass.value)

}

 function array()
 {
    event.preventDefault();
    
    let firstname = document.getElementById("fn").value;

    let lastname = document.getElementById("ln").value;
  
    let email = document.getElementById("mail").value;
  
    let password = document.getElementById("pass").value;

    let fn = [firstname];
    let ln = [lastname];
    let mail = [email];
    let pass = [password];

    let output = 0;
    console.log(`ID             : ${output}`);
    console.log(`First Name     : ${fn[output]}`);
    console.log(`Last Name      : ${ln[output]}`);
    console.log(`E-Mail         : ${mail[output]}`);
    console.log(`Password       : ${pass[output]}`);
 }