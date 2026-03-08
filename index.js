const signUpbtn = document.getElementById("signup-btn");

signUpbtn.addEventListener("click",function(){
const userInput = document.getElementById("user-name");
const userName = userInput.value;

const passwordInput = document.getElementById("password");
const getPassword = passwordInput.value;

if (userName == "admin" && getPassword == "admin123"){
    alert("login Succesful");
    window.location.assign("./homepage.html")
} else {
    alert("Wrong Creadiantiol");
    return;
}})
