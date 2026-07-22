const burgerRef = document.getElementById("burger-container");

function renderBurger() {
    for (let burgerI = 0; burgerI < 6; burgerI++) {
        burgerRef.innerHTML += burgerSectionTemplate();
    }
}

function init() {
    renderBurger();
}
