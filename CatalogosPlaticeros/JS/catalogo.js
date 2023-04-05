const cardsContainer = document.getElementById('cards-container');

function createCard(Data) {

    for (let i = 0; i < Data.length; i++) {

        const nameCard = Data[i].Name;
        const imgCard = parseInt(Data[i].Img);
        const priceCard = Data[i].Price;
        const availableCard = Data[i].Available;
        const category = Data[i].category;
        let card = cardProduct(nameCard, imgCard, priceCard, availableCard, category, i);
        createAside(nameCard, imgCard, priceCard, availableCard, category, Data[i].Details, i);
        cardsContainer.appendChild(card);
    }
}
createCard(DataPlaticeros);

function cardProduct(nameCard, imgCard, priceCard, availableCard, category, i) {
    let content = document.createElement('div');
    content.className = "product-card";
    let card = '<img src="../assets/images/ imagenesCatalogo/' + imgCard + '.png">\n' +
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
        sessionStorage.setItem('id', i);
        viewDestails();
    });
    return content;
}

function createAside(nameCard, imgCard, priceCard, availableCard, category, Details, i) {
    const aside = document.getElementById('productDetail')
    let productDetail = '<aside id="productDetail" class= "inactive  details ' + i + '">\n' +
        '<div class="product-detail-close">\n' +
        '<img src="./icons/icon_close.png" alt="close">\n' +
        '</div>\n' +
        '<img src="../assets/images/ imagenesCatalogo/' + imgCard + '.png"\n' + 'alt= ' + nameCard + '>\n' +
        '<div class="product-info">\n' +
        '<p> "Price: " ' + "$" + priceCard + '.000' + '</p>\n' +
        '<p>' + nameCard + '</p>\n' +
        '<p>' + Details + '</p>\n' +
        '<p>' + availableCard + '</p>\n' +
        '<p>' + category + '</p>\n' +
        '<button class="primary-button add-to-cart-button">\n' +
        '<img src="./icons/bt_add_to_cart.svg" alt="add to cart">\n' +
        'Add to cart\n' +
        '</button>\n' +
        '</div>\n' +
        '</aside>';

    aside.innerHTML += productDetail;
}


function viewDestails() {
    let arrayProductDetail = document.querySelectorAll('.details');
    let containerCards = document.getElementById('main-container');

    arrayProductDetail.forEach((element, index) => {
        element.className = "inactive details " + index;
        containerCards.style.width = containerCards.offsetWidth;
    });
    let id = sessionStorage.getItem('id');
    for (let i = 0; i < arrayProductDetail.length; i++) {
        const element = arrayProductDetail[i];
        if (element.classList.contains(id)) {
            element.className = "active details " + id;
            containerCards.style.width = ((containerCards.offsetWidth - 360) / containerCards.offsetWidth) * 100 + "%";
            break;
        }
    }
}