let cardNum = document.querySelector("#number");

const numGenerator = () => {
  cardNum.innerHTML = Math.floor(Math.random() * 13) + 1;
  let figures = ["As", "J", "Q", "K"];
  if (cardNum.innerHTML == 1) {
    cardNum.innerHTML = figures[0];
  } else if (cardNum.innerHTML >= 11) {
    cardNum.innerHTML = figures[cardNum.innerHTML - 10];
  }
};

let suits = ["♦", "♥", "♠", "♣"];
let cardTopSuit = document.querySelector("#top");
let cardBotSuit = document.querySelector("#bot");

const suitGenerator = () => {
  cardBotSuit.innerHTML = suits[Math.floor(Math.random() * 4)];
  cardTopSuit.innerHTML = cardBotSuit.innerHTML;
  colorSelector();
};

const colorSelector = () => {
  cardBotSuit.innerHTML == "♦" || cardBotSuit.innerHTML == "♥"
    ? (cardBotSuit.classList.add("red"),
      cardTopSuit.classList.add("red"),
      cardNum.classList.add("red"))
    : (cardBotSuit.classList.remove("red"),
      cardTopSuit.classList.remove("red"),
      cardNum.classList.remove("red"));
};

let aux = 10;
let contador = document.querySelector("#timer");
const temporizador = () => {
  if (aux-- == 1) {
    init();
    aux = 10;
  }
  contador.innerHTML = aux;
};
setInterval(temporizador, 1000);

const init = () => {
  suitGenerator();
  numGenerator();
};
