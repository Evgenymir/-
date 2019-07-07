import objectFitImages from 'object-fit-images'; // => Полифил для картинок с object-fit 
import Burger from '../components/burger/burger.js';
import Popup from '../pages/section/popup.js';
import MainSlider from '../pages/section/mainSlider.js';
import Tabs from '../pages/section/services.js';
import SliderActivity from '../pages/section/activity.js';
import SliderPartners from '../pages/section/partners.js';
import SliderGosSites from '../pages/section/gosSites.js';
import Map from '../components/map/map.js';

window.onload = () => {

	/* Подключаем полифил для свойства object-fill */
	let images = document.querySelectorAll('.j-image-polyfill');
	objectFitImages(images);

	/* Подключаем главный слайдер */
	const burgerItem = document.querySelector('.j-burger');
	if(burgerItem) {
		Burger();
	}

	/* Подключаем главный слайдер */
	const mainSliderItem = document.querySelector('.j-mainSlider');
	if(mainSliderItem) {
		MainSlider();
	}

	/* Подключение табов */
	const tabsItem = document.querySelector('.j-tabs');
	if(tabsItem) {
		Tabs();
	}

	/* Подключаем слайдер мероприятий */
	const sliderActivityItem = document.querySelector('.j-slider-activity');
	if(sliderActivityItem) {
		SliderActivity();
	}

	/* Подключаем слайдер партнеры */
	const sliderPartnersItem = document.querySelector('.j-slider-partners');
	if(sliderPartnersItem) {
		SliderPartners();
	}

	/* Подключаем слайдер гос сайты */
	const sliderGosSitesItem = document.querySelector('.j-slider-gosSites');
	if(sliderGosSitesItem) {
		SliderGosSites();
	}

	/* Подключаем попапы */
	const popupItem = document.querySelector('.j-popup');
	if(popupItem) {
		Popup();
	}

	/* Подключаем карту Яндекса */
	const mapItem = document.querySelector('.j-map');
	if(mapItem) {
		Map();
	}

};