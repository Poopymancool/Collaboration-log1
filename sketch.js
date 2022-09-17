const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, controls = true, tenseconds = false, moveaway = false;
var user, utriangle, triangle1, triangle2;
function preload(){
  utriangle = loadImage("triangle.png");

}

function setup() {
 createCanvas(windowWidth,windowHeight);
 engine = Engine.create();
 world = engine.world;
  var options = {
    isStatic:true
  }

  triangle1 = createSprite(2000, 300, 30, 30);

  triangle1.addImage(utriangle);

  user = Bodies.polygon(windowWidth/2,800,3,40, options);

  World.add(world, user);
  setTimeout(function(){
   tenseconds = true;
  },13000)
  setTimeout(function(){
    moveaway = true;
   },7000)
}

function draw() {
  background("white"); 


  imageMode(CENTER);
  image(utriangle,user.position.x, user.position.y, 350, 225);
  Engine.update(engine);


  //triangle 1 & 2 moves in from top right and stops after seconds
  if(tenseconds == false){
    triangle1.position.x -=5;
    triangle1.position.y +=1;
  }
  if(moveaway== true){
    controls = false;
    user.position.x -=6;
    user.position.y +=1;
  }
  



  if(keyDown(UP_ARROW) && controls == true){
    user.position.y -= 5;
  }
  if(keyDown(DOWN_ARROW) && controls == true){
    user.position.y += 5;
  }
  if(keyDown(RIGHT_ARROW) && controls == true){
    user.position.x += 5;
  }
  if(keyDown(LEFT_ARROW) && controls == true){
    user.position.x -= 5;
  }


drawSprites();

}
