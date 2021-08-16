$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  infinite: true,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

// Slider-nav of life in zippy
$('.slider-nav')
  .on('init', function (event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    focusOnSelect: false,
  });

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem =
    '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

// Google Map

function initMap() {
  // The location of odisha
  const odisha = { lat: 26.342775, lng: 82.7249585 };
  // The map, centered at bbsr
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: odisha,
  });

  // The marker, positioned at odisha
  const marker = new google.maps.Marker({
    position: bbsr,
    map: map,
  });
}