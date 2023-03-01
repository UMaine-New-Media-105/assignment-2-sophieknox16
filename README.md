# assignment-2-sophieknox16
assignment-2-sophieknox16 created by GitHub Classroom
# Question 1


# Question 2
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

# Question 4
For this assignmnet I picked two flags, Somalia's flag and Kiribati's flag.
I took different aspects of the two flags and combined them into one flag.
I started off by making a curve that resembles a wave. I made this its own function to make the code in the draw function more readable and easier to access. 
I stred by plotting points that will connect into making a curve. I also definined variables with the values of the curveand points so if the wave was too straight I could change it easily. This is shown here. 
```Javascript
function curvyLine() {
  let start = 0; //start x value
  let add = 30; // increasing x value
  strokeWeight(1); //stroke of the points
 ```
 I then added in all of the points until it spaned the width of the canvas
 ```Javascript
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
```
I added a thick stroke instead of using fill to make the curves look like waves. 
I then used curveVertex to connect all of the points making a wave like shape. 

I called this function 6 times in draw and made them different colors so the waves would sit next to each other and resemble the waves in one of the origonal flags. I also used translate to move them to the top and bottom of the canvas. 
To make the waves look as if they are coming form the edges without going over I added in rectables to block out the rest of the background from the waves to the edge of the canvas. 
```Javascript
  push(); //rectangle to block the excess yellow at the top of the cury lines
  fill("midnightblue");
  rect(0, 0, 600, 50);
  pop();
```
Next I used my code form the last question to make two stars in the middle of the waves. These stars are light blue with a cream outline like the flag of Somalia and its colors. I called this function twice in draw

Next I set the angle mode to degrees in setup and used ellise mode to 'easliy' creae a sun. This is where I ran into the msot trouble with this project. I have to redo this twice but i eventually went back and watched the videos on how to make a star and just added my code from the points of the sun. 

I made this a seperate funciton as well to make this process as readable and easy as it could be. I started with a circle and then ploted points on one side of it to add the points of the sun and used curveVertex to try and make a curvy looking point. I admit this doesnt look the best and it could ba a bit more cury to resemble a sun however the function wasn't working well for me and I ran out of time. 
```Javascript
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
```
I called this function many many (I mean a lot) times in draw to rotate the curve sections around the circle of the sun to make a full sun. Once I got the sun I was looking for I translated the whole thing so it will sit inbetween the two stars at the center of the canvas
```Javascript
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
  rotate(10) [...]
```
Throughout my codde I used push and pop many times ot make each shape its own and there was no overlap. One of the only times I did not use this function was when rotateing the curves around the center of the circle when making the sun. 
Link to my sketch: https://editor.p5js.org/Sophiek/sketches/vlEmsq5yk
