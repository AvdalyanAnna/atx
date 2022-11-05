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
  $('.table-head__mobile .table-head').on('click',function (){
    const $this = $(this),
        element = $this.data('element')
    $this.parent().children().removeClass('active')
    $this.addClass('active')
    $('.section-option__table').find('td').hide()
    $('.section-option__table').find(element).show()
  })
  $(".modal .modal__container").on("click", function (e) {
    e.stopPropagation();
  });

  $(".open__modal").on("click", function (e) {
    e.preventDefault();
    const open = $(this).data('open');
    $(open).fadeIn();
  });

  $(".modal .close, .modal, .modal-close ").on("click", function (e) {
    e.preventDefault();
    $(".modal").fadeOut(function () {
      $("body").css("overflow", "auto");
    });
  });
})