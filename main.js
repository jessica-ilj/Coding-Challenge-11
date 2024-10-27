const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

//add event listener for product selection
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

// Calculate total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        const totalPrice = productPrice * quantity;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    } else {
        totalPriceElement.textContent = "0.00";  // Show $0 if invalid quantity
    }
}
// Handle order submission
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = parseInt(quantityInput.value);
    const totalPrice = totalPriceElement.textContent;
    
    if (quantity > 0) {
        orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
    } else {
        orderSummary.textContent = "Please enter a valid quantity before placing an order.";
    }
});