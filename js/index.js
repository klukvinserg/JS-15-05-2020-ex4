let tempRed = true;
let tempYellow = false;
let tempGreen = false;

function getColor() {
  if (tempRed === true) {
    lightRed.style.backgroundColor = "grey";
    lightYellow.style.backgroundColor = "yellow";
    lightGreen.style.backgroundColor = "grey";
    tempRed = false;
    tempYellow = true;
    tempGreen = false;
  } else if (tempYellow === true) {
    lightRed.style.backgroundColor = "grey";
    lightYellow.style.backgroundColor = "grey";
    lightGreen.style.backgroundColor = "green";
    tempRed = false;
    tempYellow = false;
    tempGreen = true;
  } else if (tempGreen === true) {
    lightRed.style.backgroundColor = "red";
    lightYellow.style.backgroundColor = "grey";
    lightGreen.style.backgroundColor = "grey";
    tempRed = true;
    tempYellow = false;
    tempGreen = false;
  }
}
