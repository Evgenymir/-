import $ from 'jquery';

const tabs = () => {

	$('.j-tab-link').on('click', function(e) {
		e.preventDefault();

		const $this = $(this);
		const item = $this.closest('.b-tabs__item');
		const container = $this.closest('.b-tabs-wrapper');
		const content = container.find('.b-tabs__content-item');
		const ndx = item.index();
		const currentContent = content.eq(ndx);

		item.addClass('active')
			.siblings()
			.removeClass('active');

		currentContent.addClass('active')
					  .siblings()
					  .removeClass('active');

	});

};

export default tabs;