// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // Add a click event listener to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get product info from data attributes
            const productId = button.dataset.id;
            const productName = button.dataset.name;
            const productPrice = parseFloat(button.dataset.price);

            // Get the quantity from the corresponding input field
            const quantityInput = document.getElementById('qty-' + productId);
            const quantity = parseInt(quantityInput.value);

            // Validate quantity
            if (quantity <= 0) {
                alert('Please enter a valid quantity.');
                return;
            }

            // Get the existing cart from localStorage, or initialize an empty array
            // localStorage only stores strings, so we use JSON.parse()
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product is already in the cart
            const existingItemIndex = cart.findIndex(item => item.id === productId);

            if (existingItemIndex > -1) {
                // If it exists, update the quantity
                cart[existingItemIndex].quantity += quantity;
            } else {
                // If it doesn't exist, add it as a new item
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: quantity
                });
            }

            // Save the updated cart back to localStorage
            // We must stringify the array before saving
            localStorage.setItem('cart', JSON.stringify(cart));

            // Give user feedback
            alert(quantity + ' x ' + productName + ' has been added to your cart.');

            // Reset quantity input to 1
            quantityInput.value = 1;
        });
    });
});