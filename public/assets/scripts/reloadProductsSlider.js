import productsSliderDesktop from "./productSaliderDesktop.js";
import productsSlider from "./productsSlider.js";

export default function reloadSlider () {

    window.addEventListener("resize", ()=>{
        (innerWidth < 1050) ? productsSlider() : productsSliderDesktop();
    });

}