$('#tes').owlCarousel({ 
	loop:true,
	margin:200,
	smartSpeed:1000, 
	autoplay:true, 
	autoplayTimeout:50000,
	responsive:{
        0:{
            items:1,
			dots:false,	nav:true, 
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
// JavaScript Document