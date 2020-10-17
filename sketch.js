const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1, box2, ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,300,50,50)
  box2 = new Box(230,100,50,100)
  ground = new Ground(200,400,400,50)
  console.log(box1)
  }

function draw() {
  background("black"); 
  Engine.update(engine);
  box1.display()
  box2.display()
  ground.display()
  }