const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerAimage = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var options = {
    isStatic:true
  }

  //criar corpo da base do jogador
playerBase = Bodies.rectangle(50,325, 50,100,options);
World.add(world, playerBase);

  //criar corpo do jogador
player = Bodies.rectangle(100,225,50,100,options);
World.add(world, player);

playerArcher = Bodies.rectangle(125,220,50,100,options);
World.add(world, playerArcher);

}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  image(playerAimage,playerArcher.position.x, playerArcher.position.y, 100, 75);

  image(playerimage,player.position.x, player.position.y, 50, 125);

  //exibir a imagem da base do jogador usando a função image()
  image(baseimage,playerBase.position.x, playerBase.position.y, 150, 100);


  Engine.update(engine);

  // Title
  fill("grey");
  textAlign("center");
  textSize(40);
  text("DUMMY ÉPICO", width / 2, 100);
}
