const d = document;
export default function initCounter() {
    const counter = d.querySelector(".cuantity-items p");
    if(localStorage.itemsAdded) {
        const itemsArray = JSON.parse(localStorage.itemsAdded),
        itemsQuantity = itemsArray.length;
        counter.textContent = itemsQuantity;
    }else{
        counter.textContent = 0;
    }
}

