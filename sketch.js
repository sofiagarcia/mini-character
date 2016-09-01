
function setup() {
  createCanvas(500, 500);
}

 
function draw() {
  
  var x = mouseX;
  var y = mouseY;
  background(20, 90, 80);
 
 //var col = color(random(255), random(255), random(255));

 /* HEAD */
  if (mouseIsPressed){
    fill(245, 200, 51);
  } else{
  fill(30, 40, 84);
  };
  ellipse(x, y, 200, 200);

/* EYEBALLS */
  
  //left eye
  fill(255);
  ellipse(x - 50, y - 50, 70, 70);
  
  
  //right eye
  ellipse(x + 50, y - 50, 50, 50);
  
  //pupils
  fill(random(255), random(255), random(255));
  ellipse(x-50, y - 50, 25, 25);
  ellipse(x+50, y-50, 20, 20);
  


/* MOUTH */
  fill(12, 12 ,12);
  rectMode(CENTER);
  rect(x, y+50, 120, 20, 50);
  
  //teeth
  fill(255);
  rect(x-8, y+48, 12, 15);
  rect(x+9, y+48, 12, 15);
  
  


}