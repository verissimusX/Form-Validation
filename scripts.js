function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if(name.length < 1){
    text = "Please enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 1){
    text = "Please enter a subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please enter 10 digit phone number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 3){
    text = "Please enter valid email address";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 1){
    text = "Please enter your message";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
