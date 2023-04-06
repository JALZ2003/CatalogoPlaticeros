const containerOrdersAndTotal = document.querySelector('.container');
const buttonCheck = containerOrdersAndTotal.querySelector('.primary-button');
const container = document.querySelector('.my-order-content');
const total = document.querySelector('.total');
const containerCount = document.querySelector('.navbar-shopping-cart');
const countProducts = containerCount.querySelector('div');
let operation = 0;
let productAddeds = JSON.parse(localStorage.getItem('productAdded'));
countProducts.textContent = productAddeds.length;
let productsCheck = [];
if (JSON.parse(localStorage.getItem('productsCheck')) != null) {
	productsCheck = JSON.parse(localStorage.getItem('productsCheck'));
}

function creatProductCart(nameCard, imgCard, priceCard, position) {
	const shoppingCart = document.createElement('div');
	shoppingCart.classList.add('shopping-cart');

	const figure = document.createElement('figure');
	const image = document.createElement('img');
	image.setAttribute('src', "../assets/images/imagenesCatalogo/" + imgCard + ".png");
	figure.appendChild(image);
	shoppingCart.appendChild(figure);

	const name = document.createElement('p');
	name.textContent = nameCard;
	shoppingCart.appendChild(name);

	const price = document.createElement('p');
	price.textContent = '$' + priceCard + '.000';
	shoppingCart.appendChild(price);

	const closeButton = document.createElement('img');
	closeButton.setAttribute('src', '../assets/icons/icon_close.png');
	closeButton.setAttribute('alt', 'close');
	shoppingCart.appendChild(closeButton);
	operation += parseInt(priceCard);
	shoppingCart.addEventListener('click', () => {
		sessionStorage.setItem('id', position);
		sessionStorage.setItem('price', priceCard);
		removeProduct();
	})
	return shoppingCart;
}

function insertProductAddeds(Data) {
	for (let i = 0; i < Data.length; i++) {
		let product = creatProductCart(Data[i].Name, Data[i].Image, Data[i].Price, i);
		container.appendChild(product);
	}
	total.textContent = '$' + operation + '.000';
}

insertProductAddeds(productAddeds);

function removeProduct() {
	let position = JSON.parse(sessionStorage.getItem('id'));
	let price = JSON.parse(sessionStorage.getItem('price'));
	let products = container.children;
	operation -= price;
	total.textContent = '$' + operation + '.000';
	countProducts.textContent = products.length - 1;
	productAddeds.splice(position, 1);
	localStorage.setItem('productAdded', JSON.stringify(productAddeds));
	products[position].remove();
}

buttonCheck.addEventListener('click', () => {
	checkButton();
	localStorage.setItem('productsCheck', JSON.stringify(productsCheck));
});

function checkButton() {
	let products = container.children;
	console.log(products);
	for (let i = 0; i < products.length; i++) {
		const price = parseInt(productAddeds[i].Price);
		productsCheck.push(productAddeds[i]);
		const element = products[i];
		operation -= price;
		total.textContent = '$' + operation + '.000';
		countProducts.textContent = products.length - 1;
		productAddeds.splice(i, 1);
		localStorage.setItem('productAdded', JSON.stringify(productAddeds));
		element.remove();
		i--;
	}
}