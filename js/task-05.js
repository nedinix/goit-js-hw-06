const input = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

const defaultValue = nameLabel.textContent;

function onInputChange(event) {
	nameLabel.textContent = event.currentTarget.value.trim() || defaultValue;
}
