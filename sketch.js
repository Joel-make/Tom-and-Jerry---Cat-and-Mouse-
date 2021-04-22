var tom, tom_i;
var jerry, jerry_i, jerry_i2;
var bgImg;

function preload()
{
  tom_i=loadImage("images/cat1.png");
  jerry_i=loadImage("images/mouse1.png");
  jerry_i2=loadAnimation("images/mouse3.png");
  bgImg = loadImage("images/garden.png");
  
}

function setup ()
{
  createCanvas(1000,800);
  tom=createSprite(800,600,10,10);
  tom.addImage(tom_i);
  tom.scale=0.2;
  jerry=createSprite(400,600,10,10);
  jerry.addImage(jerry_i);
  jerry.scale=0.1;
 
}
function draw()
{
  background(bgImg);
  drawSprites();
}

function keyPressed()
{


}