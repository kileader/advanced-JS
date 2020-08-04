const init = () => {
  let ratingButtons = document.querySelectorAll(".rating");
  for (let i = 0; i < ratingButtons.length; i++) {
    ratingButtons[i].onclick = dotNotation;
  }

  let heightButtons = document.querySelectorAll(".height");
  for (let i = 0; i < heightButtons.length; i++) {
    heightButtons[i].addEventListener("click", w3c);
  }
}

const inline = control => {
  console.log(control.value);
}

const dotNotation = event => {
  console.log(event.currentTarget.value);
}

const w3c = event => {
  console.log(event.currentTarget.value);
}
