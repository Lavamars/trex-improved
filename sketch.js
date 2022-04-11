var ground, ground2, realg
var trex ,trex_running;
var rand, cloud, cloudimg;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground2=loadImage("ground2.png")
cloudimg=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(80,160,20,50)
  trex.scale = 0.5
  trex.addAnimation("running",trex_running)
  ground=createSprite(300,180,600,20)
  ground.addImage(ground2)
  realg=createSprite(300,190,600,10)
  realg.visible=false
}
 function clouds(){  
 if (frameCount%75==0){
  cloud=createSprite(600,50,10,40)
  rand=Math.round(random(5,100))
  cloud.y=rand
  cloud.addImage(cloudimg)
  cloud.scale=0.5
  cloud.velocityX = -2
  cloud.depth=1
 }
 
 }
function draw(){
  background("gray")
  
  if(keyDown("space")){
    if(trex.y>149){
      trex.velocityY = -9
    }
 }

  
  trex.collide(realg)
trex.depth=2 
trex.velocityY= trex.velocityY+0.5
ground.velocityX=-5

if (ground.x<0){
  ground.x=700
}
  clouds()
  drawSprites()

}
