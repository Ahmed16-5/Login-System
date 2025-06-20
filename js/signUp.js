var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");

signupName.addEventListener("input", function () {
  validateInputs(signupName);
});
signupEmail.addEventListener("input", function () {
  validateInputs(signupEmail);
});
signupPassword.addEventListener("input", function () {
  validateInputs(signupPassword);
});

function registerUser() {
  // checkValidatetion(); // Ensure validation is set up before checking
  if (
    signupName.classList.contains("is-valid") &&
    signupEmail.classList.contains("is-valid") &&
    signupPassword.classList.contains("is-valid")
  ) {
    var check = checkUser(); // Check if the user already exists in the userList
    if (check) {
      message = document.getElementById("Message");
      message.classList.remove("alert", "alert-success");
      message.classList.add("alert", "alert-danger");
      message.innerHTML = "User already exists. Please use a different email.";
      signupEmail.classList.add("is-invalid");
      signupEmail.classList.remove("is-valid");
      signupEmail.value = ""; // Clear the email input
      signupEmail.focus(); // Set focus back to the email input
      // return; // Exit the function if user already exists
    } else {
      var user = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
      };
      userList.push(user);
      console.log(userList);
      localStorage.setItem("userList", JSON.stringify(userList));
      var message = document.getElementById("Message");
      message.classList.remove("alert", "alert-danger");
      message.classList.add("alert", "alert-success");
      message.innerHTML = "User registered successfully!";
      clearInputs();
    }
  }
}

function checkUser() {
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  if (userList.length === 0) {
    return false;
  }
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].email === signupEmail.value) {
      return true;
    }
  }
  return false;
}

function validateInputs(element) {
  var regex = {
    signupName: /^[A-Z][a-z]{2,10}$/,
    signupEmail: /^[^\s@]+@(gmail|yahoo)\.com$/,
    signupPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };
  if (regex[element.id].test(element.value) == true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
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
