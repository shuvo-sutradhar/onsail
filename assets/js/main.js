(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	//add is_active class in navigaiton 
		$('.nav.nav--primary ul li').click( function(){
		    if ( $(this).hasClass('is_active') ) {
		        $(this).removeClass('is_active');
		    } else {
		        $('.nav.nav--primary ul li').removeClass('is_active');
		        $(this).addClass('is_active');    
		    }
		});

		//jquery full height
		$('.full-height').fullHeight();

		// progress bar 
		$('.barra-nivel').each(function() {
          var valorLargura = $(this).data('nivel');
            $(this).animate({
                width: valorLargura
            });
        });



        // slick slider
         $('.ranking_slider').on('init', function(event, slick) {
          $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
          $('.current').text(slick.currentSlide + 1);
          $('.total').text(slick.slideCount);
        })
        .slick({
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
          arrows: true,
          nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.87 27.37" class="slick_arrow slick_next"><polyline class="cls-1" points="13.93 26.83 1.09 13.49 14.33 0.55"/></svg>',
          prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.87 27.37" class="slick_arrow slick_prev"><polyline class="cls-1" points="13.93 26.83 1.09 13.49 14.33 0.55"/></svg>',
        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          $('.current').text(nextSlide + 1);
        });
    });


    
    // jQuery(window).load(function(){
        
    // });
}(jQuery));	