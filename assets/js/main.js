$(document).ready(function () {
  $(".accordion-toggle").on('click', function () {
    const $this = $(this),
        parent = $this.data('parent'),
        show = $this.data('show')
    $this.parent(parent).toggleClass('active')
    $this.parent(parent).children(show).slideToggle(300)
  })
})