"use strict";

const hexArrayGenerator = () => {
  const hexCode = [];

  for (let i = 48; i <= 57; i++) {
    hexCode.push(String.fromCharCode(i));
  }
  for (let i = 65; i <= 70; i++) {
    hexCode.push(String.fromCharCode(i));
  }

  return hexCode;
};

const numbers = hexArrayGenerator();
console.log(numbers);

const hexColorGenerator = () => {
  let color = "#";
  for (let index = 0; index < 6; index++) {
    let randomValue = Math.floor(Math.random() * (numbers.length - 1 + 1) + 0);

    console.log(randomValue);
    color += numbers[randomValue];
  }

  document.body.style.backgroundColor = color;
  // console.log(color);
  document.querySelector("#hex").innerHTML = color;
  document.querySelector("#hex").style.color = color;
};

hexColorGenerator();

const colorButton = document
  .querySelector(".button")
  .addEventListener("click", hexColorGenerator);
