//Challenge 1, Sophie Knox S
function setup() {
  createCanvas(400, 400);
}
function draw() {
  fill("lightblue")
//calling the function to make the grid
  initialS(0)
  initialS(80)
  initialS(160)
  initialS(240)
  initialS(320)

  fill("slategrey"); //letter squares
  square(80, 0, 80);
  square(160, 0, 80);
  square(240, 0, 80);
  square(80, 80, 80);
  square(80, 160, 80);
  square(160, 160, 80);
  square(240, 160, 80);
  square(240, 240, 80);
  square(80, 320, 80);
  square(160, 320, 80);
  square(240, 320, 80);
}
//each row of squares using y as a varable 
function initialS(y){
  rect(0, y, 80, 80)
  rect(80, y, 80, 80)
  rect(160, y, 80, 80)
  rect(240, y, 80, 80)
  rect(320, y, 80, 80)

}
