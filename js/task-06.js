const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", inputElValidation);

function inputElValidation(event) {
	event.currentTarget.value.trim().length < Number(inputEl.dataset.length)
		? inputEl.classList.add("invalid")
		: inputEl.classList.replace("invalid", "valid");

	console.log(
		`input length: ${event.currentTarget.value.length}, data-length: ${Number(
			inputEl.dataset.length
		)}, condition: ${!(
			event.currentTarget.value.length < Number(inputEl.dataset.length)
		)}`
	);
}
