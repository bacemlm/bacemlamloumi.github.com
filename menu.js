/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};
	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 100);
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');