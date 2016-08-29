$(document).ready(function() {
  $('#slickcontent').slick({
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      speed: 1000,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      lazyLoad: 'ondemand',
      pauseOnHover: false,
      pauseOnFocue: false
  });
  $('#slickcontent').on('afterChange', function(event, slick, currentSlide){
    var currentSlideType = $(slick.$slides.get(currentSlide)).data('type');
    var nextSlideType = $(slick.$slides.get(currentSlide)).data('type');
    if (currentSlideType === 'video') {
      $('#slickcontent').slick('slickPause');
      var video = $('.slick-current').find('video');
      video.bind('ended', function(){
        $('#slickcontent').slick('slickNext');
      });
      video.get(0).play();
    }


  });

  $('#slickcontent').on('beforeChange', function(event, slick, currentSlide){
    var currentSlideType = $(slick.$slides.get(currentSlide)).data('type');
    if (currentSlideType === 'video') {
      $('#slickcontent').slick('slickPause');
      var video = $('.slick-current').find('video');
      video.get(0).pause();
    }


  });

});
