var fixedRect,movingRect;

var object1,object2;

var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.velocityX = 3;
  movingRect.velocityX = -3;

  gameObject1 = createSprite(300,100,50,50);
  gameObject2 = createSprite(700,150,50,50);
  gameObject1.shapeColor = "black";
  gameObject2.shapeColor = "black";

}

function draw() {
  background(255,255,255);  
  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;

  bounceOff(movingRect, fixedRect);

  if(isTouching(movingRect, gameObject2)){
    gameObject2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  else{
    gameObject2.shapeColor = "black";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}

