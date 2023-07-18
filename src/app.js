/* eslint-disable */

let getSuit = () => {
  let suits = ["♠", "♣", "♥", "♦"];
  let suitsIndex = Math.floor(Math.random() * suits.length);
  return suits[suitsIndex];
};

let getValue = () => {
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "J",
    "Q",
    "K",
    "A"
  ];
  let valuesIndex = Math.floor(Math.random() * values.length);
  return values[valuesIndex];
};

// console.log(getSuit);
// console.log(getValue);

window.onload = () => {
  document.querySelector(".card").classList.add(getSuit());
  document.querySelector(".card").classList.add(getValue());
};
console.log("what is happening?");
