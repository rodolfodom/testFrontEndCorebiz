import promosSlider from "./assets/scripts/promotionalSlider.js"
import productsSlider from "./assets/scripts/productsSlider.js"
import productSlides from "./assets/scripts/productSlideGenerator.js"
import sendData from "./assets/scripts/newsLetter.js";
import addItem from "./assets/scripts/addItem.js";
import initCounter from "./assets/scripts/initCounter.js";
import productsSliderDesktop from "./assets/scripts/productSaliderDesktop.js";
import reloadSlider from "./assets/scripts/reloadProductsSlider.js";

const d = document,
newsletterForm = d.getElementById("newsletter-form"); 

d.addEventListener("DOMContentLoaded", async ()=>{
    promosSlider();
    addItem();
    initCounter();
    (innerWidth < 1050) ? productsSlider() : productsSliderDesktop();
    reloadSlider();
    await productSlides()
});

newsletterForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const data = {
        name : e.target.name.value,
        email: e.target.email.value,
    }

    await sendData(data);
});