import $ from 'jquery';
import slick from 'slick-carousel';

const sliderGosSites = () => {

	$('.j-slider-gosSites').slick({
		speed: 500,
		prevArrow: $(".j-gosSites-prev"),
		nextArrow: $(".j-gosSites-next"),
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

export default sliderGosSites;