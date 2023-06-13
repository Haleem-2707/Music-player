const submit_btn = document.querySelector(".submit_button")
const btn1 = document.querySelector(".open-button")
const email = document.querySelector(".email")
const links = document.querySelector(".link")
const error_message = document.querySelector(".error_message")



// Email Validation



submit_btn.addEventListener("click", validate1)
function validate1() {
emailValue = email.value.trim()
const emailPattern = /^[a-zA-Z0-9.!£$+%*/?]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

 if (email.value.match(emailPattern)) {
    links.classList.remove("hidden");
    error_message.style.color = "white"
    error_message.innerHTML = " "

 }  else if(!email.value.match(emailPattern)) {
  error_message.innerHTML = "Invalid Email"
  error_message.style.color = "red"
   
 } if(emailValue === "") {
  error_message.innerHTML = "Email is required"
  error_message.style.color = "red"
 }
   
};





