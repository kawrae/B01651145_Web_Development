$(document).ready(function () {
    const products = [
        { id: 1, name: "Laptop", price: 599.99 },
        { id: 2, name: "Headset", price: 37.99 },
        { id: 3, name: "Mouse", price: 25.99 },
        { id: 4, name: "Notebook", price: 6.50 },
    ];

    let cart = [];

    function displayProducts() {
        const productList = $("#product-list");
        productList.empty();
        products.forEach(product => {
            const productMarkup = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${product.name} - £${product.price.toFixed(2)}
                    <button class="btn btn-sm btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                </li>`;
            productList.append(productMarkup);
        });
    }

    function displayCart() {
        const cartList = $("#cart-list");
        cartList.html("");
        let totalPrice = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const cartMarkup = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${item.name} - £${itemTotal.toFixed(2)} (${item.quantity})
                    <div>
                        <button class="btn btn-sm btn-secondary increase-qty" data-id="${item.id}">+</button>
                        <button class="btn btn-sm btn-secondary decrease-qty" data-id="${item.id}">-</button>
                        <button class="btn btn-sm btn-danger remove-item" data-id="${item.id}">Remove</button>
                    </div>
                </li>`;
            cartList.append(cartMarkup);
        });

        $("#total-price").text(totalPrice.toFixed(2));
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === parseInt(productId));
        if (!product) {
            console.warn("Tried to add a product that doesn't exist.");
            return;
        }

        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        displayCart();
    }

    function increaseQuantity(productId) {
        const cartItem = cart.find(item => item.id === parseInt(productId));
        if (cartItem) {
            cartItem.quantity++;
            displayCart();
        }
    }

    function decreaseQuantity(productId) {
        const cartItem = cart.find(item => item.id === parseInt(productId));
        if (cartItem) {
            cartItem.quantity--;
            if (cartItem.quantity <= 0) {
                cart = cart.filter(item => item.id !== cartItem.id);
            }
            displayCart();
        }
    }

    function removeItem(productId) {
        cart = cart.filter(item => item.id !== parseInt(productId));
        displayCart();
    }

    function clearCart() {
        cart = [];
        displayCart();
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function loadCart() {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    }

    $("#product-list").on("click", ".add-to-cart", function () {
        const productId = $(this).data("id");
        addToCart(productId);
    });

    $("#cart-list").on("click", ".increase-qty", function () {
        const productId = $(this).data("id");
        increaseQuantity(productId);
    });

    $("#cart-list").on("click", ".decrease-qty", function () {
        const productId = $(this).data("id");
        decreaseQuantity(productId);
    });

    $("#cart-list").on("click", ".remove-item", function () {
        const productId = $(this).data("id");
        removeItem(productId);
    });

    $("#clear-cart").on("click", function () {
        clearCart();
    });

    loadCart();
    displayProducts();
    displayCart();
});
