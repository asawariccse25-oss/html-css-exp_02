let total = 0;

function showMessage(text) {
    const msg = document.getElementById("msg");
    msg.innerText = text;

    setTimeout(() => {
        msg.innerText = "";
    }, 2000);
}

function addToCart(price) {

    total += price;

    document.getElementById("total").innerText = total;

    showMessage("Item added to cart 🛒");
}

function resetCart() {

    total = 0;

    document.getElementById("total").innerText = total;

    showMessage("Cart cleared ❌");
}
