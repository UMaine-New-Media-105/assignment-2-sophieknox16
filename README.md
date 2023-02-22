# assignment-2-sophieknox16
assignment-2-sophieknox16 created by GitHub Classroom
# Question 1
Link: https://editor.p5js.org/Sophiek/sketches/Lvsw2biLS 

I creaded a star using points and lines 
I first mapped out the points and inward points of the star on my canvas to outline how big and where the star would be 
```Javascript
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
  
  Next I declared a stroke and its weight so it gave the star an outline of white
```Javascript
  strokeWeight(3);
  stroke("cream")
 ```
  Lastly I connected all of th elines to create my shape and fill it with red
  ```Javascript
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
  ```
  
  # Question 3
  First I set the cannvas to 400, 400 to create the drawing board for the re-positionalble shape.
  Next I copied my code from the first question which was a star. 
  I made this shape its own function so I could set parameters to adjust its location and size on the canvas. 
```Javascript
function drawStar(x, y, size) {
  translate(x, y);
  scale(size);
  strokeWeight(3); //outline thickness
  stroke("cream");
```
I lastly called the function in draw to get the shape on the canvas and set the parameters so the shape filled the entire canvas. 
```Javascript
function draw() {
  background("rgb(191,212,219)");
  drawStar(200, 0, 2); //center star
}
```  
Link: https://editor.p5js.org/Sophiek/sketches/54QSdqjno
