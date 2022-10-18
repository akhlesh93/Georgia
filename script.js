const hamburger = document.getElementById('hamburger');

const toggleNav = (event) => {
	document.body.classList.toggle('nav-open');
	event.target.classList.toggle('open');
};

hamburger.addEventListener('click', toggleNav);
