const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin, ground, paper;

function setup() {
  createCanvas(windowWidth, 400);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  
  paper = new Paper(50, 200, 20);
  bin = new Bin(1100, 350, 170, 200);
 
  ground = new Ground(700, 370, 1400, 20);
 
}

function draw() {
 
  background(255);
  Engine.update(engine);
 
  paper.display();
   bin.display();
  ground.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === 32) {
    Body.applyForce(paper.body, {x:paper.body.position.x, y: paper.body.position.y}, { x: 105, y: -85 });
  }
}
