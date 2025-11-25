// CART DATA
let cart = {};

// ADD TO CART
function addToCart(product) {
    const id = product.id;

    if (!cart[id]) {
        cart[id] = {
            id: id,
            name: product.name,
            price: parseFloat(product.price),
            image: product.image,
            quantity: 0
        };
    }

    cart[id].quantity++;
    updateCartUI();
}

// REMOVE ITEM COMPLETELY
function removeItem(id) {
    delete cart[id];
    updateCartUI();
}

// INCREASE QUANTITY

function increaseQty(id) {
    cart[id].quantity++;
    updateCartUI();
}

// DECREASE QUANTITY

function decreaseQty(id) {
    if (cart[id].quantity > 1) {
        cart[id].quantity--;
    } else {
        delete cart[id];
    }
    updateCartUI();
}

// UPDATE CART UI

function updateCartUI() {

    const cartContainer = document.getElementById("cart-item");
    const badge = document.getElementById("cartcount");
    const totalPriceElement = document.getElementById("total-price");

    let html = "";
    let total = 0;
    let itemCount = 0;

    Object.values(cart).map(product => {

        total += product.price * product.quantity;
        itemCount += product.quantity;

        html += `
            <div class="col-12 mb-3 d-flex align-items-center">
                <img src="${product.image}" width="70" height="70" class="rounded">

                <div class="ms-3 flex-grow-1">
                    <h6 class="m-0">${product.name}</h6>
                    <p class="m-0 text-muted">₹${product.price}</p>

                    <div class="d-flex align-items-center mt-1">
                        <button class="btn btn-sm btn-outline-danger"
                                onclick="decreaseQty('${product.id}')">−</button>

                        <span class="mx-2">${product.quantity}</span>

                        <button class="btn btn-sm btn-outline-success"
                                onclick="increaseQty('${product.id}')">+</button>
                    </div>
                </div>

                <button class="btn btn-sm btn-outline-dark ms-2"
                        onclick="removeItem('${product.id}')">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `;
    });

    // Update offcanvas content
    cartContainer.innerHTML = html;

    // Update total
    totalPriceElement.innerText = "₹" + total.toFixed(2);

    // Update cart badge
    badge.innerText = itemCount;
}




// ------------------------------
// CART ICON → OPEN OFFCANVAS
// ------------------------------
document.getElementById("cartIcon").addEventListener("click", () => {
    let offcanvas = new bootstrap.Offcanvas(document.getElementById("offcanvasMenu"));
    offcanvas.show();
});


