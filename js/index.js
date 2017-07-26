$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true,
    onTransitionStart: function(swiper){
      console.log('.page'+ (+swiper.activeIndex +1));
      $('.warp').hide();
      $('.page'+ (+swiper.activeIndex +1)).find('.warp').show();
    }
  });
})
