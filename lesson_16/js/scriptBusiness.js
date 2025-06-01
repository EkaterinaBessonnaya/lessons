document.addEventListener('click', openBurger);

function openBurger(e) {
	const targetEl = e.target;

	if(targetEl.closest('.header__burger')) {
		document.body.classList.toggle('burger-open');
	}
}