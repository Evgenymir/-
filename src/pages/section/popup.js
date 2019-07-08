const popup = () => {

	const openPopup = Array.from(document.querySelectorAll('.j-open-popup'));
	const closePopup = document.querySelector('.j-close-popup');
	const overlay = document.querySelector('.j-overlay');
	const modal = Array.from(document.querySelectorAll('.j-popup'));
	const mobileMenu = document.querySelector('.j-mobileMenu');
	const asideMenu = document.querySelector('.j-aside');

	const clickClosePopup = () => {
		overlay.classList.remove('active');
		modal.forEach((item) => {
			item.classList.remove('active');
		});
		window.onscroll = function() {};
	}; 

	openPopup.forEach(function(item) {
		item.addEventListener('click', function(e) {
			e.preventDefault();

			// Берем координаты страницы
			let x = window.scrollX;
			let y = window.scrollY;

			let href = this.getAttribute('href'),
				correntPopup = document.querySelector(href);

			if(asideMenu) {
				asideMenu.classList.remove('active');
			}
			mobileMenu.classList.remove('active');
			overlay.classList.add('active');
			correntPopup.classList.add('active');
			window.onscroll = function() {
				window.scrollTo(x, y);
			};

		});
	});

	closePopup.addEventListener('click', () => {
		clickClosePopup();
	});

	overlay.addEventListener('click', () => {
		clickClosePopup();
	});

};

export default popup;