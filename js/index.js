const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 3000,
  reset: true,
});

sr.reveal(
  " .hero ,.image-overlay  ,.team,.swiper__cotainer,.work,.form1 ,.footer__section ,.header__class ,.p__link ,.Icon__social",
  {
    interval: 10,
  }
);

/******** Swiper View ********/
function myFunction(x) {
  if (x.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

var x = window.matchMedia("(max-width: 720px)");
myFunction(x);
x.addListener(myFunction);
$(".buy").click(function () {
  $(".bottom").addClass("clicked");
});

$(".navbar-nav .nav-link").on("click", function () {
  var toggle = $(".navbar-toggler").is(":visible");
  if (toggle) {
    $(".navbar-collapse").collapse("hide");
  }
});
