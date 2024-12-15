var loginEmailInput = document.getElementById("loginEmail");
var loginPasswordInput = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var signupAnchor = document.getElementById("signupAnchor");

var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signIn() {
  var loginEmail = loginEmailInput.value;
  var loginPassword = loginPasswordInput.value;
  if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
    window.location.href = "home.html";
  } else {
    swal({
      text: "Incorrect email or password",
    });
  }
}

function isCorrectEmailAndPassword(email, password) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
  return false;
}

loginBtn.addEventListener("click", function () {
  signIn();
});

signupAnchor.addEventListener("click", function () {
  window.location.href = "signup.html";

});


function lightMode() {
  localStorage.setItem("mode", "light");
  checkMode()

}

function darkMode() {
  localStorage.setItem("mode", "dark");
  checkMode()
}


var body = document.getElementById('body')
function checkMode() {
  var currentMode = localStorage.getItem("mode");
  
  console.log(body)
  if (currentMode === "dark") {
    body.className = "darkBody";
  } else {
    body.className = "lightBody";
  }
}

function setByDefault() {
  var checkModeState = localStorage.getItem("mode");
  if (checkModeState === null) {
    localStorage.setItem("mode" , "light");
    checkMode();
  } else {
    checkMode();
  }
}

window.onload = setByDefault();
