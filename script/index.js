const animaBut = lottie.loadAnimation({
	container: document.getElementById("botao"),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://assets8.lottiefiles.com/packages/lf20_nzuitqg1.json'
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
