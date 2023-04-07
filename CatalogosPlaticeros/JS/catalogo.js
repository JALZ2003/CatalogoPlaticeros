const cardsContainer = document.getElementById('cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const buttonAddedProductDetail = productDetailContainer.querySelector('button');
const sendArrayProductAdded = document.querySelector('.navbar-shopping-cart');
const formSelectCategories = document.querySelector('.categories');
const formSelectupward = document.querySelector('.upward');
const price = document.getElementById('price');
const filter = document.getElementById('filter');
let countProduct = sendArrayProductAdded.querySelector('div');
let prductAded = [];
if (JSON.parse(localStorage.getItem('productAdded')) != null) {
    prductAded = JSON.parse(localStorage.getItem('productAdded'));
}
countProduct.textContent = prductAded.length;

let isUpward = () => { return JSON.parse(formSelectupward.value) };
let isCategory = () => { return formSelectCategories.value != 'All' };
let isPrice = () => { return parseInt(price.value) != 0 };

insertCategory();
validation();

function validation() {
    if (JSON.parse(localStorage.getItem('productsCheck')) != null) {
        let checked = JSON.parse(localStorage.getItem('productsCheck'));
        discountsAvailables(checked);
        createCard(filters(DataPlaticeros));
    } else {
        createCard(filters(DataPlaticeros));
    }
}

function createCard(Data) {
    for (let i = 0; i < Data.length; i++) {
        const nameCard = Data[i].Name;
        const imgCard = parseFloat(Data[i].Img);
        const priceCard = Data[i].Price;
        const availableCard = Data[i].Available;
        const category = Data[i].category;
        let card = cardProduct(nameCard, imgCard, priceCard, availableCard, category, Data[i].Details);
        cardsContainer.appendChild(card);
    }
}

function cardProduct(nameCard, imgCard, priceCard, availableCard, category, details) {
    let content = document.createElement('div');
    content.className = "product-card";
    let card = '<img src="../assets/images/imagenesCatalogo/' + imgCard + '.png">\n' +
        '<div class="product-info">\n' +
        '<div>\n' +
        '<p>' + "$" + priceCard + '.000' + '</p>\n' +
        '<p>' + nameCard + '</p>\n' +
        '<p>' + "Available: " + availableCard + '</p>\n' +
        '<p>' + "Category: " + category + '</p>\n' +
        '</div>\n' +

        '</div>\n';
    content.innerHTML += card;
    content.addEventListener('click', () => {
        sessionStorage.setItem('Name', nameCard);
        sessionStorage.setItem('Image', imgCard);
        sessionStorage.setItem('Price', priceCard);
        sessionStorage.setItem('Avaible', availableCard);
        sessionStorage.setItem('Category', category);
        sessionStorage.setItem('details', details);
        viewDestails();
    });
    return content;
}

function viewDestails() {
    let Name = sessionStorage.getItem('Name');
    let Image = sessionStorage.getItem('Image');
    let Price = sessionStorage.getItem('Price');
    let Avaible = sessionStorage.getItem('Avaible');
    let Category = sessionStorage.getItem('Category');
    let details = sessionStorage.getItem('details');
    let setImage = productDetailContainer.querySelector('.image');
    setImage.setAttribute('src', '../assets/images/imagenesCatalogo/' + Image + '.png');
    let setPrice = productDetailContainer.querySelector('.price');
    setPrice.textContent = 'Price: $' + Price + '000';
    let setName = productDetailContainer.querySelector('.name');
    setName.textContent = 'Name: ' + Name;
    let setDetails = productDetailContainer.querySelector('.details');
    setDetails.textContent = details;
    let setAvaible = productDetailContainer.querySelector('.avaible');
    setAvaible.textContent = Avaible;
    let setCategory = productDetailContainer.querySelector('.category');
    setCategory.textContent = 'Category: ' + Category;
    openProductDetailAside();
}

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

buttonAddedProductDetail.addEventListener('click', () => {
    let Name = sessionStorage.getItem('Name');
    let Image = sessionStorage.getItem('Image');
    let Price = sessionStorage.getItem('Price');
    addedProduct(Name, Image, Price);
});

sendArrayProductAdded.addEventListener('click', () => {
    localStorage.setItem('productAdded', JSON.stringify(prductAded));
    window.location.href = '../pages/cart.html';
})

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function addedProduct(nameCard, imgCard, priceCard) {
    let product = { Name: nameCard, Image: imgCard, Price: priceCard };
    prductAded.push(product);
    countProduct.textContent = prductAded.length;
}

function discountsAvailables(list) {
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        for (let j = 0; j < DataPlaticeros.length; j++) {
            const data = DataPlaticeros[j];
            if (data.Name === element.Name) {
                data.Available--;
            }
        }
    }
    localStorage.removeItem('productsCheck');
}

let validatePrice = (getPrice, dataPrice) => { return dataPrice.Price <= getPrice };

let validateCategory = (getCategory, dataCategory) => { return getCategory == dataCategory.category };

function filters(list) {
    let getPrice = parseInt(price.value);
    let getCategory = formSelectCategories.value;

    if (isUpward()) {
        return validations(list, getCategory, getPrice).sort((a, b) => a.Price - b.Price);
    } else {
        return validations(list, getCategory, getPrice).sort((a, b) => b.Price - a.Price);
    }
}

function validations(list, getCategory, getPrice) {
    if (isCategory()) {
        if (isPrice()) {
            return list.filter(data => {
                return validateCategory(getCategory, data) && validatePrice(getPrice, data);
            })
        } else {
            return list.filter(data => {
                return validateCategory(getCategory, data);
            });
        }
    } else {
        if (isPrice()) {
            return list.filter(data => {
                return validatePrice(getPrice, data);
            })
        } else {
            return list;
        }
    }
}

filter.addEventListener('click', () => {
    removeElementsCard();
    createCard(filters(DataPlaticeros));
})

function getCategories() {
    let categories = [];
    for (let i = 0; i < DataPlaticeros.length; i++) {
        const element = DataPlaticeros[i];
        if (!categories.includes(element.category)) {
            categories.push(element.category);
        }
    }
    return categories;
}

function insertCategory() {
    getCategories().forEach(category => {
        let option = '<option value="' + category + '"> ' + category + ' </option>';
        formSelectCategories.innerHTML += option;
    })
}

function removeElementsCard() {
    let elements = cardsContainer.children;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.remove();
        i--;
    }
}