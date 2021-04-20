
export default function productsSlider() {

    const d = document,
    container = d.getElementById("products-container"),
    pagination = d.getElementById("products-pagination");
    
    const swiper = new Swiper(container, {
        slidesPerView: 2,
        spaceBetween: 47,
        pagination: {
            el: pagination,
            type: 'bullets'
        }
    });
    
}









