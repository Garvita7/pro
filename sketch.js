
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,bottom1, bottom2, bottom3, middle1, middle2, up1, polygon, polygon_image, slingShot1, ground2;

function preload(){
	polygon_image = loadImage("polygon.png");	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(440,460,200,20);
	bottom1 = new Box(400,430,40,40);
	bottom2 = new Box(440,430,40,40);
	bottom3 = new Box(480,430,40,40);
	middle1 = new Box(420,390,40,40);
	middle2 = new Box(460,390,40,40);
	up1 = new Box(440,350,40,40);
	polygon = Bodies.circle(20,460,20,{isStatic: false});
	World.add(world,polygon);
	slingShot1 = new Slingshot(polygon,{x:100,y:200});
	ground2 = new Ground(440,560,1000,20);



	Engine.run(engine);
  
}


function draw() {
  background(0);

  ground1.display();
  fill("blue");
  bottom1.display();
  bottom2.display();
  bottom3.display();
  fill("pink");
  middle1.display();
  middle2.display();
  fill("green");
  up1.display();
  //slingShot1.display();
  ground2.display();

  imageMode(CENTER);
  image(polygon_image, polygon.position.x, polygon.position.y, 40, 40);
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot1.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot1.attach(polygon);
    }
}

