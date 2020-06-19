var wall,thickness,bullet,speed,weight;



function setup() {
  
createCanvas(1600,400);
weight=random(30,52);
speed=random(223,321);
bullet = createSprite(50,200,50,50);
thickness=random(22,83);





wall=createSprite(1200,200,thickness,height/2);
}
function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
  

  if(hasCollided(bullet,wall)){
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
bullet.velocityX=0;
if (damage>10){

wall.shapeColor="red";


}
if (damage<10){
wall.shapeColor=color(0,255,0);

}




  }

 



  drawSprites();
}

function hasCollided(object1,object2){

bulletRightEdge=object1.x+object1.width;
wallLeftEdge=object2.x;
if (bulletRightEdge>=wallLeftEdge){
return true
}
  return false
}