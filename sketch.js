const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// var Engine = Matter.Engine,
//   World = Matter.World,
//   Events = Matter.Events,
//   Bodies = Matter.Bodies;

var engine, world, events, bodies;
var bg_img, girlImg, girl;
var snowflakes = [];

function preload(){
  bg_Img = loadImage("snowy.jpg");
  girlImg = loadImage("girl.png");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1400,800);

  girl = createSprite(700, 500, 50, 100);
  girl.addImage(girlImg);
  girl.scale = 0.7;

}

function draw() {
  background(bg_Img);
  
  Engine.update(engine);

  if(frameCount%30 === 0){
    snowflakes.push(new Snowflake(random(100, 1300), 60, 60));
  }
  for (var l = 0; l < snowflakes.length; l++) {
    snowflakes[l].display();
  }
 
if (keyDown("left")){
  girl.x = girl.x-10;
  
}
if (keyDown("right")){
  girl.x = girl.x+10;
  
}
  drawSprites();
}