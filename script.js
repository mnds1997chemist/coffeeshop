// script.js

// Cart array to hold items
let cart = [];

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: parseFloat(itemPrice) };
    cart.push(item);
    updateCartSummary();
    showPopup(`Added ${itemName} to cart!`);
}

// Function to remove item from cart
function removeFromCart(itemIndex) {
    cart.splice(itemIndex, 1);
    updateCartSummary();
}

// Function to update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * 0.08; // Assuming 8% tax
    const total = subtotal + tax;

    document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax").innerText = `$${tax.toFixed(2)}`;
    document.getElementById("total").innerText = `$${total.toFixed(2)}`;
}

// Function to show popup message
function showPopup(message) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `<div class="popup-content">
        <p>${message}</p>
        <button class="closePopup" onclick="closePopup(this)">Close</button>
    </div>`;
    document.body.appendChild(popup);
    setTimeout(() => closePopup(popup), 3000); // auto close after 3 seconds
}

// Function to close popup
function closePopup(element) {
    element.parentElement.remove();
}

// Scroll to top button functionality
const scrollToTopButton = document.createElement("button");
scrollToTopButton.className = "scrollToTopButton";
scrollToTopButton.innerText = "↑";
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Event listeners for "Add to Cart" buttons
document.querySelectorAll(".btn-add-to-cart").forEach(button => {
    button.addEventListener("click", function(event) {
        const itemName = this.getAttribute("data-name");
        const itemPrice = this.getAttribute("data-price");
        addToCart(itemName, itemPrice);
    });
});