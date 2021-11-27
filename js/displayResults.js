import { getExistingWish } from "./getExistWish.js";

export function displayResults(products) {
    const resultsContainer = document.querySelector(".card__group");
    const wishes = getExistingWish();

    resultsContainer.innerHTML = "";
    products.forEach((product) => {
        let cssClass = "far";
        const doesObjectExist = wishes.find(function (wish) {
            return parseInt(wish.id) === product.id;
        });
        if (doesObjectExist) {
            cssClass = "fa";
        }

        resultsContainer.innerHTML += `<div class="squad rounded-lg">
                <h5>Product: ${product.title}</h5>
                <h6>Price: £ ${product.price}</h6>
                    <div class = "buttons">
                        <i class="${cssClass} fa-heart" data-id="${product.id}" data-product="${product.title}" data-price="${product.price}"></i>
                    </div>
            </div>`
        const wishButtons = document.querySelectorAll(".buttons i");
        wishButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });
    });
}

function handleClick(button) {
    console.log(button);
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.product;
    const price = this.dataset.price;
    console.log(title);
    const currentWishes = getExistingWish();

    const productExists = currentWishes.find(function (wish) {
        return wish.id === id;
    });

    if (productExists === undefined) {
        const product = { id: id, product: title, price: price };
        currentWishes.push(product);
        saveWishes(currentWishes);
    } else {
        const newWish = currentWishes.filter((wish) => wish.id !== id);
        saveWishes(newWish);
    }
}

function saveWishes(wishes) {
    localStorage.setItem("wishes", JSON.stringify(wishes));
}