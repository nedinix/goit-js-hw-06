const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
	const item = document.createElement("li");
	item.classList.add("item");
	item.textContent = ingredient;
	list.append(item);
});
