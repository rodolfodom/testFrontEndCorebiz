const d = document;

export default function addItem() {
    d.addEventListener("click", async (e) =>{
        if(e.target.matches(".buyButton")) {

            if(localStorage.itemsAdded){
                const items = localStorage.getItem("itemsAdded"),
                itemsArray = await JSON.parse(items),
                updatedArray = [...itemsArray, e.target.dataset.productId],
                itemsString = JSON.stringify(updatedArray);
                localStorage.setItem("itemsAdded", itemsString);
            }else{
                const array = [];
                array.push(e.target.dataset.productId);
                localStorage.setItem("itemsAdded", JSON.stringify(array));
            }

            const counter = d.querySelector(".cuantity-items p"),
            items = localStorage.getItem("itemsAdded"),
            itemsQuantity = JSON.parse(items).length;
            
            counter.textContent = itemsQuantity;
        } 
    });
}