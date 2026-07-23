function dishTemplate(dish) {
    return /*html*/ `
            <div class="dish-card">
                <img src="${dish.img}" alt="">
                <div class="dish-text-wrapper">
                    <div class="dish-name">
                        <h4>${dish.name}</h4>
                        <p>${dish.description}</p>
                    </div>
                    <div class="dish-price">
                        <h4>${dish.price} €</h4>
                        <button class="add-button">add to basket</button>
                    </div>
                </div>
            </div>
    `;
}
