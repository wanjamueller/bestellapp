function dishTemplate(dish) {
    return /*html*/ `
        <div class="dish-card">
            <img class="dish-image" src="${dish.img}" alt="${dish.alt}">
            <div class="dish-text-wrapper">
                <div class="dish-name">
                    <h4>${dish.name}</h4>
                    <p>${dish.description}</p>
                </div>
                <div class="dish-price">
                    <h4>${dish.price} €</h4>
                    <button id="add-button${dish.ID}" onclick="amountOne(${dish.ID})" class="add-button">add to basket</button>
                </div>
            </div>
        </div>
    `;
}

function basketTemplate(dish) {
    return /*html*/ `
        <div id="cart" class="cart">
            <h2>Your Basket</h2>
            <section id="cart-dishes" class="basket-dishes">
            </section>
            <div id="subtotal" class="subtotal">
            </div>
            <div id="delivery" class="delivery">
            </div>
            <div id="total" class="total">
            </div>
            <button class="checkout" onclick="checkout()">Buy now</button>
        </div>
    `;
}

function basketTemplateEmpty() {
    return /*html*/ `
        <div id="cart" class="cart">
            <h2>Your Basket</h2>
            <p>Nothing here yet. Go ahead and choose something delicious!</p>
            <img src="./assets/icons/basket-empty.svg" alt="shopping cart icon">
        </div>
    `;
}

function basketDishTemplate(dish) {
    return /*html*/ `
        <div id="cart-dish${dish.ID}" class="cart-dish">
            <div class="cart-dish-name">
                <p>${dish.name}</p>
                <button class="delete" onclick="deleteDish(${dish.ID})"><img src="./assets/icons/delete.svg" alt="waste basket icon"></button>
            </div>
            <div class="amount-price">
                <div class="amount">
                    <button id="decrease${dish.ID}" onclick="decreaseAmount(${dish.ID})">-</button>
                    <p class="dish-amount">${dish.amount}</p>
                    <button id="increase${dish.ID}" onclick="increaseAmount(${dish.ID})">+</button>
                </div>
                <p>${dish.price} €</p>
            </div>
        </div>
    `;
}

function subtotalTemplate(subtotal) {
    return /*html*/ `
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)} €</p>
    `;
}

function deliveryTemplate(deliveryFee) {
    return /*html*/ `
        <p>Delivery fee</p>
        <p>${deliveryFee.toFixed(2)} €</p>
    `;
}

function totalTemplate(total) {
    return /*html*/ `
        <p>Total</p>
        <p>${total.toFixed(2)} €</p>
    `;
}

function confirmationTemplate() {
    return /*html*/ `
        <div class="order-confirmed">
            <div class="close-button">
                <button id="close" onclick="closeConfirmation()"><img src="./assets/icons/close.svg" alt="x icon to close" /></button>
            </div>
            <div class="truck">                
                <img src="./assets/icons/truck.png" alt="delivery truck" />
            </div>
            <div class="confirmation-txt">
                <p class="order">Order Confirmed!</p>
                <p class="way">Your food is on the way!</p>
            </div>
        </div>
    `;
}

function OrangeCartTemplate(TotalAmount) {
    return /*html*/ `
        <button class="cart-button" onclick="toggleMobileBasket()"><img src="./assets/icons/cart-orange.svg" alt="shopping cart icon" /></button>
        <p ID="total-amount">${TotalAmount}</p>
    `;
}

function WhiteCartTemplate() {
    return /*html*/ `
        <button class="cart-button-empty" onclick="openEmptyBasket()"><img src="./assets/icons/cart.svg" alt="shopping cart icon" /></button>
    `;
}
