import $ from 'jquery';
import slick from 'slick-carousel';

const sliderPartners = () => {

	$('.j-slider-partners').slick({
		speed: 500,
		prevArrow: $(".j-partner-prev"),
		nextArrow: $(".j-partner-next"),
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

};

export default sliderPartners;