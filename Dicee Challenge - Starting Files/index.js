// Player One
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var sourceImage1 = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", sourceImage1);

// Player Two
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var sourceImage2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , sourceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Win";
}
else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Win";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}

//  .innerHTML -- used for change or set value like heading, paragraph, and all HTML tags.

// setAttribute -- used for change or set value like anchor tag, images, buttons, input..
