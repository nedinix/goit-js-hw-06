const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const containerEl = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
	const listEl = document.createElement("li");
	listEl.classList.add("item");
	listEl.textContent = ingredient;
	return listEl;
});

containerEl.append(...items);
