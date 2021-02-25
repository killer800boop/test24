const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1000,200,30)
	mango3 = new mango(1000,100,30)
	mango4 = new mango(1100,200,30)
	mango5 = new mango(1150,200,30)
  mango6 = new mango(1200,300,30)
  mango7 = new mango(1000,300,30)
  mango8 = new mango(900,300,30)
  mango9 = new mango(900,200,30)
  mango10 = new mango(1200,150,30)

	stone1 = new stone(240,420,30)
	rope1 = new rope(stone1.body,{x:235,y:420})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  drawSprites()
  //Add code for displaying text here!
  text("Press space for 1 more chance ",200,100)
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();



  stone1.display();
  rope1.display();
  groundObject.display();
  detectcollision(stone1,mango1)
  detectcollision(stone1,mango2)
  detectcollision(stone1,mango3)
  detectcollision(stone1,mango4)
  detectcollision(stone1,mango5)
  detectcollision(stone1,mango6)
  detectcollision(stone1,mango7)
  detectcollision(stone1,mango8)
  detectcollision(stone1,mango9)
  detectcollision(stone1,mango10)

}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope1.fly()
}

function keyPressed() {
  if (keyCode === 32) {
  rope1.attach(stone1.body)
  Matter.Body.setPosition(stone1.body,{x:235,y:420})
}
}

function detectcollision(lstone,lmango) {
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance = dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)
  
  if (distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body,false)    
  }
}





  
