var cartItems = [];
var cartTotal = 0;

function addToCart(name, price, image) {
    var item = {
        name: name,
        price: price,
        image: image
    };
    cartItems.push(item);
    cartTotal += price;
    updateCart();
}

function removeFromCart(index) {
    cartTotal -= cartItems[index].price;
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    var cartList = document.getElementById('cart-items');
    var cartTotalEl = document.getElementById('cart-total');
    cartList.innerHTML = '';
    cartItems.forEach(function(item, index) {
        var li = document.createElement('li');
        li.innerHTML = '<img src="' + item.image + '"><span>' + item.name + '</span><span>$' + item.price + '</span><button onclick="removeFromCart(' + index + ')">X</button>';
        cartList.appendChild(li);
    });
    cartTotalEl.innerHTML = cartTotal;
}

document.getElementById('checkout-btn').addEventListener('click', function() {

});