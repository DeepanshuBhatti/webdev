function updateDiceStatus() {
  let img1 = document.querySelectorAll("img")[0];
  let img2 = document.querySelectorAll("img")[1];

  let randomNumber1 = getRandomNumber();
  let randomNumber2 = getRandomNumber();

  img1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  img2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

  let result = "Its a Draw";
  if (randomNumber1 > randomNumber2) {
    result = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    result = "Player 2 Wins";
  }
  document.querySelector("h1").innerHTML = result;
}

function getRandomNumber() {
  let x = Math.random() * 6;

  return Math.floor(x) + 1;
}

//updateDiceStatus();
