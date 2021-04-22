export default function productsSliderDesktop() {

    const d = document,
    container = d.getElementById("products-container"),
    pagination = d.getElementById("products-pagination");
    
    const swiper = new Swiper(container, {
        slidesPerView: 4,
        spaceBetween: 40,
        observer: true, 
        observeParents: true,
        pagination: {
            el: pagination,
            type: 'bullets'
        }
    });
    
}