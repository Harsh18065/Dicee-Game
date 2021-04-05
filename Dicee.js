var randomNumber1 = Math.floor((Math.random()*6))+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSrc = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSrc2  = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSrc2);

if(randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 WINS";
}
else if(randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 WINS🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
