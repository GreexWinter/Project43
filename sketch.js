var hrs;
var mins;
var sec;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES); 
}

function draw() {
  background(0,0,0); 

  translate(400,200);
  rotate(-90);

  hrs = hour();
  mins = minute();
  sec = second();

  let secAngle = map(sec,0,60,0,360);
  let minsAngle = map(mins,0,60,0,360);
  let hrsAngle = map(hrs%12,0,12,0,360);

  console.log("Minute Angle: ", minsAngle, "Minutes: ", mins);
  console.log("Second Angle: ", secAngle, "Second: ", sec);
  console.log("Hour Angle: ", hrsAngle, "Hours: ", hrs);

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(5);
  line(0,0,130,0);
  pop();

  push();
  rotate(minsAngle);
  stroke(124,252,0);
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrsAngle);
  stroke(0,0,128);
  strokeWeight(12);
  line(0,0,80,0);
  pop();

  noFill();
  stroke(255,0,0);
  strokeWeight(5);
  arc(0,0,340,340,0,secAngle);

  noFill();
  stroke(124,252,0);
  strokeWeight(9);
  arc(0,0,320,320,0,minsAngle);

  noFill();
  stroke(0,0,128);
  strokeWeight(12);
  arc(0,0,290,290,0,hrsAngle);
}