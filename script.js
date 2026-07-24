const burgerRef = document.getElementById("burger-container");
const pizzaRef = document.getElementById("pizza-container");
const saladRef = document.getElementById("salad-container");
const shakeRef = document.getElementById("milkshake-container");
const dessertRef = document.getElementById("dessert-container");

// #region render dishes

function renderBurger() {
    const burger = dishes.filter((b) => b.category === "Burger & Sandwiches");

    for (let burgerIndex = 0; burgerIndex < burger.length; burgerIndex++) {
        burgerRef.innerHTML += dishTemplate(burger[burgerIndex]);
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

// Initialization
// function init() {
//     renderDishes();
// }
