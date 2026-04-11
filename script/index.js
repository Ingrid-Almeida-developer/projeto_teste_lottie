const animaBut = lottie.loadAnimation({
	container: document.getElementById("botao"),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://assets9.lottiefiles.com/packages/lf20_touohxv0.json'
});

let aberto = false;

document.getElementById("botao").addEventListener('click', () => {
	if(!aberto) {
		animaBut.setDirection(1);
	} else {
		animaBut.setDirection(-1);
	}
	animaBut.play();
	aberto = !aberto;
});
