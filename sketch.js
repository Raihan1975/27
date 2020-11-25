
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball1,ball2,ball3,ball4,ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
    ball1 = new cradles (500,500,50,50);
	ball2 = new cradles (475,500,50,50);
	ball3 = new cradles (525,500,50,50);
	ball4 = new cradles (430,500,50,50);
	ball5 = new cradles (550,500,50,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



