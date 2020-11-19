let switches = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let tempValue = 0;
let tempBin = "";
let test = Array.prototype.slice.call(document.getElementsByClassName("thumb"));
const decValue = document.getElementById("decValue");
const binString = document.getElementById("bin");

function toglle(btn) {
  let index = test.indexOf(btn);
  //array togle
  if (switches[index] === 0) {
    switches[index] = 1;
    tempValue += parseInt(btn.innerText);
    btn.parentElement.classList.replace("switch", "on");
  } else {
    switches[index] = 0;
    tempValue -= parseInt(btn.innerText);
    btn.parentElement.classList.replace("on", "switch");
  }
  decValue.value = tempValue;

  tempBin = "";
  for (let i = 0; i < switches.length; i++) {
    tempBin += "" + switches[i];
  }
  binString.innerText = tempBin;
}
const switcheBtn = document.getElementsByClassName("switches");

function convertToBinary(btn) {
  let x = btn.previousElementSibling.value;
  tempValue = parseInt(x);
  switches = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let y = 15;
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (x != 0) {
    rem = x % 2;
    x = parseInt(x / 2);
    switches[y] = rem;
    y--;
    bin = bin + rem * i;
    i = i * 10;
  }
  tempBin = "";
  for (let i = 0; i < switches.length; i++) {
    if (switches[i] === 0) {
      switcheBtn[0].children[i].classList.replace("on", "switch");
    } else {
      switcheBtn[0].children[i].classList.replace("switch", "on");
    }
    tempBin += switches[i];
  }
  binString.innerText = tempBin;
}

//add the option to use the enter key instead of button
decValue.addEventListener("keyup", function(event) {
  console.log(event);
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
});
