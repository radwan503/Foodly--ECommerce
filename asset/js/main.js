(function ($) {
"use strict";  
    //counter js
     $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});    
    
     //carouserl slider brand
        $('.brand-active').owlCarousel({
    dots:true,
    loop:true,
            autoplay:true,
   autoplayHoverPause:true,
    margin:10,
    nav:false,       
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:7
        }
    }
});
    
   
})(jQuery);	