var ball;
function setup(){
  createCanvas(400,400);
  ball=createSprite(200,200,20,20);
  createEdgeSprites();

}
function draw(){
  background("blue");

  if(keyDown("UP_ARROW"))
  {
    ball.velocityY=-3
    
  }
  
  
drawSprites();}
  
