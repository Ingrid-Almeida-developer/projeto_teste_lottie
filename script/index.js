const animaBut = lottie.loadAnimation({
	container: document.getElementById("botao"),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json'
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

document.getElementById("botao").addEventListener('click', () => {
	if (!aberto) {
		const menu = document.getElementById("menu");
		const itens = menu.querySelectorAll("a");
		let delay = 1;

		menu.style.display = "block";
		menu.classList.add("menu-animado");
		itens.forEach(a => {
			a.style.animation = `animaItemMenu 2s ease-in-out ${delay}s normal backwards`;
			delay++;
		});
	} else {
		const menu = document.getElementById("
menu");
		menu.style.display = "none";
	}
});
