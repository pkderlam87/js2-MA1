export function getExistingWish() {
    const wish = localStorage.getItem("wishes");

    if (wish === null) {
        return [];
    } else {
        return JSON.parse(wish);
    }
}