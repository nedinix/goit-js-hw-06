const counterEl = document.querySelector("#value");
const counterDecrementBtn = document.querySelector(
	'button[data-action="decrement"]'
);
const counterIncrementBtn = document.querySelector(
	'button[data-action="increment"]'
);

let counterValue = 0;

counterIncrementBtn.addEventListener("click", onCounterIncrementBtnClick);
counterDecrementBtn.addEventListener("click", oncounterDecrementBtnClick);

function onCounterIncrementBtnClick() {
	counterValue += 1;
	counterEl.textContent = counterValue;
}

function oncounterDecrementBtnClick() {
	counterValue -= 1;
	counterEl.textContent = counterValue;
}
