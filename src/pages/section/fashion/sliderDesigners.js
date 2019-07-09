import $ from 'jquery';
import slick from 'slick-carousel';

const sliderDesigners = () => {

	$(".j-slider-designers").slick({
		speed: 500,
		prevArrow: $(".j-designers-prev"),
		nextArrow: $(".j-designers-next"),
		// autoplay: true,
		// autoplaySpeed: 2000,
	});

};

export default sliderDesigners;