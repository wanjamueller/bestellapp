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
                        <button id="add-button${dish.ID}" onclick="increaseAmount(${dish.ID})" class="add-button">add to basket</button>
                    </div>
                </div>
            </div>
    `;
}

function basketTemplate() {
    return /*html*/ `
        <div id="cart" class="cart">
            <h2>Your Basket</h2>
            <section id="cart-dishes" class="basket-dishes">
            </section>
            <div class="subtotal"></div>
            <div class="total"></div>
            <button>Buy now</button>
        </div>
    `;
}

function basketDishTemplate(dish) {
    return /*html*/ `
        <div id="cart-dish" class="cart-dish">
            <p>${dish.amount} x ${dish.name}</p>
            <div class="amount-price">
                <div class="amount">
                    <button>+</button>
                    <p>${dish.amount}</p>
                    <button>-</button>
                </div>
                <p>${dish.price}</p>
            </div>
        </div>
    `;
}
