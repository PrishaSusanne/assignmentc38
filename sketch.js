var canvas, backgroundImage;

var gameState = 0;
var runnerCount;
var allPlayers;
var distance = 0;
var database;

var form,runner, game;

var runner,runner2,runner3,runner4;
var track,runner,car2_img,car3_img,car4_img;

function preload(){
  track = loadImage("./images/track.jpg");
  runner = loadImage("./images/runner.png");
  runner2 = loadImage("./images/runner2.gif");
  runner3 = loadImage("./images/runner3.png");
  runner4 = loadImage("./images/runner4.png");
  ground = loadImage("./images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
