const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", inputElValidation);

function inputElValidation(event) {
	if (event.currentTarget.value.length < Number(inputEl.dataset.length)) {
		inputEl.classList.add("invalid");
	} else {
		inputEl.classList.contains("invalid")
			? inputEl.classList.replace("invalid", "valid")
			: inputEl.classList.add("valid");
	}

	console.log(
		`input length: ${event.currentTarget.value.length}, data-length: ${Number(
			inputEl.dataset.length
		)}, condition: ${!(
			event.currentTarget.value.length < Number(inputEl.dataset.length)
		)}`
	);
}
