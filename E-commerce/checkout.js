// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get the elements we'll be working with
    const cartItemsList = document.getElementById('cart-items-list');
    const emptyCartMsg = document.getElementById('empty-cart-msg');
    const grandTotalElement = document.getElementById('grand-total');
    const clearCartBtn = document.getElementById('clear-cart-btn');

    // Load the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render cart items on the page
    function renderCart() {
        // Clear the current list
        cartItemsList.innerHTML = '';
        let grandTotal = 0;

        // Check if cart is empty
        if (cart.length === 0) {
            emptyCartMsg.style.display = 'block';
            grandTotalElement.textContent = '0.00';
            return;
        }

        // If cart is not empty, hide the empty message
        emptyCartMsg.style.display = 'none';

        // Loop through each item in the cart
        cart.forEach(item => {
            // Calculate the subtotal for this item
            const itemSubtotal = item.price * item.quantity;
            grandTotal += itemSubtotal;

            // Create the HTML for the cart item
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');

            cartItemElement.innerHTML = `
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <div class="cart-item-details">
                    <p class="item-price">$${itemSubtotal.toFixed(2)}</p>
                    <p class="item-subtotal">($${item.price.toFixed(2)} each)</p>
                </div>
            `;

            // Add the new element to the list
            cartItemsList.appendChild(cartItemElement);
        });

        // Update the grand total on the page
        grandTotalElement.textContent = grandTotal.toFixed(2);
    }

    // Add event listener for the "Clear Cart" button
    clearCartBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your cart?')) {
            // Clear the cart array
            cart = [];
            // Remove the cart from localStorage
            localStorage.removeItem('cart');
            // Re-render the cart (which will now be empty)
            renderCart();
        }
    });

    // Initial render of the cart when the page loads
    renderCart();
});