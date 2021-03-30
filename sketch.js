
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

	dustbin1 = new Dustbin(713,565,25,200);
	dustbin2 = new Dustbin(600,660,200,25);
	dustbin3 = new Dustbin(505,565,25,200);
	ground = new Ground(400,670,800,10);
	paper1= new Paper(50,660);

  // paper1.debug=false;
  // paper1.setCollider("circle",0,0,55);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50})
    }
}

