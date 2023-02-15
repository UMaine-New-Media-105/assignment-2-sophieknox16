function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(191,212,219)");

//points for the star
  beginShape(POINTS);
  vertex(200, 80); //top point
  vertex(230, 150); //right indent
  vertex(170, 150); //left indent
  vertex(100, 170); //left point
  vertex(300, 170); //right point
  vertex(240, 200); //botton right indent
  vertex(160, 200); //bottom left indent
  vertex(135, 280); //bottom left point
  vertex(265, 280); //bottom right point
  vertex(200, 230); //bottom indent
  endShape(CLOSE);

  strokeWeight(3);
  stroke("cream")
 
//connecting the points
  fill("rgb(217,167,176)")
  beginShape();
  vertex(200, 80); //top point
  vertex(230, 150); //right indent
  vertex(230, 150); //right indent
  vertex(300, 170); //right point
  vertex(300, 170); //right point
  vertex(240, 200); //botton right indent
  vertex(240, 200); //botton right indent
  vertex(265, 280); //bottom right point
  vertex(265, 280); //bottom right point
  vertex(200, 230); //bottom indent
  vertex(200, 230); //bottom indent
  vertex(135, 280); //bottom right point
  vertex(135, 280); //bottom right point  
  vertex(160, 200); //bottom left indent
  vertex(160, 200); //bottom left indent
  vertex(100, 170); //left point
  vertex(100, 170); //left point
  vertex(170, 150); //botton left indent
  vertex(170, 150); //botton left indent
  endShape(CLOSE)
  
}
