export default function productsSliderDesktop() {

    const d = document,
    container = d.getElementById("products-container"),
    nextBtn = d.getElementById("products-next-btn"),
    prevBtn = d.getElementById("products-prev-btn");
    
    const swiper = new Swiper(container, {
        slidesPerView: 4,
        spaceBetween: 30,
        observer: true, 
        observeParents: true,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        }
    });
    
}