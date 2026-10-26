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