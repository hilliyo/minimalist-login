window.addEventListener("load", start, false);

var usernameRegex = new RegExp('^[a-z0-9]{4,15}$');
var passwordRegex = new RegExp('^.{8,}$');
var usernameField, passwordField;

function start(){

	usernameField = document.getElementById("username");
	passwordField = document.getElementById("password");

	usernameField.addEventListener("blur", validateUsername, false);
	passwordField.addEventListener("blur", validatePassword, false);

	usernameField.addEventListener("keyup", validateUsername, false);
	passwordField.addEventListener("keyup", validatePassword, false);
}


function validateUsername() {
	if (usernameRegex.test(usernameField.value)) {
		document.getElementsByTagName("p")[0].style.display="none";
	}else{
		document.getElementsByTagName("p")[0].style.display="inline";
	}
	
}

function validatePassword(){
	if (passwordRegex.test(passwordField.value)) {
		document.getElementsByTagName("p")[1].style.display="none";
	}
	else{
		document.getElementsByTagName("p")[1].style.display="inline";
	}
}
