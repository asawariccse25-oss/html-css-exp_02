// Total cart value
let total = 0;

// Common function to show message
function showMessage(text) {
    const msg = document.getElementById("msg");
    msg.innerText = text;

    // Auto clear after 2 sec
    setTimeout(() => {
        msg.innerText = "";
    }, 2000);
}

// Add to Cart
function addToCart(price) {

    total += price;

    // Update total
    document.getElementById("total").innerText = total;

    // Show message
    showMessage("Item added to cart 🛒");
}

// Clear Cart
function resetCart() {

    total = 0;

    // Update total
    document.getElementById("total").innerText = total;

    // Show message
    showMessage("Cart cleared ❌");
}