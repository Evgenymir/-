import $ from 'jquery';

const sliderActivity = () => {

	$(".j-slider-activity").slick({
		speed: 1000,
		prevArrow: $(".b-activity__slider-control-prev"),
		nextArrow: $(".b-activity__slider-control-next")
	});

};

export default sliderActivity;