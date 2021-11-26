import { displayResults } from "./displayResults.js";
import { displayMessage } from "./displayMessage.js";

export function searchPrice(allProducts) {
    const inputPrice = document.querySelector(".form-control");
    inputPrice.onkeyup = function (event) {
        const searchingPrice = parseFloat(event.target.value);
        const filteredProducts = allProducts.filter(function (products) {
            if (parseFloat(products.price) <= searchingPrice) {
                return true;
            }
        });
        displayResults(filteredProducts);
        if (filteredProducts.length === 0) {
            displayMessage("noResults", "There is nothing below this price.", ".messages__place");
        } else {
            displayMessage("results", `We found ${filteredProducts.length} results`, ".messages__place");
        }
    };
}