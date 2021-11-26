export function displayResults(products) {
    const resultsContainer = document.querySelector(".card__group");
    resultsContainer.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        resultsContainer.innerHTML += `<div class="squad rounded-lg">
                <h5>Product: ${products[i].title}</h5>
                <h6>Price: £ ${products[i].price}</h6>
                    <div class = "buttons">
                        <button class = "cardsButtons add"><i class="fas fa-shopping-basket" data-id=${products[i].id} data-product=${products[i].title} data-price=${products[i].price}></i></button>
                        <button class = "cardsButtons del"><i class="fas fa-trash-alt"></i></button>
                    </div>
            </div>`
        const wishButtons = document.querySelectorAll(".add");
        wishButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });
    }
}

function handleClick(button) {
    console.log(button);
}
    /*this.classList.toggle("fa");
this.classList.toggle("far");

const id = this.dataset.id;
const name = this.dataset.name;

const currentFavs = getExistingFavs();

const productExists = currentFavs.find(function (fav) {
return fav.id === id;
});

if (productExists === undefined) {
const product = { id: id, name: name };
currentFavs.push(product);
saveFavs(currentFavs);
} else {
const newFavs = currentFavs.filter((fav) => fav.id !== id);
saveFavs(newFavs);
}
}

function saveFavs(favs) {
localStorage.setItem("favourites", JSON.stringify(favs));
}*/