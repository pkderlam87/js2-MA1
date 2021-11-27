import { getExistingWish } from "./getExistWish.js";
import { displayMessage } from "./displayMessage.js";

const wishes = getExistingWish();

const productContainer = document.querySelector(".card__group");

if (wishes.length === 0) {
    displayMessage("noResults", "No wishes yet", ".messages__place");
}

wishes.forEach((wish) => {
    productContainer.innerHTML += `<div class="squad rounded-lg">
                                        <h5>Product: ${wish.product}</h5>
                                        <h6>Price: £ ${wish.price}</h6>
                                        <div class = "buttons">
                                        <i class="fa fa-heart"></i>
                                        </div>
                                    </div>`;
});