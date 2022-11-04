$(document).ready(function () {
  $(".accordion-toggle").on('click', function () {
    const $this = $(this),
        parent = $this.data('parent'),
        show = $this.data('show')
    $this.parent(parent).toggleClass('active')
    $this.parent(parent).children(show).slideToggle(300)
  })
  var swiper = new Swiper(".mySwiper", {});

  $(".swiper-button-next").on("click", () => swiper.slideNext());

  $(".swiper-button-prev").on("click", () => swiper.slidePrev());
})