
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(100,50,50,10);


	Engine.run(engine);
  
}


function draw() {
  background(0);
 paper1.display();



 
}
