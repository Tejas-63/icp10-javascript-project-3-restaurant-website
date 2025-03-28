<<<<<<< HEAD
let cart = [];
function addToCart(itemName) {
    let existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: itemName, quantity: 1 });
    }
    displayCart();
}
function displayCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    let cartContent = 'Your Cart:\n';
    cart.forEach(item => {
        cartContent += `${item.name} (${item.quantity})\n`;
    });

    alert(cartContent);
}

=======
function increaseQuantity(button, price) {
    let quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    let priceElement = button.parentElement.previousElementSibling.querySelector(".price");
    let basePrice = parseFloat(priceElement.getAttribute("data-price"));
    priceElement.textContent = (quantity * basePrice).toFixed(2);
}
function decreaseQuantity(button, price) {
    let quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        let priceElement = button.parentElement.previousElementSibling.querySelector(".price");
        let basePrice = parseFloat(priceElement.getAttribute("data-price"));
        priceElement.textContent = (quantity * basePrice).toFixed(2);
    }
}
>>>>>>> 7108546a5bb7642917c933f297722631a7218ede
