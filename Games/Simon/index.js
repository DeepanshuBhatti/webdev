const buttons = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];
let level = 1;
let started = false;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    game();
    started = true;
  }
});

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer();
});

function checkAnswer() {
  if (userClickedPattern.length == gamePattern.length) {
    if (isPatternMatch(userClickedPattern, gamePattern)) {
      level++;

      setTimeout(function () {
        game();
      }, 1000);
    } else {
      setTimeout(function () {
        gameOver();
      }, 1000);
    }
  }
}

function gameOver() {
  $("#level-title").text("Game Over");
  playSound("wrong");
  started = false;
  level = 1;
}

function isPatternMatch(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

function animatePress(name) {
  $("#" + name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  let audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function nextSequence() {
  let x = Math.floor(Math.random() * 4);
  let randomColor = buttons[x];
  gamePattern.push(randomColor);

  playSound(randomColor);
  $("#" + randomColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function game() {
  $("#level-title").text("Level " + level);

  gamePattern = [];
  userClickedPattern = [];

  for (let i = 0; i < level; i++) {
    setTimeout(function () {
      nextSequence();
    }, i * 500);
  }
  userClickedPattern = [];
  console.log(gamePattern);
}
