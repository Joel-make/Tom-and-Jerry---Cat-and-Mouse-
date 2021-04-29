var tom, tom_i, tom_a, tom_i2;
var jerry, jerry_i, jerry_a, jerry_i2;
var bgImg;
var gameState=0;
var START=0;
var PLAY=1;
var END = 2;
function preload()
{
  tom_i=loadImage("cat1.png");
  jerry_i=loadImage("mouse1.png");
  jerry_a=loadAnimation("mouse2.png","mouse3.png");
  tom_a=loadAnimation("cat2.png", "cat3.png");
  jerry_i2=loadAnimation("mouse4.png");
  tom_i2=loadAnimation("cat4.png");
  bgImg = loadImage("garden.png");
  
}

function setup ()
{
  createCanvas(1000,800);
  tom=createSprite(800,680,10,10);
  tom.addImage(tom_i);
  tom.scale=0.24;
  tom.debug=false;
  tom.setCollider("rectangle",0,0,1000,500);

  jerry=createSprite(200,700,10,10);
  jerry.addImage(jerry_i);
  jerry.scale=0.13;
  jerry.debug=false;
  jerry.setCollider("circle",0,0,500);
 
}
function draw()
{
  background(bgImg);
  if(gameState===0)
  {
    jerry.addImage(jerry_i);
    tom.addImage(tom_i);
    
  }
  if(tom.x < 800)
  {
    gameState=1;
  }
  if(gameState===1)
  {
    keyPressed();
  }
  if(isTouching(tom,jerry))
  {
    gameState=2;
    tom.velocityX=0;
  }
  if(gameState===2)
  {
    jerry.addAnimation("mouseTeasing", jerry_i2);
    jerry.changeAnimation("mouseTeasing");
    tom.addAnimation("mouseTeasing" , tom_i2);
    tom.changeAnimation("mouseTeasing");
  }
  
  console.log(jerry.x,tom.x)
  drawSprites();

}

function keyPressed()
{
 if(keyCode===LEFT_ARROW && gameState===0)
 {
   jerry.addAnimation("mouseTeasing", jerry_a);
   jerry.changeAnimation("mouseTeasing");
   tom.addAnimation("mouseTeasing" , tom_a);
   tom.changeAnimation("mouseTeasing");
   tom.velocityX=-2;
 }

}
function isTouching(object1,object2)
{ 
 if(object1.x > 200 && object1.x < 370)
    {
     return true;  
    }       
  else
  {
    return false;
  }  
}