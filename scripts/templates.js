function dishTemplate(dish) {
    return /*html*/ `
            <div class="dish-card">
                <img src="../assets/img/dishes/classic-bbq-bacon-burger.jpg" alt="">
                <div class="dish-text-wrapper">
                    <div class="dish-name">
                        <h4>${dish.name}</h4>
                        <p>${dish.description}</p>
                    </div>
                    <div class="dish-price">
                        <p>${dish.price} €</p>
                        <button class="add-button">add to basket</button>
                    </div>
                </div>
            </div>
    `;
}
