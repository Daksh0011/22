const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var opt
var myengine,myworld,ground,ball,ballOpt

function setup() {
  createCanvas(400,400);
  

  myengine = Engine.create();
  myworld = myengine.world
opt={
  isStatic: true
}

  ground = Bodies.rectangle(200,390,20,10,opt)
  World.add(myworld,ground)
  ballOpt={
    restitution : 1
  }
  ball = Bodies.circle(200,300,15,ballOpt)
  
  World.add(myworld,ball)
  console.log(ground)
}

function draw() {
  background(255,255,255);  
Engine.update(myengine)
rectMode(CENTER)

rect(ground.position.x,ground.position.y,400, 20)
ellipse(ball.position.x,ball.position.y,30,30)
  drawSprites();
}