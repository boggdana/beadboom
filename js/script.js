$(document).ready(function(){
	$('.gallery__carousel').slick({

		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
    infinite: true, 

			responsive: [
    		{
      			breakpoint: 1024,
      			settings: {
        		slidesToShow: 1,
        		slidesToScroll: 1,
      			}
    		},
    		{
      			breakpoint: 720,
      			settings: {
        		slidesToShow: 1,
        		slidesToScroll: 1
      				}
    		}
  		]
});

	});


$('.mobile-menu').on('click', function (e) {
 e.preventDefault();
 $('.mobile-menu__menu-btn').toggleClass('active-menu');
 $('.menu').toggleClass('visible-menu');
});


$('.menu a').on('click', function (e) {
$('.mobile-menu__menu-btn').toggleClass('active-menu');
$('.menu').removeClass('visible-menu');

});