const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const surname = document.getElementById("surname");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const nameValue = username.value.trim();
	const emailValue = email.value.trim();
	const surnameValue = surname.value.trim();
	const passwordValue = password.value.trim();

	if (nameValue === "") {
		// error
		setErrorFor(username, "First name cannot be empty");
	} else {
		// successful
		setSuccessFor(username);
	}

	if (surnameValue === "") {
		// error
		setErrorFor(surname, "Last name cannot be empty");
	} else {
		// successful
		setSuccessFor(surname);
	}

	if (emailValue === "") {
		// error
		setErrorFor(email, "Email cannot be empty");
	}else {
		// successful
		setSuccessFor(email);
	}

	if (passwordValue === "") {
		// error
		setErrorFor(password, "Password cannot be empty");
	} else {
		// successful
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	small.innerText = message;
	formControl.className = "form-control error";
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}
function emailValidator(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)\(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}