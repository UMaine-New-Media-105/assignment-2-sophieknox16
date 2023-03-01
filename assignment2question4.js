//Sophie Knox Assignment 2 
//Question 3: Combining Flags
// S - Somalia
// K - Kiribati
function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  ellipseMode(CENTER);

}
function draw() {
  background("lemonchiffon");


  push(); //rectangle to block the excess yellow at the top of the cury lines
  fill("midnightblue");
  rect(0, 0, 600, 50);
  pop();
  push();
  star(-10, 50, 0.8);
  pop();
  push();
  star(300, 50, 0.8);
  pop();
  push(); //rectangle to block the excess yellow at the bottom of the cury lines
  fill("midnightblue");
  rect(0, 370, 600, 45);
  pop();
  //top three lines
  stroke("midnightblue");
  curvyLine();
  push();
  translate(0, 30);
  stroke("midnightblue");
  curvyLine();
  pop();
  push();
  translate(0, 15);
  stroke("white");
  curvyLine();
  pop();
  //bottom 3 curvy lines
  push();
  translate(0, 350);
  stroke("midnightblue");
  curvyLine();
  pop(); 
  push();
  translate(0, 335);
  stroke("white");
  curvyLine();
  pop();
  push();
  translate(0, 320);
  stroke("midnightblue");
  curvyLine();
  pop();
  
  //making the sun for the left side of the canvas
  translate(300, 200)
  noStroke(); 
  fill("gold");
  circle(0, 0, 80); //center of the sun
  makeSun()
//push and pop are used to prevent any unwanted overlap of translations, rotations or colors
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()  
  rotate(10)
  makeSun()
  // this part was really tedious but I had to repeat this proces smany times to create the sun 
  //I started by doing this from the top left corner until it started to resemble a sun and then I used the translate function to move it to the center of my canvas

}

function curvyLine() {
  let start = 0; //start x value
  let add = 30; // increasing x value
  strokeWeight(1); //stroke of the points
  point(start, 30); //these following points are making the "borders" for the curvy lines
  point(start + add, 15);
  point(start + add * 2, 30);
  point(start + add * 3, 45);
  point(start + add * 4, 30);
  point(start + add * 5, 15);
  point(start + add * 6, 30);
  point(start + add * 7, 45);
  point(start + add * 8, 30);
  point(start + add * 9, 15);
  point(start + add * 10, 30);
  point(start + add * 11, 45);
  point(start + add * 12, 30);
  point(start + add * 13, 15);
  point(start + add * 14, 30);
  point(start + add * 15, 45);
  point(start + add * 16, 30);
  point(start + add * 17, 15);
  point(start + add * 18, 30);
  point(start + add * 19, 45);
  point(start + add * 20, 30);
  point(start + add * 21, 15);
  point(start + add * 22, 30);
  point(start + add * 23, 45);
  point(start + add * 24, 30);
  point(start + add * 25, 15);
  point(start + add * 26, 30);
  point(start + add * 27, 45);
  point(start + add * 28, 30);
  point(start + add * 29, 15);
  point(start + add * 30, 30);
  point(start + add * 31, 45);

  strokeWeight(15); //thick stroke to get the curvy line rather than a fill
  noFill();
  beginShape();
  curveVertex(start, 30);
  curveVertex(start, 30);
  curveVertex(start + add, 15);
  curveVertex(start + add * 2, 30);
  curveVertex(start + add * 3, 45);
  curveVertex(start + add * 4, 30);
  curveVertex(start + add * 5, 15);
  curveVertex(start + add * 6, 30);
  curveVertex(start + add * 7, 45);
  curveVertex(start + add * 8, 30);
  curveVertex(start + add * 9, 15);
  curveVertex(start + add * 10, 30);
  curveVertex(start + add * 11, 45);
  curveVertex(start + add * 12, 30);
  curveVertex(start + add * 13, 15);
  curveVertex(start + add * 14, 30);
  curveVertex(start + add * 15, 45);
  curveVertex(start + add * 16, 30);
  curveVertex(start + add * 17, 15);
  curveVertex(start + add * 18, 30);
  curveVertex(start + add * 19, 45);
  curveVertex(start + add * 20, 30);
  curveVertex(start + add * 21, 15);
  curveVertex(start + add * 22, 30);
  curveVertex(start + add * 23, 45);
  curveVertex(start + add * 24, 30);
  curveVertex(start + add * 25, 15);
  curveVertex(start + add * 26, 30);
  curveVertex(start + add * 27, 45);
  curveVertex(start + add * 28, 30);
  curveVertex(start + add * 29, 15);
  curveVertex(start + add * 30, 30);
  curveVertex(start + add * 31, 45);
  endShape();
}
//this function will create a light blue star witha  white outline
function star(x, y, size) {
  strokeWeight(3);
  translate(x, y)
  scale(size);
  stroke("cream");
  fill("skyblue");
  beginShape(); //connecting the points
  vertex(200, 80); //top point
  vertex(230, 150); //right indent
  vertex(230, 150); //right indent
  vertex(300, 160); //right point
  vertex(300, 160); //right point
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
  vertex(100, 160); //left point
  vertex(100, 160); //left point
  vertex(170, 150); //botton left indent
  vertex(170, 150); //botton left indent
  endShape(CLOSE);
}
//this function will make the basis of the sun
function makeSun(){
    push();
  //noStroke(); // points surrounding the circle that is going to be the sun
  noStroke();
  point(60, 0);
  point(40, 0);
  point(38, 10);
  pop();
  
  push();
  fill("gold"); //conecting the points to creat a petal/sun like shape
  beginShape();
  curveVertex(90, 0);
  curveVertex(40, 0);
  curveVertex(40, 0);
  curveVertex(60, 0);
  curveVertex(38, 10);
  curveVertex(38, 10);
  endShape();
  pop();
  //next I will use this shape and repeat and rotate it to go around the circle to make a sun
  
}
