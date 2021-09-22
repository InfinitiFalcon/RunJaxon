var backdrop, backdropimg;
var runner, runnerimg;
var leftbound, rightbound;
function preload(){
  //pre-load images
  backdropimg = loadImage("path.png")
  runnerimg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  backdrop = createSprite(200, 200, 400, 400)
  backdrop.addImage("backdrop",backdropimg)
  runner = createSprite(200, 350, 10, 10)
  runner.addAnimation("running", runnerimg)
  runner.scale = 0.1
  leftbound = createSprite(25, 200, 10, 400)
  rightbound = createSprite(375, 200, 10, 400)
  //leftbound.visible = false
  //rightbound.visible = false
}

function draw() {
  background(0);
  backdrop.velocityY = 2
  if(backdrop.y >= 10){
    backdrop.y = 390
  }
  runner.x = mouseX
  runner.collide(leftbound)
  runner.collide(rightbound)
  

  drawSprites()
}
