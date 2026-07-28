const burgerRef = document.getElementById("burger-container");
const pizzaRef = document.getElementById("pizza-container");
const saladRef = document.getElementById("salad-container");
const shakeRef = document.getElementById("milkshake-container");
const dessertRef = document.getElementById("dessert-container");
const CART_REF = document.getElementById("cart-wrapper");

// #region render dishes

function renderBurger() {
    const burger = dishes.filter((b) => b.category === "Burger & Sandwiches");

    for (let i = 0; i < burger.length; i++) {
        burgerRef.innerHTML += dishTemplate(burger[i]);
    }
}

function renderPizza() {
    const pizza = dishes.filter((p) => p.category === "Pizza");

    for (let pizzaIndex = 0; pizzaIndex < pizza.length; pizzaIndex++) {
        pizzaRef.innerHTML += dishTemplate(pizza[pizzaIndex]);
    }
}

function renderSalad() {
    const salad = dishes.filter((s) => s.category === "Salads");

    for (let saladIndex = 0; saladIndex < salad.length; saladIndex++) {
        saladRef.innerHTML += dishTemplate(salad[saladIndex]);
    }
}

function renderMilkshakes() {
    const milkshake = dishes.filter((m) => m.category === "Milkshakes");

    for (let shakeIndex = 0; shakeIndex < milkshake.length; shakeIndex++) {
        shakeRef.innerHTML += dishTemplate(milkshake[shakeIndex]);
    }
}

function renderDesserts() {
    const dessert = dishes.filter((d) => d.category === "Desserts");

    for (let dessertIndex = 0; dessertIndex < dessert.length; dessertIndex++) {
        dessertRef.innerHTML += dishTemplate(dessert[dessertIndex]);
    }
}

function renderDishes() {
    renderBurger();
    renderPizza();
    renderSalad();
    renderMilkshakes();
    renderDesserts();
}

// #endregion render dishes

// #region render basket

function showBasket() {
    if (dishes.some((dish) => dish.amount > 0)) {
        CART_REF.innerHTML = basketTemplate();
        renderBasket();
        renderAddButton();
    } else {
        CART_REF.innerHTML = "";
    }
}

function renderBasket() {
    const DISH_REF = document.getElementById("cart-dishes");
    const basket = dishes.filter((b) => b.amount > 0);
    DISH_REF.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
        DISH_REF.innerHTML += basketDishTemplate(basket[i]);
    }
}

function renderAddButton() {
    dishes.forEach((dish) => toggleAddButton(dish.ID));
}

// #endregion render basket

// #endregion render basket

// #region add dishes to cart

function amountOne(id) {
    const dish = dishes.find((d) => d.ID === id);
    dish.amount++;
    saveDishes();
    showBasket();
    toggleAddButton(id);
}

function increaseAmount(id) {
    const dish = dishes.find((d) => d.ID === id);
    dish.amount++;
    saveDishes();
    renderBasketDish(id);
}

function decreaseAmount(id) {
    const dish = dishes.find((d) => d.ID === id);
    dish.amount--;
    saveDishes();
    toggleAddButton(id);
    if (dish.amount > 0) {
        renderBasketDish(id);
    } else {
        showBasket();
    }
}

function toggleAddButton(id) {
    const dish = dishes.find((d) => d.ID === id);
    const ADD_BUTTON_REF = document.getElementById(`add-button${dish.ID}`);
    ADD_BUTTON_REF.innerText = dish.amount > 0 ? `added ${dish.amount} x` : "add to basket";
    ADD_BUTTON_REF.disabled = dish.amount > 0;
}

function renderBasketDish(id) {
    const dish = dishes.find((d) => d.ID === id);
    const DISH_UID_REF = document.getElementById(`cart-dish${dish.ID}`);
    DISH_UID_REF.outerHTML = basketDishTemplate(dish);
}

// function renderBasketDish(id) {
//     const DISH_REF = document.getElementById("cart-dishes");
//     const dish = dishes.find((d) => d.ID === id);
//     DISH_REF.innerHTML = basketDishTemplate(dish);
// }

// #endregion add dishes to cart

// #region calculate price in cart

// #endregion calculate price in cart

// #region local storage

function getDishes() {
    dishes = JSON.parse(localStorage.getItem("dishes")) || myDishes;
}

function saveDishes() {
    localStorage.setItem("dishes", JSON.stringify(dishes));
}

// #endregion local storage

// Initialization
function init() {
    getDishes();
    saveDishes();
    renderDishes();
    showBasket();
}
