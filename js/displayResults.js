export function displayResults(products) {
    const resultsContainer = document.querySelector(".card__group");
    resultsContainer.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        resultsContainer.innerHTML += `<div class="squad rounded-lg">
            <h5>Product: ${products[i].title}</h5>
            <h6>Price: £ ${products[i].price}</h6>
            <div class = "buttons">
            <button class = "cardsButtons"><i class="fas fa-shopping-basket"></i></button>
            <button class = "cardsButtons"><i class="fas fa-trash-alt"></i></button>
                        </div>
            </div>`
    }
}