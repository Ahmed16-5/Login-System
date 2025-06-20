var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");

// localStorage.clear(); // Clear localStorage for testing purposes

var userList = JSON.parse(localStorage.getItem("userList")) || [];

var logInBtn = document.getElementById("logInBtn");

function loginUser() {
  var email = signinEmail.value;
  var password = signinPassword.value;
  if (email == "" || password == "") {
    message = document.getElementById("signInMessage");
    message.classList.remove("alert", "alert-success");
    message.classList.add("alert", "alert-danger");
    message.innerHTML = "please fill the inputs";
  }

  // if (userList[i].email === email && userList[i].password === password) {
  //   console.log("success");
  // }
  else {
    for (var i = 0; i < userList.length; i++) {
      if (userList[i].email == email && userList[i].password == password) {
        console.log("sssssssssssss");
        var message = document.getElementById("signInMessage");
        message.classList.remove("alert", "alert-danger");
        message.classList.add("alert", "alert-success");
        message.innerHTML = "successfully!";
        window.location.href = "./../welcomePage.html";
        localStorage.setItem("userName",userList[i].name)
        return;
      }
    }
    var message = document.getElementById("signInMessage");
    message.classList.remove("alert", "alert-success");
    message.classList.add("alert", "alert-danger");
    message.innerHTML = "user doesn't exist";
  }
}

function clearInputs() {
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
  //   var message = document.getElementById("Message");
  //   message.innerHTML = "";
  signupName.classList.remove("is-valid", "is-invalid");
  signupEmail.classList.remove("is-valid", "is-invalid");
  signupPassword.classList.remove("is-valid", "is-invalid");
}
