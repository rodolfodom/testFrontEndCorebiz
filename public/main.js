import promosSlider from "./assets/scripts/promotionalSlider.js"
import productsSlider from "./assets/scripts/productsSlider.js"
import productSlides from "./assets/scripts/productSlideGenerator.js"


document.addEventListener("DOMContentLoaded", async ()=>{
    await productSlides()
    promosSlider();
    productsSlider();
})