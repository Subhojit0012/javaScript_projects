document.addEventListener("DOMContentLoaded", () => {
  // card option
  const cardsArray = [
    { name: "fries", img: "fries.jpeg" },
    { name: "burger", img: "cheeseBurger.png" },
    { name: "milkshake", img: "milkshake.png" },
    { name: "icecreame", img: "newIcecreame.png" },
    { name: "pizza", img: "pizza.png" },
    { name: "hotdog", img: "hotDog.png" },
    { name: "fries", img: "fries.jpeg" },
    { name: "burger", img: "cheeseBurger.png" },
    { name: "milkshake", img: "milkshake.png" },
    { name: "icecreame", img: "newIcecreame.png" },
    { name: "pizza", img: "pizza.png" },
    { name: "hotdog", img: "hotDog.png" },
  ];

  cardsArray.sort(() => 0.5 - Math.random());

  const gridDisplay = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cradsChosenId = [];
  let cardsWon = [];
  // create your board
  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "game.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      gridDisplay.appendChild(card);
    }
  }

  // check for match
  function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cradsChosenId[0];
    const optionTwoId = cradsChosenId[1];

    console.log("check for match!");
    console.log(cards);

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "blank.png");
      cards[optionTwoId].setAttribute("src", "blank.png");
      alert("you have clicked the same image!");
    }

    if (cardsChosen[0] === cardsChosen[1]) {
      alert("you found a match!");
      cards[optionOneId].setAttribute("src", "game.jpg");
      cards[optionTwoId].setAttribute("src", "game.jpg");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "blank.png");
      cards[optionTwoId].setAttribute("src", "blank.png");
      alert("sorry try again !!");
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cradsChosenId = [];

    if (cardsWon.length === cardsArray.length / 2) {
      resultDisplay.innerHTML = "congratulation you found them all";
    }
  }
  // flip your card
  function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardsArray[cardId].name);
    cradsChosenId.push(cardId);
    this.setAttribute("src", cardsArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  createBoard();
});
