import objectFitImages from 'object-fit-images'; // => Полифил для картинок с object-fit 
import Preloader from '../components/preloader/preloader.js';


/* Подключаем прелоадер */
const preloaderItem = document.querySelector('.j-preloader');
if(preloaderItem) {
	Preloader();
}
