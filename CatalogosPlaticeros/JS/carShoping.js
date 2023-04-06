// const item = [
//   {
//     img: "https://example.com/img1.jpg",
//     name: "Item 1",
//     price: 10.99,
//   },
//   {
//     img: "https://example.com/img2.jpg",
//     name: "Item 2",
//     price: 15.99,
//   },
//   {
//     img: "https://example.com/img3.jpg",
//     name: "Item 3",
//     price: 20.99,
//   },
//   {
//     img: "https://example.com/img4.jpg",
//     name: "Item 4",
//     price: 25.99,
//   },
//   {
//     img: "https://example.com/img5.jpg",
//     name: "Item 5",
//     price: 30.99,
//   },
// ];

// const container = document.querySelector('.my-order-content');

// for (let i = 0; i < products.length; i++) {
//   const shoppingCart = document.createElement('div');
//   shoppingCart.classList.add('shopping-cart');

//   const figure = document.createElement('figure');
//   const image = document.createElement('img');
//   image.setAttribute('src', products[i].image);
//   figure.appendChild(image);
//   shoppingCart.appendChild(figure);

//   const name = document.createElement('p');
//   name.textContent = products[i].name;
//   shoppingCart.appendChild(name);

//   const price = document.createElement('p');
//   price.textContent = products[i].price;
//   shoppingCart.appendChild(price);

//   const closeButton = document.createElement('img');
//   closeButton.setAttribute('src', '../assets/icons/icon_close.png');
//   closeButton.setAttribute('alt', 'close');
//   shoppingCart.appendChild(closeButton);

//   container.appendChild(shoppingCart);
// }


let productAddeds = JSON.parse(sessionStorage.getItem('productAdded'));
console.log(productAddeds);
