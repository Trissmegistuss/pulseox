$(document).ready(function(){    //звертається до документи, а саме коли він готовий, тобто запуск в кінці//
    $('.carousel__inner').slick({
        speed: 1000,  
        autoplay: true,
        autoplaySpeed:3500,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false
            }
          }
        ]
      });
});