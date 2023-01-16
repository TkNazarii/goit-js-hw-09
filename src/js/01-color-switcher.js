// обєкт ссилок
const refs = {
	bodyColor: document.querySelector("body"),
	buttonStart: document.querySelector("button[data-start]"),
	buttonStop: document.querySelector("button[data-stop]"),
};

// слухачі події
refs.buttonStart.addEventListener("click", onChangeColor);
refs.buttonStop.addEventListener("click", offChangeColor);

// дія при кліку старт
function onChangeColor() {
	refs.buttonStart.setAttribute("disabled", "disabled");
	timerID = setInterval(randomColor, 1000);
	console.log("старт");
};

// дія при кліку стоп
function offChangeColor() {
	
	if (refs.buttonStart.hasAttribute("disabled")) {
		refs.buttonStart.removeAttribute("disabled")
	}

	clearInterval(timerID);
	console.log("стоп");
	};

	
// рандомні кольори
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	}

// перезаписує колір
function randomColor() {
	refs.bodyColor.style.backgroundColor = getRandomHexColor();
};
