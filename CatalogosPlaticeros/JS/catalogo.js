const cardsContainer = document.getElementById('cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

function createCard(Data) {

    for (let i = 0; i < Data.length; i++) {

        const nameCard = Data[i].Name;
        const imgCard = parseInt(Data[i].Img);
        const priceCard = Data[i].Price;
        const availableCard = Data[i].Available;
        const category = Data[i].category;
        let card = cardProduct(nameCard, imgCard, priceCard, availableCard, category, Data[i].Details);
        cardsContainer.appendChild(card);
    }
}
createCard(DataPlaticeros);

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
        '<figure>\n' +
        '<img src="../assets/icons/bt_add_to_cart.svg" alt="Add to Cart">\n' +
        '</figure>\n' +
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
    setImage.setAttribute('src','../assets/images/imagenesCatalogo/' + Image + '.png');
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

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(i) {
    productDetailContainer.classList.add('inactive');
}