var trex_running,trex

function preload(){
  trex_running=loadAnimation('trex1.png','trex3.png','trex4.png')
}

function setup(){
  createCanvas(600,300)
  trex=createSprite(300,150,20,10)
  trex.addAnimation('running',trex_running)
  trex.scale=0.5
 
}
function draw(){
  background('pink')
  drawSprites()
}