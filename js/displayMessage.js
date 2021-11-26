export function displayMessage(messageType, message, target) {
    const element = document.querySelector(target);
    const loader = document.querySelector(".loader");
    element.style.display = "block";
    element.innerHTML = `<div class="message ${messageType}"><h4>${message}</h4></div>`;
    loader.style.display = "none";
}