import promosSlider from "./assets/scripts/promotionalSlider.js"
import productsSlider from "./assets/scripts/productsSlider.js"
import productSlides from "./assets/scripts/productSlideGenerator.js"
import sendData from "./assets/scripts/newsLetter.js";

const d = document,
newsletterForm = d.getElementById("newsletter-form"); 

d.addEventListener("DOMContentLoaded", async ()=>{
    await productSlides()
    promosSlider();
    productsSlider();
});

newsletterForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const data = {
        name : e.target.name.value,
        email: e.target.email.value,
    }

    await sendData(data);
});