
function OpenWindow(number) {
	const popup_number = 'popup' + number
	document.getElementById(popup_number).classList.add("open");
}

const popups = document.querySelectorAll('.pop_up');
for (let i = 0; i < popups.length; i++) {
	let k=i+1;
    var popup_number = 'popup' + k;
	var close_window = '#'+ popup_number + ' .pop_up_window';
	document.querySelector(close_window).addEventListener('click', event => {
		event._isClickWithInModal = true;
	});
	document.getElementById(popup_number).addEventListener('click', event => {
		if (event._isClickWithInModal) return;
		event.currentTarget.classList.remove('open');
	});
}
