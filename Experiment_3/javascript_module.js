<script>

// Total price variable
let total = 0;

// Add to cart function
function addToCart(price) {

    // Add price
    total = total + price;

    // Update total on screen
    document.getElementById("total").innerText = total;

    // Show message
    document.getElementById("msg").innerText = "Item added to cart 🛒";

}

// Optional: Clear message after 2 seconds
function clearMessage() {
    setTimeout(function() {
        document.getElementById("msg").innerText = "";
    }, 2000);
}

</script>