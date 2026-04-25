// Total price
let total = 0;

// Add to Cart function
function addToCart(price) {

    // Add price to total
    total += price;

    // Update total on screen
    document.getElementById("total").innerText = total;

    // Show message
    document.getElementById("msg").innerText = "Item added to cart 🛒";

    // Auto clear message after 2 sec
    setTimeout(() => {
        document.getElementById("msg").innerText = "";
    }, 2000);
}

// 🔥 BONUS: Reset cart
function resetCart() {

    total = 0;

    document.getElementById("total").innerText = total;

    document.getElementById("msg").innerText = "Cart cleared ❌";

    setTimeout(() => {
        document.getElementById("msg").innerText = "";
    }, 2000);
}