var canvas;
var backgroundImage, tiger_img, monkey_img, horse_img, lion_img;
var powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, tiger, lion,monkey,horse, fuels, powerCoins, obstacles;
var players = [];

function preload() {
  backgroundImage = loadImage("./assets/background.jpg");
  lion_img = loadAnimation("./assets/lion1.png");
  horse_img = loadAnimation("./assets/horse1.png");
  monkey_img = loadAnimation("./assets/monkey1.png");
  tiger_img = loadAnimation("./assets/tiger1.png");
  powerCoinImage = loadImage("./assets/coin.png");
  obstacle1Image=loadImage("./assets/treelog.png");
  obstacle2Image=loadImage("./assets/stone.png");
  
 }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
