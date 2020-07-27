var movingrect,fixrect;
var rect1,rect2;
function setup() {

  createCanvas(800,400);
 fixrect=  createSprite(400, 200, 50, 80);
 movingrect= createSprite(600,200,80,50);
 fixrect.shapeColor="green";
 movingrect.shapeColor="green";
 rect1=  createSprite(500, 100, 50, 80);
 rect2= createSprite(500,300,80,50);
rect1.velocityY =+5;
rect2.velocityY =-5;
}

function draw() {
  background(0);
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  
  if(movingrect.x-fixrect.x <fixrect.width/2+movingrect.width/2
    && fixrect.x-movingrect.x <fixrect.width/2+movingrect.width/2
   && movingrect.y-fixrect.y <fixrect.height/2+movingrect.height/2
    && fixrect.y-movingrect.y <fixrect.height/2+movingrect.height/2)
  {
    fixrect.shapeColor="red";
    movingrect.shapeColor="red";
   
  }
else{
  fixrect.shapeColor="green";
 movingrect.shapeColor="green";
}

if(rect2.x-rect1.x <rect1.width/2+rect2.width/2
  && rect1.x-rect2.x <rect1.width/2+rect2.width/2)
  {
rect1.velocityX=rect1.velocityX*(-1);
rect2.velocityX=rect2.velocityX*(-1);
  }

 if(rect2.y-rect1.y <rect1.height/2+rect2.height/2
  && rect1.y-rect2.y <rect1.height/2+rect2.height/2)
{
  rect1.velocityY=rect1.velocityY*(-1);
  rect2.velocityY=rect2.velocityY*(-1);
}





  drawSprites();
}