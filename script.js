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

function cartHasItems() {
    return dishes.some((dish) => dish.amount > 0);
}

function renderBasket() {
    if (cartHasItems()) {
        CART_REF.innerHTML = basketTemplate();
    }
}

// #endregion render basket

// function renderBasket() {
//     const basket = dishes.filter((b) => b.amount > 0);
//     const DISH_REF = document.getElementById("cart-dishes");
//     CART_REF.innerHTML = basketTemplate();

//     for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
//         DISH_REF.innerHTML += basketDishTemplate(basket[basketIndex]);
//     }
// }

// #endregion render basket

// #region add dishes to cart

function increaseAmount(id) {
    const dish = dishes.find((d) => d.ID === id);
    dish.amount++;
    saveDishes();
    renderBasketDish(id);
}

function renderBasketDish(id) {
    const DISH_REF = document.getElementById("cart-dishes");
    const dish = dishes.find((d) => d.ID === id);

    DISH_REF.innerHTML += basketDishTemplate(dish);
}

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
    renderDishes();
    saveDishes();
    renderBasket();
}
