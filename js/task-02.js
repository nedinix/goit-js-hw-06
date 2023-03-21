const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const containerEl = document.querySelector("#ingredients");

const createItemOfIngredients = (ingredients) => {
	return ingredients.map((ingredient) => {
		const ingredientEl = document.createElement("li");
		ingredientEl.classList.add("item");
		ingredientEl.textContent = ingredient;

		return ingredientEl;
	});
};

const items = createItemOfIngredients(ingredients);

containerEl.append(...items);
