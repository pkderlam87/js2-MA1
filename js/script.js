const baseUrl = "https://fakestoreapi.com/";
const resultsContainer = document.querySelector(".card__group");

async function products() {
    try {
        const response = await fetch(baseUrl + `products`);
        const allProducts = await response.json();
        console.log(allProducts);
        resultsContainer.innerHTML = "";
        for (let i = 0; i < allProducts.length; i++) {
            resultsContainer.innerHTML += `<div class="squad rounded-lg">
            <h5>Product: ${allProducts[i].title}</h5>
            <h6>Price: £ ${allProducts[i].price}</h6>
            </div>`
        }
    } catch (error) {
        console.log(error);
    }
}
products();