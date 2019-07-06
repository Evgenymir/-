//import objectFitImages from 'object-fit-images'; // => Полифил для картинок с object-fit 
import MainSlider from '../pages/section/mainSlider.js';


/* Подключаем главный слайдер */
const mainSliderItem = document.querySelector('.j-mainSlider');
if(mainSliderItem) {
	MainSlider();
}
