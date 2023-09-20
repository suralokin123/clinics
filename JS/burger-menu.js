const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.close-burger');
const mobileMenu = document.querySelector('.navigation-mobile');

burger.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden-btn');
	burger.classList.toggle('hidden-btn');
	burgerClose.classList.toggle('hidden-btn');
});

burgerClose.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden-btn');
	burger.classList.toggle('hidden-btn');
	burgerClose.classList.toggle('hidden-btn');
});
