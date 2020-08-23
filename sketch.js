var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color(255, 255, 255);
  bullet.velocityX = speed/4;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(50, 50, 100);  

  bullet.collide(wall);

  var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  console.log(deformation);

  if(deformation > 10) {
    bullet.shapeColor = color(255, 0, 0);
  }

  if(deformation < 10) {
    bullet.shapeColor = color(0, 255, 0);
  }

  drawSprites();
}