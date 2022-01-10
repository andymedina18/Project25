
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var world;
var papel;
var fondo;

function preload() {
	fondo = loadImage("fondo calle.jpg");
}

function setup() {
	createCanvas(1600, 700);

	keyPressed();

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	papel = new Paper(300, 300);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(fondo);
 

  groundObject.display();
  dustbinObj.display();
  papel.display();
}

function keyPressed() {

	if (keyCode === 32) {
		Matter.Body.applyForce(papel.body, papel.body.position, {x: 130, y: -120});
	}

}