const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var support1;
var sphere1, sphere2, sphere3, sphere4, sphere5;
var rope1, rope2, rope3, rope4, rope5;
var ballDiameter= 30;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	support1= new support(400);

	sphere1= new balls(400);
	sphere2= new balls(430);
	sphere3= new balls(460);
	sphere4= new balls(370);
	sphere5= new balls(340);

	rope1= new rope(sphere1.body, support1.body, 0);
	rope2= new rope(sphere2.body, support1.body, 30);
	rope3= new rope(sphere3.body, support1.body, 60);
	rope4= new rope(sphere4.body, support1.body, -30);
	rope5= new rope(sphere5.body, support1.body, -60);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 0, 0);
  
  Engine.update(engine);

  //sphere5.body.position.y= mouseY

  support1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  sphere1.display();
  sphere2.display();
  sphere3.display();
  sphere4.display();
  sphere5.display();

   
  
  if(keyWentDown("UP_ARROW")) {

    Matter.Body.applyForce(sphere5.body, sphere5.body.position, {x:-100, y:-100})
  
    }

  
  drawSprites();

  
 
}





