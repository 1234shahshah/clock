hr= hour();
mn=minute();
sc = second();





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  
  hrAngle=map(hr,0,12,0,360)
  push()
  rotate(hrAngle)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  mnAngle=map(mn,0,60,0,360)
  push()
  rotate(mnAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  scAngle=map(sc,0,60,0,360)
  push()
  rotate(scAngle)
  stroke("yellow")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
}