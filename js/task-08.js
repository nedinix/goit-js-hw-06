const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;

	if (!email || !password) {
		alert("Всі поля повинні бути заповнені");
	} else {
		const userInfo = { email, password };
		console.log(userInfo);
	}

	event.currentTarget.reset();

	// const formData = new FormData(event.currentTarget);
	// formData.forEach((value, name) => {
	// 	console.log(`${name}: ${value}`);
	// });
}
