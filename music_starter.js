
let img;
let img2;
let img3
let moonX = 0
let moonTint = 110
let cloudX = 1280
let cloudX1 = 1280
let cloudX2 = 980
let cloudX3 = 180
let cloudX4 = 80
let cloudX5 = 580
let cloudX6 =  1480
let starXPos = 0
let starYPos = 60
let starXPos2 = 1280
let starYPos2 = 300


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(255)
  textSize(9);

  console.log(counter)

 

 image(img2, 0, 0, 1280, 720) // stars background image sourced from https://unsplash.com/photos/black-and-white-stars-during-night-time-6FdG9OL6JLI




 fill(255)
 let starSize = map(drum, 0, 100, 1, 9) // maps star twinkling to song
 ellipse(100, 200, starSize, starSize) // draw twinkling stars
 ellipse(150, 350, starSize, starSize)
 ellipse(200, 600, starSize, starSize)
 ellipse(300, 400, starSize, starSize)
 ellipse(400, 200, starSize, starSize)
 ellipse(500, 500, starSize, starSize)
 ellipse(600, 700, starSize, starSize)
 ellipse(700, 300, starSize, starSize)
 ellipse(800, 100, starSize, starSize)
 ellipse(900, 600, starSize, starSize)
 ellipse(1000, 400, starSize, starSize)
 ellipse(1200, 700, starSize, starSize)
 ellipse(1160, 300, starSize, starSize)
 ellipse(1100, 600, starSize, starSize)
 ellipse(900, 100, starSize, starSize)
 ellipse(1200, 400, starSize, starSize)
 ellipse(1260, 500, starSize, starSize)
 ellipse(1100, 340, starSize, starSize)


 push() //shooting stars
 ellipse(starXPos-1000, starYPos, 15, 2) // draw twinkling stars
 starXPos = starXPos + 60//make shooting star travel accross screen fast
 starYPos = starYPos + 15 // make shooting star travel at an angle
 if (starXPos > 5120){
  starXPos = -2560 //make shooting star start again
 }
 if (starYPos > 725){
  starYPos = -720 //make shooting star start again
 }
 
 pop()

 push() // shooting stars
 ellipse(starXPos2, starYPos2, 15, 2) // draw twinkling stars
 starXPos2 = starXPos2 - 60//make shooting star travel accross screen fast
 starYPos2 = starYPos2 + 20
 if (starXPos2 < -5120){
  starXPos2 = 5120 //make shooting star start again
 }
 if (starYPos2 > 725){
  starYPos2 = -725 //make shooting star start again
 }
 pop()

 
 push()
 tint(77, 79, 158, 230)
 image(img6, cloudX1, 0, 400, 300) //small right dust clouds, sourced from https://pngtree.com/freepng/realistic-style-of-dust-clouds_6688646.html
 cloudX1 = cloudX1 - .5
 if (cloudX1 < -400){cloudX1 = 1280}
 pop()

 push()
 tint(77, 79, 158, 200)
 image(img6, cloudX2, 400, 600, 450) //big right dust clouds, sourced from https://pngtree.com/freepng/realistic-style-of-dust-clouds_6688646.html
 cloudX2 = cloudX2 - .5
 if (cloudX2 < -600){cloudX2= 1280}
 pop()

 
 push()
 tint(77, 79, 158, 200)
 image(img6, cloudX3, -100, 600, 450) //big left dust clouds, sourced from https://pngtree.com/freepng/realistic-style-of-dust-clouds_6688646.html
 cloudX3 = cloudX3 - .5
 if (cloudX3 < -600){cloudX3 = 1280}
 pop()


 push()
 tint(77, 79, 158, 230)
 rotate(8)
 image(img6, cloudX4, 500, 400, 300) //small left dust clouds, sourced from https://pngtree.com/freepng/realistic-style-of-dust-clouds_6688646.html
 cloudX4 = cloudX4 - .5
 if (cloudX4 < -400){cloudX4 = 1280}
 pop()

 

 push()
 tint(77, 79, 158, 200)
 rotate(10)
 image(img6, cloudX5, 200, 600, 450) //big middle dust clouds, sourced from https://pngtree.com/freepng/realistic-style-of-dust-clouds_6688646.html
 cloudX5 = cloudX5 - .5
 if (cloudX5 < -600){cloudX5 = 1280}
 pop()


 push()
 tint(77, 79, 158, 200)
 rotate(-7)
 image(img6, cloudX6, 200, 600, 450) //big middle dust clouds, sourced from https://pngtree.com/freepng/realistic-style-of-dust-clouds_6688646.html
 cloudX6 = cloudX6 - .5
 if (cloudX6 < -600){cloudX6 = 1280}
 pop()

 



 fill(209, 129, 38)
 noStroke()
 ellipse(640,360,350,350) // sun base layer
 
 

//for the sunbeams, I took inspiration from the example at this link, and then used what I learbed from it to create a design fitting for my purposes. https://editor.p5js.org/pippinbarr/sketches/B09AFYsGQ

push() //this section draws the shortest sunbeams
 translate(640, 360);
  stroke(237, 201, 116, 127); // light sunbeam colour
 // let beamWidth = map(drum, 0, 100, 1.5, 2)
  strokeWeight(1.75)

  for (let i = 0; i < 100; i++) {
   rotate(360/100); //make lines in circle
   let length = map(drum, 0, 100, 190, 250) // maps line length to song
   line(0,0, length, 0)
  }
pop()



push() //this section draws the medium length sunbeams
 translate(640, 360);
  stroke(217, 162, 52, 127); // medium sunbeam colour
  strokeWeight(1.5)

  for (let i = 0; i < 90; i++) { //draws lines
   rotate(360/90); // makes lines be in a circle
   let length = map(other, 0, 100, 100, 260) //maps line length to song
   line(0,0, length, 0)
  }
pop()



push()
// this section draws long sunbeams

 translate(640, 360);
  stroke(204, 144, 71, 127); // dark sunbeam colour
  strokeWeight(1)

  for (let i = 0; i < 55; i++) {
    rotate(360/55); // draw lines in  circle
    let length = map(vocal, 0, 100, 150, 300) //maps line length to song
    line(0,0, length, 0)
  }
pop()


push()
// this section draws longest sunbeams

 translate(640, 360);
  stroke(204, 144, 71, 127); // dark sunbeam colour
  strokeWeight(1)

  for (let i = 0; i < 60; i++) {
    rotate(360/60); // draw lines in  circle
    let length = map(bass, 0, 100, 100, 450) //maps line length to song
    line(0,0, length, 0)
  }
pop()


 
fill(204, 144, 71, 160)
noStroke()
ellipse(640,360,350,350) // sun base layer



push()
tint(204, 144, 71, 127);
image(img4, 370, 120, 540, 500) // sun texture layer, image from https://www.pngegg.com/en/png-zwzev
pop()



push()
fill(0)
ellipse(moonX,360,330,330) // moon background layer
tint(130, moonTint);
image(img5, moonX-165, 195, 330, 330) // moon image overlay layer, sourced from https://www.freeiconspng.com/img/44673 
moonX = moonX + .2 //make moon travel accross screen slowly

if (moonX > 250){moonTint = 105} //changes moon tint to be gradually darker as moves across screen
if (moonX > 300){moonTint = 100}
if (moonX > 350){moonTint = 95}
if (moonX > 400){moonTint = 90}
if (moonX > 450){moonTint = 85}
if (moonX > 500){moonTint = 80}
if (moonX > 550){moonTint = 75}
if (moonX > 590){moonTint = 70}
if (moonX > 610){moonTint = 65}
if (moonX > 620){moonTint = 63}
if (moonX > 630){moonTint = 61}
if (moonX > 640){moonTint = 60}





if (moonX > 640){
 moonX = 640 //make moon freeze over sun once it reaches centre
}
 

pop()





}














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

*/












