let tempRed = true;
let tempYellow = false;
let tempGreen = false;

function getColor() {
  if (tempRed === true) {
    lightRed.style.backgroundColor = "grey";
    lightYellow.style.backgroundColor = "yellow";
    tempRed = false;
    tempYellow = true;
  } else if (tempYellow === true) {
    lightYellow.style.backgroundColor = "grey";
    lightGreen.style.backgroundColor = "green";
    tempYellow = false;
    tempGreen = true;
  } else if (tempGreen === true) {
    lightRed.style.backgroundColor = "red";
    lightGreen.style.backgroundColor = "grey";
    tempRed = true;
    tempGreen = false;
  }
}
