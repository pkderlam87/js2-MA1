import { displayResults } from "./displayResults.js";

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
    };
}