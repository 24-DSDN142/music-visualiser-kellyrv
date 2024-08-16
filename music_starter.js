
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let img;
let img2;
let img3
let moonX = 1

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //colorMode(HSB, 100)
  background(255)
  //rectMode(CENTER)
  textSize(9);

  console.log(counter)

 
 //image(img, 0, 0, 1280, 720) // image sourced from https://unsplash.com/photos/the-night-sky-is-filled-with-stars-Q_RBVFFXR_g
 image(img2, 0, 0, 1280, 720) // image sourced from https://unsplash.com/photos/black-and-white-stars-during-night-time-6FdG9OL6JLI

 



 fill(209, 129, 38)
 noStroke()
 ellipse(640,360,350,350) // sun base layer
 
 

//for the sunbeams, i used the tutorial at this link then modified to fit my purposes. https://editor.p5js.org/pippinbarr/sketches/B09AFYsGQ

push()

// How many lines projecting from the center in a circle?
let lines = 100;

translate(640, 360);

  // A light stroke
  stroke(237, 201, 116, 127);
  strokeWeight(3)

  // Loop through all the lines we need to draw
  for (let i = 0; i < lines; i++) {

    // Rotate by one increment based on the number of lines there are
    rotate(360/lines);

    let length = map(vocal, 0, 100, 180, 240)

   line(0,0, length, 0)
   
  }
pop()


push()

// How many lines projecting from the center in a circle?
let lines2 = 90;

translate(640, 360);

  // A light stroke
  stroke(217, 162, 52, 127);
  strokeWeight(2)

  // Loop through all the lines we need to draw
  for (let i = 0; i < lines; i++) {

    // Rotate by one increment based on the number of lines there are
    rotate(360/lines2);

    let length = map(vocal, 0, 100, 200, 260)

   line(0,0, length, 0)

  
  }

pop()



push()

// How many lines projecting from the center in a circle?
let lines3 = 60;

translate(640, 360);

  // A light stroke
  stroke(204, 144, 71, 127);
  strokeWeight(1)
  // Loop through all the lines we need to draw
  for (let i = 0; i < lines; i++) {

    // Rotate by one increment based on the number of lines there are
    rotate(360/lines3);

    let length = map(vocal, 0, 100, 210, 300)

   line(0,0, length, 0)

  
  }

pop()

 
fill(204, 144, 71, 160)
noStroke()
ellipse(640,360,350,350) // sun



push()
tint(204, 144, 71, 127);
image(img4, 370, 120, 540, 500) // image from https://www.pngegg.com/en/png-zwzev

pop()




fill(0)
ellipse(moonX,360,330,330) // moon
moonX = moonX + .11
if (moonX > 640){
 moonX = 640
}




}



/*

//bezier attempts

stroke(217, 179, 98)
 strokeWeight(2)
 noFill()
 beginShape();


vertex(683, 324);
bezierVertex(689, 226, 842, 245, 849, 191);
endShape();

beginShape();
vertex(636, 347);
bezierVertex(599, 212, 772, 245, 748, 96);
endShape();

beginShape();
vertex(598, 74);
bezierVertex(678, 151, 533, 210, 640, 356);
endShape();
*/









/*
//weird sun images test

 push()
 let sunSize = map(vocal, 0, 100, 600, 660)
 translate(640,360) //moves sun 0,0 coordinates
 image(img3,-300, -290, sunSize, sunSize); //sun png
 rotate(90)
 image(img3,-290, -290, sunSize, sunSize); //sun png
 rotate(40)
 image(img3,-290, -290, sunSize, sunSize); //sun png
 pop()
 */







 /* 
 //line tests
 
 let drumMap = map(drum,0, 100, 30, 90);
 let lengthOfLine = 200;
 let lineStart = 100;
 let lineEnd = lineStart + lengthOfLine;

 strokeWeight(6)

 for(let i =1; i < 6; i = i+1) {
  let lineStepStart = i*100
  let lineStepEnd = i*50
  line(lineStart, lineStepStart, lineEnd, lineStepEnd)

 }








/*let circleWidth

let circleX
ellipse(circleStart, 300, 100, 100)


*/















/*
//drum!!!!!

let drumSize = map(drum, 0, 100, 200, 250)

//draw a drum

  fill(255)
  stroke("#aeb0af")
  strokeWeight(6)
  fill("#a11b12")
  rect(270, 270, drumSize, 150) // drum body
  fill("#f5ecdc")
  ellipse(270, 200, drumSize, 75) //drum top
  noStroke()
  fill("#a11b12")
  ellipse(270, 345, drumSize, 75) //drum bottom

  stroke(0)
  line(300, 550, 450, 450)
  line(340, 570, 430, 440)

  fill(0)
  ellipse(450, 450, 8,10)
  ellipse(430, 440, 8,10)



}



















//////////////////////// new block of example code here



let bar_spacing = height / 10;
let bar_height = width / 12;
let bar_pos_x = width / 2;


// vocal bar is red
fill(200, 0, 0);
rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
fill(0);
text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

// drum bar is green
fill(0, 200, 0);
rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
fill(0);
text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

// bass bar is blue
fill(50, 50, 240);
rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
fill(0);
text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

// other bar is white
fill(200, 200, 200);
rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
fill(0);
text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
fill(255, 255, 0);

// display "words"
textAlign(CENTER);
textSize(vocal);
text(words, width/2, height/3); 

*/