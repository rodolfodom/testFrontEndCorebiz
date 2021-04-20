export default function promosSlider() {
  const d = document,
  conatiner = d.getElementById("promos-container"),
  pagination = d.getElementById("promos-pagination");
  
  const swiper = new Swiper(conatiner, {
        pagination: {
          el: pagination,
          type: 'bullets',
        },
      });
}



