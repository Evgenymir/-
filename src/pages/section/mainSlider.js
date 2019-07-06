import $ from 'jquery';
import slick from 'slick-carousel';

const mainSlider = () => {

	const slider = $('.j-mainSlider');
	slider.slick({
		speed: 1000,
		prevArrow: $('.b-mainSlider__prev'),
		nextArrow: $('.b-mainSlider__next')
	});

};

export default mainSlider;