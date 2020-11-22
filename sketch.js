var car1, car2, car3, car4;
var block1, block2, block3, block4;
var box1, box2, box3, box4;
function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 90, 600, 50);
  box1.shapeColor = color("black");
  box2 = createSprite(400, 150, 600, 50);
  box2.shapeColor = color("black");
  box3 = createSprite(400, 210, 600, 50);
  box3.shapeColor = color("black");
  box4 = createSprite(400, 270, 600, 50);
  box4.shapeColor = color("black");
 
 
  block1 = createSprite(655, 90, 10, 30);
  block1.shapeColor = color("white");
  block2 = createSprite(655, 150, 10, 30);
  block2.shapeColor = color("white");
  block3 = createSprite(655, 210, 10, 30);
  block3.shapeColor = color("white");
  block4 = createSprite(655, 270, 10, 30);
  block4.shapeColor = color("white");

  car1 = createSprite(200, 90, 20, 10);
  car1.shapeColor = color("red");
  car1 = createSprite(640, 150, 20, 10);
  car1.shapeColor = color("green");
  car1 = createSprite(640, 210, 20, 10);
  car1.shapeColor = color("blue");
  car1 = createSprite(640, 270, 20, 10);
  car1.shapeColor = color("yellow");
}

function draw() {
  background(255,255,255);  
  drawSprites();
}