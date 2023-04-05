const cardsContainer = document.getElementById('cards-container');

function createCard(Data) {

    for (let i = 0; i < Data.length; i++) {

    const nameCard = Data[i].Name;
    const imgCard = parseInt(Data[i].Img) ;
    const priceCard = Data[i].Price;
    const availableCard = Data[i].Available;
    const category = Data[i].category;
    let card= cardProduct(nameCard,imgCard,priceCard,availableCard,category)
    cardsContainer.innerHTML += card;
    let contenedor= document.querySelector('.product-card')
    contenedor.addEventListener('click',createAside(nameCard,imgCard,priceCard,availableCard,category, Data[i].Details))
}
}
createCard(DataPlaticeros)

function cardProduct(nameCard,imgCard,priceCard,availableCard,category ) {

    let card = '<div class="product-card">'+
    '<img src="../assets/images/ imagenesCatalogo/'+ imgCard +'.png">\n' +
        '<div class="product-info">\n' +
        '<div>\n' +
        '<p>' +"$"+ priceCard + '.000'+ '</p>\n' +
        '<p>' + nameCard + '</p>\n' +
        '<p>' + "Available: " + availableCard + '</p>\n' +
        '<p>' + "Category: " + category + '</p>\n' +
        '</div>\n' +
        '<figure>\n' +
        '<img src="../assets/icons/bt_add_to_cart.svg" alt="Add to Cart">\n' +
        '</figure>\n' +
        '</div>\n'+
        '</div>\n';
        return card
}
function createAside(nameCard,imgCard,priceCard,availableCard,category, Details) {
    const aside = document.getElementById('productDetail')
    let productDetail = '<aside id="productDetail" class="inactive">\n' +
    '<div class="product-detail-close">\n' +
    '<img src="./icons/icon_close.png" alt="close">\n' +
    '</div>\n' +
    '<img src="../assets/images/ imagenesCatalogo/'+ imgCard +'.png"\n' +
    'alt= ' + nameCard + '>\n' +
    '<div class="product-info">\n' +
    '<p> "Price: " ' +"$"+ priceCard + '.000'+'</p>\n' +
    '<p>' + nameCard + '</p>\n' +
    '<p>' + Details + '</p>\n' +
    '<p>' + availableCard +'</p>\n' +
    '<p>' + category +'</p>\n' +
    
    '<button class="primary-button add-to-cart-button">\n' +
    '<img src="./icons/bt_add_to_cart.svg" alt="add to cart">\n' +
    'Add to cart\n' +
    '</button>\n' +
    '</div>\n' +
    '</aside>';
    aside.innerHTML+= productDetail
    aside.style.display=''
}
