const burgerRef = document.getElementById("burger-container");
const pizzaRef = document.getElementById("pizza-container");
const saladRef = document.getElementById("salad-container");
const shakeRef = document.getElementById("milkshake-container");
const dessertRef = document.getElementById("dessert-container");
const CART_REF = document.getElementById("cart-wrapper");
const DIALOG_REF = document.getElementById("confirmation");

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
        hideMobileBasket();
    }
    renderCartIcon();
}

function toggleMobileBasket() {
    CART_REF.classList.toggle("open");
}

function hideMobileBasket() {
    CART_REF.classList.remove("open");
}

function openEmptyBasket() {
    CART_REF.classList.toggle("empty");
    CART_REF.innerHTML = basketTemplateEmpty();
}

function renderBasket() {
    const DISH_REF = document.getElementById("cart-dishes");
    const basket = dishes.filter((b) => b.amount > 0);
    DISH_REF.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
        DISH_REF.innerHTML += basketDishTemplate(basket[i]);
    }
    renderSubtotal();
    renderDelivery();
    renderTotal();
}

function renderAddButton() {
    dishes.forEach((dish) => toggleAddButton(dish.ID));
}

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
    renderSubtotal();
    renderDelivery();
    renderTotal();
    renderCartIcon();
}

function decreaseAmount(id) {
    const dish = dishes.find((d) => d.ID === id);
    dish.amount--;
    saveDishes();
    toggleAddButton(id);
    renderSubtotal();
    renderDelivery();
    renderTotal();
    renderCartIcon();
    if (dish.amount > 0) {
        renderBasketDish(id);
    } else {
        showBasket();
    }
}

function deleteDish(id) {
    const dish = dishes.find((d) => d.ID === id);
    dish.amount = 0;
    saveDishes();
    toggleAddButton(id);
    renderSubtotal();
    renderDelivery();
    renderTotal();
    showBasket();
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

// #endregion add dishes to cart

// #region calculate price in cart

function calcSubtotal() {
    const basket = dishes.filter((dish) => dish.amount > 0);
    let subtotal = 0;
    for (let index = 0; index < basket.length; index++) {
        subtotal += basket[index].amount * basket[index].price;
    }
    return subtotal;
}

function renderSubtotal() {
    const SUBTOTAL_REF = document.getElementById("subtotal");
    SUBTOTAL_REF.innerHTML = subtotalTemplate(calcSubtotal());
    calcDelivery(calcSubtotal());
}

function calcDelivery(subtotal) {
    let deliveryFee = 4.99;
    if (subtotal >= 50) {
        deliveryFee = 0;
    }
    return deliveryFee;
}

function renderDelivery() {
    const DELIVERY_REF = document.getElementById("delivery");
    DELIVERY_REF.innerHTML = deliveryTemplate(calcDelivery(calcSubtotal()));
}

function calcTotal() {
    return calcSubtotal() + calcDelivery(calcSubtotal());
}

function renderTotal() {
    const totalRef = document.getElementById("total");
    totalRef.innerHTML = totalTemplate(calcTotal());
}

// #endregion calculate price in cart

// #region checkout

function checkout() {
    const basket = dishes.filter((dish) => dish.amount > 0);
    for (let index = 0; index < basket.length; index++) {
        basket[index].amount = 0;
        saveDishes();
        toggleAddButton(index + 1);
        showBasket();
        confirmation();
    }
}

function confirmation() {
    showModal();
    DIALOG_REF.classList.add("open");
    DIALOG_REF.showModal();
    setTimeout(() => DIALOG_REF.close(), 5000);
    setTimeout(() => DIALOG_REF.classList.remove("open"), 5000);
}

function showModal() {
    DIALOG_REF.innerHTML = confirmationTemplate();
}

function closeConfirmation() {
    DIALOG_REF.close();
    DIALOG_REF.classList.remove("open");
}

// #endregion checkout

// #region local storage

function getDishes() {
    dishes = JSON.parse(localStorage.getItem("dishes")) || myDishes;
}

function saveDishes() {
    localStorage.setItem("dishes", JSON.stringify(dishes));
}

// #endregion local storage

// #region navbar

function renderCartIcon() {
    const CartIconRef = document.getElementById("cart-icon");
    if (dishes.some((dish) => dish.amount > 0)) {
        CartIconRef.innerHTML = OrangeCartTemplate(calcTotalAmount());
    } else {
        CartIconRef.innerHTML = WhiteCartTemplate();
    }
}

function calcTotalAmount() {
    let TotalAmount = 0;
    for (let i = 0; i < dishes.length; i++) {
        TotalAmount += dishes[i].amount;
    }
    return TotalAmount;
}

// #endregion navbar

// Initialization
function init() {
    getDishes();
    saveDishes();
    renderDishes();
    showBasket();
}
