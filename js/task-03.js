const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const galleryContainerEl = document.querySelector(".gallery");

const markup = images
	.map(
		({ url, alt }) =>
			`<li class='image'><img src='${url} alt='${alt}' height='800'></li>`
	)
	.join("");

galleryContainerEl.insertAdjacentHTML("beforeend", markup);

// const createGalleryItem = ({ url, alt }) => {
// 	const imageWrapEl = document.createElement("li");

// 	const imageEl = document.createElement("img");
// 	imageEl.src = url;
// 	imageEl.setAttribute("alt", alt);
// 	imageEl.setAttribute("height", 800);

// 	imageWrapEl.append(imageEl);

// 	return imageWrapEl;
// };

// const elements = images.map(createGalleryItem);

// galleryContainerEl.append(...elements);
