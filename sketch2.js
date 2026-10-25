// 3-1 Self-portrait/Artwork

// Draw your self-portrait, or find an artwork you like, such as a painting, poster, illustration, or pattern, recreate it with p5.js. It doesn't need to be 100% same, but something that represent youself or the work. Use basic elements and available functions, such as rect(), ellipse(), line(), arc(), bezier(), text(), fill(), stroke() and strokeWeight() to build your composition.

// Experimenting with interactions and randomness is encouraged. For example, any elements being generated differently every time the sketch is run? Does the size or color change based on mouse position or when the mouse clicks?


function setup() {
  createCanvas(400, 400);
}

function draw() {
    let bg = background('#8dd0ea');
    noStroke()
    angleMode(DEGREES)

    if (mouseIsPressed === true) {
      bg = background(random(255),random(255),random(255));
    }

  //NECK
  let skin = "#ffc8ad";
  fill(skin)
  circle(200,250, 100, 100)


   //FACE SHADOW
  let shadow = ("#e2a181")
  fill(shadow)
  push()
    translate(170,180)
    rotate(60)
    ellipse(0,0,200,100)
  pop()

  push()
    translate(230,180)
    rotate(300)
    ellipse(0,0,200,100)
  pop()

  //HAIR BEHIND
  push()
    translate(260,50)
    let hair = "#d0b873";
    fill(hair)
    rotate(10)
    rect(0, 0, 60, 300, 30)
  pop()

  //HAIR BEHIND
  push()
    translate(70,80)
    fill(hair)
    rotate(350)
    rect(0, 0, 60, 300, 30)
  pop()

  //FACE
    fill(skin)  
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
  push()
  translate(200,200)
    fill(shadow)
    ellipse(50,-70,50,30)
    ellipse(-50,-70,50,30)
  pop()

  //LIP
  push()
    translate(210,210)
    noStroke()
    fill('#f69a85')
    rotate(150)
    ellipse(0,0, 40,20)
  pop()

  //TONGUE
  push()
    translate(195,205)
    noStroke()
    fill('#da745d')
    rotate(160)
    ellipse(0,0, 50,30)
  pop()

  //UPPER LIP
  push()
    translate(200,195)
    noStroke()
    fill(skin)
    rotate(190)
    ellipse(0,0, 70,30)
  pop()

  //NOSE CONTOUR
  noFill()
  stroke(shadow)
  strokeWeight(5)
    arc(205, 170, 20, 20, 70, 180);

  push()
    translate(225, 145)
    stroke(shadow)
    strokeWeight(5)
    rotate(80)
    arc(0,0, 50, 20, 90, 180);
  pop()

  //HAIR ABOVE
  push()
    translate(200,200)
    noStroke()
    fill(hair)
    rotate(220)
    ellipse(60,140, 180,80)
  pop()

  push()
    translate(130,70)
    noStroke()
    fill(hair)
    rotate(120)
    ellipse(0,0, 180,80)
  pop()

  // EYES
  push()
  translate(155,135)
  noStroke()
    fill('#c8ede8')
    rotate(190)
    ellipse(0,0,40,25)
  pop()

  // EYES
  push()
  translate(245,135)
  noStroke()
    fill('#c8ede8')
    rotate(170)
    ellipse(0,0,40,25)
  pop()

  // IRIS AND PUPIL
  noStroke()
  fill('#a6bf6a')
  circle(240,132, 20, 20)
  circle(160,132, 20, 20)

  fill('#617338')
  circle(240,132, 10, 10)
  circle(160,132, 10, 10)

  fill('white')
  circle(243,128, 7, 7)
  circle(157,128, 7, 7)

  // LASH
    stroke('#362922')
    strokeWeight(5)
    noFill()
    arc(245,135,40,25, 190, 10)
    arc(155,135,40,25, -190, -10)

  //EYEBROWS
  push()
    noStroke()
    translate(180,105)
    fill(hair)
    rotate(100)
    rect(0, 0, 10, 50, 2)
  pop()

  push()
    noStroke()
    translate(270,97)
    fill(hair)
    rotate(80)
    rect(0, 0, 10, 50, 2)
  pop()
}