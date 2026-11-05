/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// 10:37 CLASS

let centerCircleSize
// circles
let circleNumSlider;
let circleGapSlider;
let circleColorPicker;

//lines 1
let lines1NumSlider;
let lines1LenSlider;
let showLine1Checkbox

function setup() {
  createCanvas(400, 400);
  // noFill()
  strokeWeight(10)

  createP("circles")
  circleNumSlider = createSlider(3,6) // (min, max, default, step)
  circleGapSlider = createSlider(20,100)
  circleColorPicker = createColorPicker('#ff00ff')
  showFillCheckbox = createCheckbox("show", false)

  createP("line1")
  lines1NumSlider = createSlider()
  lines1LenSlider = createSlider()
  showLine1Checkbox = createCheckbox("show", true)
}

function draw() {
  background(50);
  translate(width/2, height/2)
  drawCircles()
  
  //conditional for lines
  if (showLine1Checkbox.checked()) {
    // drawLines1()
  }
  //circle(0,0, centerCircleSize)
}

// function drawLines1() {
//    let num=lines1NumSlider.value()
//   let len=lines1LenSlider.value()
//   for(let i=0; i < 5; i++) {
//     push()
//     rotate(i/5 * TWO_PI)
//     // rotate then translate
//     translate(100,0)
//     rotate (frameCount * 0.05)
//     rotate(PI/4) //individual rotation for the line
//     stroke('#ffff00')
//     line(-len/2,0, len/2,0) //spins lines from center point
//     pop()
//   }
// }

function drawCircles() {
  let from = color(255, 183, 0);
  let to = color(72, 61, 139);
  let num = circleNumSlider.value()
  let gap = circleGapSlider.value() // make the gap into a global var to let centerCircleSize access
  // if nofillcheckbox is check {
   //noFill()
  //}
  
  for(let i=0; i < num; i++) {
    push()
  //   if (showFillCheckbox.checked()) {
  //   fill('#ffffff')

    
  // }
    // centerCircleSize = 1 * gap
    //rectMode(CENTER)
    //square(0,0, (i+1) * gap)
    // stroke(circleColorPicker.value())
    stroke(lerpColor(from, to, i/num))
    circle(0,0, (i+1) * gap )
    pop()
  }
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

let centerCircleSize;

// circles
let circleNumSlider;
let circleGapSlider;
let circleColorPicker;

//lines 1
let lines1NumSlider;
let lines1LenSlider;
let showLine1Checkbox

function setup() {
  createCanvas(400, 400);
  noFill()
  strokeWeight(10)

  createP("circles")
  circleNumSlider = createSlider(3,6) // (min, max, default, step)
  circleGapSlider = createSlider(20,100)
  showFill = createCheckbox("Show fill", false)

  let jpgButton = createButton('Export JPG')
  jpgButton.mousePressed(function() {
    saveCanvas('generativelogo', 'jpg');
  })

}

function draw() {
  background('#137ca5');
  translate(width/2, height/2)
  drawCircles()
}

function drawCircles() {
  let from = color(255, 183, 0);
  let to = color(255, 250, 230);
  let num = circleNumSlider.value()
  let gap = circleGapSlider.value() // make the gap into a global var to let centerCircleSize access
  
  for(let i = num - 1; i >= 0; i--) { //loop syntax for reversing the orderw
    push()
    stroke(lerpColor(from, to, i/num))
    if (showFill.checked()) {
     fill(lerpColor(from, to, i/num))
    } else {
      noFill()
    }
    circle(0,0, (i+1) * gap )
    pop()

    centerCircleSize = 1 * gap
    fill('#FFB700')
    noStroke()
    circle(0,0, centerCircleSize)
  }
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//11:23 class


let centerCircleSize;

// circles
let circleNumSlider;
let circleGapSlider;
let circleColorPicker;
let circleWeightSlider;

function setup() {
  createCanvas(400, 400);
  noFill()
  strokeWeight(10)

  createP("circles")
  circleNumSlider = createSlider(3,6,4) // (min, max, default, step)
  circleGapSlider = createSlider(20,100)
  showFill = createCheckbox("Always Show Fill", false)
  circleWeightSlider = createSlider(5, 60, 15)

  let jpgButton = createButton('Export JPG')
  jpgButton.mousePressed(function() {
    saveCanvas('generativelogo', 'jpg');
  })

}

function draw() {
  background('#137ca5');
  translate(width/2, height/2)
  drawCircles()
}

function drawCircles() {
  let from = color(255, 183, 0);
  let to = color(255, 250, 230);
  let num = circleNumSlider.value()
  let gap = circleGapSlider.value() // make the gap into a global var to let centerCircleSize access
  
  for(let i = num - 1; i >= 0; i--) { //loop syntax for reversing the orderw
    push()
    stroke(lerpColor(from, to, i/num))
    strokeWeight(circleWeightSlider.value())
    
    if (showFill.checked()) {
     fill(lerpColor(from, to, i/num))
    } else {
      noFill()
    }

    if (i === 1) {
      stroke(255, 84, 0)
    }
    circle(0,0, (i+1) * gap )

    pop()

    centerCircleSize = 1 * gap
    fill('#FFB700')
    noStroke()
    circle(0,0, centerCircleSize)
  }
}

////////////////
////////////////
/////////////////

let centerCircleSize;

// circles
let circleNumSlider;
let circleGapSlider;
let circleColorPicker;
let circleWeightSlider;

function setup() {
  createCanvas(1200, 800);
  noFill()
  strokeWeight(10)

  createP("circles")
  circleNumSlider = createSlider(3,6,4) // (min, max, default, step)
  circleGapSlider = createSlider(20,100)
  showFill = createCheckbox("Always Show Fill", false)
  circleWeightSlider = createSlider(5, 60, 15)

  let jpgButton = createButton('Export JPG')
  jpgButton.mousePressed(function() {
    saveCanvas('generativelogo', 'jpg');
  })

}

function draw() {
  background('#137ca5');
  translate(width/2, height/2)
  drawCircles()
}

function drawCircles() {
  let fromdarkyel = color(255, 183, 0);
  let tolightyel = color(255, 230, 175);
  let num = circleNumSlider.value()
  let gap = circleGapSlider.value() // make the gap into a global var to let centerCircleSize access
  let lerpStart = 2
  
  for(let i = num - 1; i >= 0; i--) { //loop syntax for reversing the orderw
    push()
    let t = 0;

    if (i > lerpStart) {
      t = (i - lerpStart) / (num - 1 - lerpStart);
    }

    stroke(lerpColor(fromdarkyel, tolightyel, t));
    strokeWeight(circleWeightSlider.value())
    
    if (showFill.checked()) {
      if (i === 1) {
      fill(255, 84, 0)
      } else {
        fill(lerpColor(fromdarkyel, tolightyel, t))
      }
    } else {
      noFill()
    }

    if (i === 1) {
      stroke(255, 84, 0)
    }
    circle(0,0, (i+1) * gap )

    pop()

    centerCircleSize = 1 * gap
    fill('#FFB700')
    noStroke()
    circle(0,0, centerCircleSize)
  }
}

////////////////
////////////////
// FROM NOV 2
/////////////////

let skyColor, cloudColor

function setup() {
  createCanvas(400, 400);
  // noLoop()
  skyColor = color('#5c0201')     // blue sky
  cloudColor = color('#ff2359')   // white cloud
}

function draw() {
  background(220);
  noStroke()
  for (let i = 0; i < width; i += 10) {
    for (let j = 0; j < height; j += 10) {
      let n = noise((i + 1000) * -0.03, j * 0.03, frameCount * 0.04) // remove frameCount to remove animation
      // noise is mostly between 0.3 and 0.7, so stretch it to 0 to 1
      let amt = map(n, 0.2, 0.7, 0, 1, true)
      // amt 0 = all sky, amt 1 = all cloud, 0.5 = halfway between
      fill(lerpColor(skyColor, cloudColor, amt))
      square(i, j, 10)
    }
  }
}

//////////////////////
////// gen art
//////////////////////

let particles = []
let num = 100
let scaleValue = 0.04   // how zoomed in the noise is
let speed = 0.3

let paper = '#ffffff30'
let colors = ['#4a38f6', '#e10058', '#fc6400', '#ffc000']

function setup() {
  createCanvas(600, 600)
  background(255, 0, 255, 0)
  stroke(paper)
  for (let i = 0; i < num; i++) {
    particles.push(makeParticle())
  }
}

function makeParticle() {
  let size = 0.5 + pow(random(2), 4) * 40
  let life = random(200, 300)
  return {
    x: random(width),
    y: random(height),
    size: size,
    life: life,
    maxLife: life,
    steps: 0,
    c: random(colors)
  }
}

function draw() {

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]

    // noise (0 to 1) becomes an angle (0 to two full turns)
    let n = noise(p.x * scaleValue, p.y * scaleValue)
    let angle = n * TWO_PI * 70
    p.x += cos(angle) * speed
    p.y += sin(angle) * speed
    p.life -= 1
    p.steps += 1

    // 0 at birth, 1 in the middle of its life, 0 at death
    let age = 1 - p.life / p.maxLife
    let d = p.size * sin(age * PI)
    let c = color(p.c)
      c.setAlpha(50)
    fill(c) 
    circle(p.x, p.y, d)

    // die when old or off the canvas, then start again
    let offCanvas = p.x < 0 || p.x > width || p.y < 0 || p.y > height
    if (p.life <= 0 || offCanvas) {
      particles[i] = makeParticle()
    }
  }
}

// click: a new noise landscape on a clean sheet
function mousePressed() {
  noiseSeed(random(10000))
  background(paper)
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('my-flow-field', 'png')
  }
}

////////////
//// dont like as much
/////////////////////
let particles = []
let num = 100
let scaleValue = 0.004   // how zoomed in the noise is
let speed = 2

let paper = '#ffffff30'
let colors = ['#4a38f6', '#e10058', '#fc6400', '#ffc000']

function setup() {
  createCanvas(600, 600)
  background(255, 0, 255, 0)
  stroke(paper)
  for (let i = 0; i < num; i++) {
    particles.push(makeParticle())
  }
}

function makeParticle() {
  let size = 0.5 + (random(2), 4) * 20
  let life = random(100, 100)
  return {
    x: random(width),
    y: random(height),
    size: size,
    life: life,
    maxLife: life,
    steps: 0,
    c: random(colors)
  }
}

function draw() {

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]

    // noise (0 to 1) becomes an angle (0 to two full turns)
    let n = noise(p.x * scaleValue, p.y * scaleValue, frameCount * .006)
    let angle = n * TWO_PI * 2
    p.x += cos(angle) * speed
    p.y += sin(angle) * speed
    p.life -= 1
    p.steps += 1

    // 0 at birth, 1 in the middle of its life, 0 at death
    let age = 1 - p.life / p.maxLife
    let d = p.size * sin(age * PI)
    let c = color(p.c)
      c.setAlpha(50)
    let scaleV = map(sin(frameCount*0.01+i), 1, 1, 1, 10)
    fill(c) 
    push()
    translate(p.x, p.y)
    scale(scaleV)
    circle(0,0,80)
    // circle(p.x, p.y, d)
    pop()

    // die when old or off the canvas, then start again
    let offCanvas = p.x < 0 || p.x > width || p.y < 0 || p.y > height
    if (p.life <= 0 || offCanvas) {
      particles[i] = makeParticle()
    }
  }
}

// click: a new noise landscape on a clean sheet
function mousePressed() {
  noiseSeed(random(10000))
  background(paper)
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('my-flow-field', 'png')
  }
}


////////////////////
//newest version
/////////////////////////////

let particles = []
let num = 100
let scaleValue = 0.004   // how zoomed in the noise is
let speed = 0.1

let colors = ['#4a38f6', '#e10058', '#fc6400', '#ffc000']

function setup() {
  createCanvas(600, 600)
  background(0, 0, 0)
  stroke(0,0,0)
  for (let i = 0; i < num; i++) {
    particles.push(makeParticle())
  }
}

function makeParticle() {
  let size = 0.5 + pow(random(2), 4) * 40
  let life = random(200, 300)
  return {
    x: random(width),
    y: random(height),
    size: size,
    life: life,
    maxLife: life,
    steps: 0,
    c: random(colors)
  }
}

function draw() {

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]

    // noise (0 to 1) becomes an angle (0 to two full turns)
    let n = noise(p.x * scaleValue, p.y * scaleValue)
    let angle = n * TWO_PI * 70
    p.x += cos(angle) * speed
    p.y += sin(angle) * speed
    p.life -= 1
    p.steps += 1

    // 0 at birth, 1 in the middle of its life, 0 at death
    let age = 1 - p.life / p.maxLife
    let d = p.size * sin(age * PI)
    let c = color(p.c)
      c.setAlpha(50)
    fill(c) 
    circle(p.x, p.y, d)

    // die when old or off the canvas, then start again
    let offCanvas = p.x < 0 || p.x > width || p.y < 0 || p.y > height
    if (p.life <= 0 || offCanvas) {
      particles[i] = makeParticle()
    }
  }
}

// click: a new noise landscape on a clean sheet
function mousePressed() {
  particles.push(makeParticle(mouseX, mouseY))
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('fizzy', 'png')
  }
}