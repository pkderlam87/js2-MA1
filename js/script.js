import { displayMessage } from "./displayMessage.js";
import { displayResults } from "./displayResults.js";
import { searchPrice } from "./searchPrice.js";

const baseUrl = "https://fakestoreapi.com/";

async function products() {
    try {
        const response = await fetch(baseUrl + `products`);
        const allProducts = await response.json();
        displayResults(allProducts);
        searchPrice(allProducts);
    } catch (error) {
        displayMessage("error", "Something went wrong with the API call.", ".messages__place");
    }
}
products();