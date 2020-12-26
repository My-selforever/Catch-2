
var database;
var gameState = 0;
var playerCount = 0;
var allPlayers
var good,bad;
var g = createGroup();
var b = createGroup();
var a =  createGroup();
var player,form,game;
var player1,player2;
var players;
var basket;
var edges;
function setup() {
  createCanvas(1000,600);
  basket = createSprite(World.mouseX,380,100,50);
}

function draw() {
  background("lightBlue");
 edges= createEdgeSprites()
  basket.x = World.mouseX;  
  drawSprites();
}