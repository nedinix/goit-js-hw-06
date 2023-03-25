function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const refs = {
	container: document.querySelector("#boxes"),
	input: document.querySelector('input[type="number"]'),
	createBtn: document.querySelector("[data-create]"),
	destroyBtn: document.querySelector("[data-destroy]"),
};

const color = getRandomHexColor();
let boxElSize = 30;

refs.input.addEventListener("input", onInputValue);
refs.createBtn.addEventListener("click", () => createBoxes(onInputValue()));
// refs.createBtn.addEventListener("click", createBoxes(onInputValue()));
refs.destroyBtn.addEventListener("click", destroyBoxes);

function onInputValue() {
	return Number(refs.input.value.trim());
}

function createBoxes(amount) {
	for (let i = 1; i <= amount; i += 1) {
		const newBoxEl = document.createElement("div");
		newBoxEl.style.width = `${boxElSize + i * 10}px`;
		newBoxEl.style.height = `${boxElSize + i * 10}px`;
		newBoxEl.style.backgroundColor = getRandomHexColor();
		refs.container.append(newBoxEl);
	}
}

function destroyBoxes() {
	refs.container.innerHTML = "";
}
