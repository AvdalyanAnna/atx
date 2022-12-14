$(document).ready(function () {
  $(".accordion-toggle").on('click', function () {
    const $this = $(this),
        parent = $this.data('parent'),
        show = $this.data('show')
    $this.parent(parent).toggleClass('active')
    $this.parent(parent).children(show).slideToggle(300)
  })

  $('.table-head__mobile .table-head').on('click', function () {
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


  var swiper = new Swiper(".mySwiper", {}),
      swiper1 = new Swiper(".postSlider-1", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints:{
          601: {
            spaceBetween: 30,
          },
          1024: {
            spaceBetween: 24,
          }
        }
      }),
      swiper2 = new Swiper(".postSlider-2", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints:{
          601: {
              spaceBetween: 30,
          },
          1024: {
              spaceBetween: 24,
          }
        }
      });
  $(".swiper-button-next-3").on("click", () => swiper.slideNext());
  $(".swiper-button-prev-3").on("click", () => swiper.slidePrev());
  $(".swiper-button-next-postSlider-1").on("click", () => swiper1.slideNext());
  $(".swiper-button-prev-postSlider-1").on("click", () => swiper1.slidePrev());
  $(".swiper-button-next-postSlider-2").on("click", () => swiper2.slideNext());
  $(".swiper-button-prev-postSlider-2").on("click", () => swiper2.slidePrev());

  $('.btn-menu').on('click', () =>{
    $('.btn-menu').toggleClass('active')
    $('.menu-list').toggle(300)
  })

  //smoothscroll
  $('.menu-list a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $("html, body")
        .stop()
        .animate(
            {
              scrollTop: $target.offset().top + 2,
            },
            500,
            "swing",
            function () {
              window.location.hash = target;
            }
        );
    $('.btn-menu').toggleClass('active')
    $('.menu-list').toggle(300)

  });
  $('.section-option_show').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = 'section-option',
        menu = target;
    $target = $('#section-option');
    $("html, body")
        .stop()
        .animate(
            {
              scrollTop: $target.offset().top + 2,
            },
            500,
            "swing",
            function () {
              window.location.hash = target;
            }
        );
    $('.btn-menu').toggleClass('active')
    $('.menu-list').toggle(300)

  });

})