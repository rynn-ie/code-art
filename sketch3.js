let centerCircleSize;

// circles
let circleNumSlider;
let circleGapSlider;
let circleColorPicker;
let circleWeightSlider;
let circleScaler;

function setup() {
  createCanvas(1200, 800);
  noFill()
  strokeWeight(10)

controlsContainer = createDiv();
  controlsContainer.position(10, 110)
  controlsContainer.class("controls");

  createP("circles").parent(controlsContainer)
  createP("add circles").parent(controlsContainer)
  circleNumSlider = createSlider(3,6,4).parent(controlsContainer) // (min, max, default, step)
  createP("circles spacing").parent(controlsContainer)
  circleGapSlider = createSlider(20,100).parent(controlsContainer)
  createP("stroke thickness").parent(controlsContainer)
  circleWeightSlider = createSlider(5, 60, 15).parent(controlsContainer)
  createP("scale").parent(controlsContainer)
  circleScaler = createSlider(1,3,2,0).parent(controlsContainer)
  createP("always show fill").parent(controlsContainer)
  showFill = createCheckbox("", false).parent(controlsContainer)

  let jpgButton = createButton('export jpg').parent(controlsContainer)
  jpgButton.mousePressed(function() {
    saveCanvas('generativelogo', 'jpg');
  })

}

function draw() {
  background('#137ca5');
  translate(width/2, height/2)
  scale(circleScaler.value())
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