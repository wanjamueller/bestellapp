function dishTemplate(dish) {
    return /*html*/ `
            <div class="dish-card">
                <img class="dish-image" src="${dish.img}" alt="">
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

function basketDishTemplate(dish) {
    return /*html*/ `
        <div id="cart-dish${dish.ID}" class="cart-dish">
            <div class="cart-dish-name">
                <p>${dish.name}</p>
                <button class="delete" onclick="deleteDish(${dish.ID})"><img src="../assets/icons/delete.svg" alt=""></button>
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
                    <button id="close" onclick="closeConfirmation()"><img src="../assets/icons/close.svg" alt="" /></button>
                </div>
                <div class="truck">                
                    <img src="../assets/icons/truck.png" alt="delivery truck" />
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
        <a href=""><img src="./assets/icons/cart-orange.svg" alt="" /></a>
        <p ID="total-amount">${TotalAmount}</p>
    `;
}

function WhiteCartTemplate() {
    return /*html*/ `
        <a href=""><img src="./assets/icons/cart.svg" alt="" /></a>
    `;
}

// function navBar() {
//     return /*html*/ `
//         <ul>
//             <li>
//                 <a href="index.html"><img src="./assets/icons/home.svg" alt="" /></a>
//             </li>
//             <li>
//                 <img src="./assets/icons/person.svg" alt="" />
//             </li>
//             <li>
//                 <img src="./assets/icons/takeout.svg" alt="" />
//             </li>
//             <li>
//                     <a href=""><img src="./assets/icons/cart.svg" alt="" /></a>
//             </li>
//         </ul>

//     `;
// }
