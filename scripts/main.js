;
(function ($) {
	'use strict';

	$(function () {
		$('.ba-slider').slick({
			slide: "div",
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			arrows: false,
			cssEase: 'linear',
			dotsClass: "my-dots",
			customPaging: function (slider, i) {
				var title = $(slider.$slides[i]).data('title');
				return '<a class="my-dots__title"> ' + title + ' </a>';
			}
		});
	})

})(jQuery);

;
(function ($) {
'use strict';

$(function () {
	$('.parallax-window').parallax({
		imageSrc: '../images/main.jpg'
	});
});


})(jQuery);

;
(function ($) {
'use strict';

$(document).ready(function() {
    $('.features').click(function(){
        $(this).addClass('active');
       $('html, body').animate({scrollTop:$('#features').position().top - 60}, 2000);
    });
});



})(jQuery);


