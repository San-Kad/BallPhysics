
const Engine = Matter.Engine;//universe
const World = Matter.World;//planets
const Bodies = Matter.Bodies;//bodies
//const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;//creating the planet inside the universe
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,{isStatic:true});
  World.add(world,ground);

  ground2 = Bodies.rectangle(320,200,200,20,{isStatic:true});
  World.add(world,ground2);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(320,10,20,ball_options);
  World.add(world,ball2)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill ("blue")
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground2.position.x,ground2.position.y,200,20);
  ellipse(ball2.position.x,ball2.position.y,20);
}

