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
