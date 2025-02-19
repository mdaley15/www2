jQuery(document).ready(function($) {
	//create the slider
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
    animation: "slide",
    easing: "easeInOutQuad",
    directionNav: true,
    prevText: "",
    nextText: "",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a"),
		slideshow: false,
		smoothHeight: true,
		start: function() {
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative' 
			});
		}
    });
    /*$('.flex-nav-prev').html('<i class="fas fa-angle-double-left"></i>');
    $('.flex-nav-next').html('<i class="fas fa-angle-double-right"></i>');*/



    /* Remove all padding and margins from testimonials section
    $('.cd-testimonials-wrapper').parent().addClass('looseSP-margins');
    $('.cd-testimonials-wrapper').parent().addClass('looseSP-padding');
    $('.cd-testimonials-wrapper').parent().parent().addClass('looseSP-margins');
    $('.cd-testimonials-wrapper').parent().parent().addClass('looseSP-padding');
    $('.cd-testimonials-wrapper').parent().parent().parent().addClass('looseSP-margins');
    $('.cd-testimonials-wrapper').parent().parent().parent().addClass('looseSP-padding');
    $('.cd-testimonials-wrapper').parent().parent().parent().parent().addClass('looseSP-margins');
    $('.cd-testimonials-wrapper').parent().parent().parent().parent().addClass('looseSP-padding');
    $('.cd-testimonials-wrapper').parent().parent().parent().parent().parent().addClass('looseSP-margins');
    $('.cd-testimonials-wrapper').parent().parent().parent().parent().parent().addClass('looseSP-padding');
    $('.cd-testimonials-wrapper').parent().parent().parent().parent().parent().parent().addClass('looseSP-margins');
    $('.cd-testimonials-wrapper').parent().parent().parent().parent().parent().parent().addClass('looseSP-padding');
    $('.cd-testimonials-wrapper').parent().parent().parent().parent().parent().parent().parent().addClass('looseSP-margins');
    $('.cd-testimonials-wrapper').parent().parent().parent().parent().parent().parent().parent().addClass('looseSP-padding');
    $('.cd-testimonials-wrapper').parent().parent().parent().parent().parent().parent().parent().parent().addClass('looseSP-margins');
    $('.cd-testimonials-wrapper').parent().parent().parent().parent().parent().parent().parent().parent().addClass('looseSP-padding');*/
});