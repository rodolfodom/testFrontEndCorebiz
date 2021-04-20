const productsSlider = new Swiper(".slider-products-container", {
    spaceBetween: 48,
    slidesPerView: 2,
    pagination: {
        el: '.slider-products-container .swiper-pagination',
        type: 'bullets'
    }
})