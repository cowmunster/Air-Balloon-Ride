var database, balloonImage1, balloon, bg
function preload(){
bg = loadImage("pro-C35 images/Hot Air Ballon-01.png")
balloonImage1 = loadImage("pro-C35 images/Hot Air Ballon-02.png")

}




function setup() {
  createCanvas(1500,700);
  database = firebase.database()
  balloon = createSprite(250,650,150,150)
  balloon.addImage(balloonImage1)
balloon.scale = 0.5

}

function draw() {
  background(bg);  
  if(keyDown(LEFT_ARROW)){
    balloon.velocityX = -10
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.velocityX = 10
  }
  if(keyDown(UP_ARROW)){
    balloon.velocityY = -10
  }
  if(keyDown(DOWN_ARROW)){
    balloon.velocityY = 10
  }
  drawSprites();
}