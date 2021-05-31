for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", onClick);
}

document.addEventListener("keypress", onKeyPress);

function makeSound(data) {
  let soundLoc = "";
  switch (data) {
    case "w":
      soundLoc = "./sounds/tom-1.mp3";
      break;
    case "a":
      soundLoc = "./sounds/tom-2.mp3";
      break;
    case "s":
      soundLoc = "./sounds/tom-3.mp3";
      break;
    case "d":
      soundLoc = "./sounds/tom-4.mp3";
      break;
    case "j":
      soundLoc = "./sounds/crash.mp3";
      break;
    case "k":
      soundLoc = "./sounds/kick-bass.mp3";
      break;
    case "l":
      soundLoc = "./sounds/snare.mp3";
      break;
    default:
      break;
  }

  let sound = new Audio(soundLoc);
  sound.play();
}

function buttonAnimation(data) {
  let active = document.querySelector("." + data);
  active.classList.add("pressed");

  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
}

function onClick() {
  let buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

function onKeyPress(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}
