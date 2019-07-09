import $ from 'jquery';
import slick from 'slick-carousel';

const sliderEvents = () => {

	$(".j-fashion-events__slider").slick({
		speed: 500,
		prevArrow: $(".j-fashion-events__prev"),
		nextArrow: $(".j-fashion-events__next"),
		// autoplay: true,
		// autoplaySpeed: 2000,
	});

};

export default sliderEvents;