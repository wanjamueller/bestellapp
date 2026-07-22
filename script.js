const burgerRef = document.getElementById("burger-container");

function renderBurger() {
    const burger = dishes.filter((b) => b.category === "Burger & Sandwiches");

    for (let burgerIndex = 0; burgerIndex < burger.length; burgerIndex++) {
        burgerRef.innerHTML += dishTemplate(burger[burgerIndex]);
    }
}

function init() {
    renderBurger();
}
