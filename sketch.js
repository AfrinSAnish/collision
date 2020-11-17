var movingRect,fixedRect;

function setup() {
  createCanvas(800,800);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(300,200,50,40);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2 && 
    movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2 && 
    fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 && 
    movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2 )
    {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  console.log(fixedRect.x-movingRect.x);
  drawSprites();
}