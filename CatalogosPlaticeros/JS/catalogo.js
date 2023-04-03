
const cardsContainer = document.querySelector('.cards-container');

for (let index = 0; index < 4; index++) {

    const productName = "f";
    const imageUrl = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940%22%3E";
    const price = 3000;
    const amount = 52;
    const category = "f";
    let card = '<div class="product-card">\n' +
        '<img src="' + imageUrl + '" alt="' + productName + '" title="' + productName + '" class="product-img">\n' +
        '<div class="product-info">\n' +
        '<div>\n' +
        '<p>' + price + '</p>\n' +
        '<p>' + productName + '</p>\n' +
        '<p>' + "Available: " + amount + '</p>\n' +
        '<p>' + "Category: " + category + '</p>\n' +
        '</div>\n' +
        '<figure>\n' +
        '<img src="./icons/bt_add_to_cart.svg" alt="Add to Cart">\n' +
        '</figure>\n' +
        '</div>\n' +
        '</div>\n';


    cardsContainer.innerHTML += card;
}

