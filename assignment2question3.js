//Sophie Knox Assignment 2
//Question 3: Re-positionable shape
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(191,212,219)");
  drawStar(200, 0, 2); //center star
  //these two tests show that the star is re-positionable anywhere on the canvas
  /*push()
  drawStar(150, 0, 0.5) //left star
  pop()*/
  /* push()
  drawStar(200, 225, 0.5) //right star
  pop() */
}
function drawStar(x, y, size) {
  translate(x, y);
  scale(size);
  strokeWeight(3); //outline thickness
  stroke("cream");

  //connecting the points to create our custom shape which is a star located in the top left corber
  fill("rgb(217,167,176)");
  beginShape(); //connecting the points
  vertex(0, 0); //top point
  vertex(30, 70); //right indent
  vertex(30, 70); //right indent
  vertex(100, 80); //right point
  vertex(100, 80); //right point
  vertex(40, 120); //botton right indent
  vertex(40, 120); //botton right indent
  vertex(65, 200); //bottom right point
  vertex(65, 200); //bottom right point
  vertex(0, 150); //bottom indent
  vertex(0, 150); //bottom indent
  vertex(-65, 200); //bottom right point
  vertex(-65, 200); //bottom right point
  vertex(-40, 120); //bottom left indent
  vertex(-40, 120); //bottom left indent
  vertex(-100, 80); //left point
  vertex(-100, 80); //left point
  vertex(-30, 70); //botton left indent
  vertex(-30, 70); //botton left indent
  endShape(CLOSE);
}
