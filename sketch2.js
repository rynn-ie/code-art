// 3-1 Self-portrait/Artwork

// Draw your self-portrait, or find an artwork you like, such as a painting, poster, illustration, or pattern, recreate it with p5.js. It doesn't need to be 100% same, but something that represent youself or the work. Use basic elements and available functions, such as rect(), ellipse(), line(), arc(), bezier(), text(), fill(), stroke() and strokeWeight() to build your composition.

// Experimenting with interactions and randomness is encouraged. For example, any elements being generated differently every time the sketch is run? Does the size or color change based on mouse position or when the mouse clicks?


function setup() {
  createCanvas(400, 400);
}

function draw() {
    background('#8dd0ea');
    noStroke()
    angleMode(DEGREES)
    let skin = "#ffc8ad";
    fill(skin)  

    //FACE
  ellipse(200,100,200,150)
  
  push()
    translate(170,170)
    rotate(60)
    ellipse(0,0,200,100)
  pop()

  push()
    translate(230,170)
    rotate(300)
    ellipse(0,0,200,100)
  pop()

  //BLUSH
    fill('#f69a85')
    ellipse(130,170,50,30)
    ellipse(270,170,50,30)

  //SHADOWS
  let shadow = ("#e2a181")
  push()
  translate(200,200)
    fill(shadow)
    ellipse(50,-70,50,30)
    ellipse(-50,-70,50,30)
  pop()

  //NOSE CONTOUR
  noFill()
  stroke(shadow)
  strokeWeight(5)
    arc(200, 170, 20, 20, 90, 180);

}