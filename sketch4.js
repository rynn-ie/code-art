let myData
let teaColors = {
  'green milk tea': '#A9C98F',
  'oolong milk tea': '#E8B96A',
  'milk tea': '#D9A58A',
  black: '#B5563A',
  green: '#5E9E4B',
  oolong: '#D99A2B'
}
async function setup() {
  let cnv = createCanvas(850, 550);
  cnv.parent('sketch4');
  myData = await loadJSON('dates.json');
  console.log(myData)
}

function draw() {
  background(220);
  for (let i = 0; i < myData.length; i++) {
    let drink = myData[i]
    let x = (i+1) * 100
    let y
    let num = map(drink.sugar_level, 0, 100, 3, 7)
    let c = teaColors[drink.tea]
    if (drink.size === "m") {
      y = height - height * 0.5 // shorter stem for size M
    } else if (drink.size === 'l') {
      y = height - height * 0.8 // longer stem for size L
    }
    if (drink.base === 'milk') {
      // flower
      
      drawFlower(x, y, num, c, drink.topping)
    } else {
      // leaves
      drawLeaves(x, y, num, c, drink.topping)
    }
  }

  let teas = Object.keys(teaColors)
  
  for (let i = 0; i < teas.length; i++) {
    push()
    textAlign(LEFT, CENTER)
    rectMode(CENTER)
    fill(teaColors[teas[i]])
    square(20, (i+1) * 20, 16)
    fill(40)
    text(teas[i], 40, (i+1) * 20)
    pop()
  }
}

function drawFlower(x, y, num, c, topping){
  // stem
  push()
  translate(x,y)
  strokeWeight(2)
  stroke('#4F7A3A')
  line(0,0,0,height-y)
  pop()
  
  // petals
  push()
  translate(x, y)
  let slice = TWO_PI / num
  let gap = slice * 0.3 // small gap between petals
  
  for (let i = 0; i < num; i++) {
    let petal = slice - gap
    push()
    rotate(i * slice)
    translate(5, 0) // dist from center
    fill(c)
    arc(0,0, 64, 64, -petal/2, petal/2)
    pop()
  }
  pop()

  // center topping
  push()
  translate(x,y)
  drawTopping(topping)
  pop()
}

function drawLeaves(x, y, num, c, topping){
  let stemLen = height-y
  let waviness = 10     // how far the stem swings left and right
  let waveFreq = 0.05   // how many waves
  // stem
  push()
  translate(x, y)
  noFill()          // without this, the wavy line gets filled in like a shape
  stroke('#4F7A3A')
  strokeWeight(4)
  beginShape()
  for (let i = 0; i <= stemLen; i += 5) {
    let wave = sin(i * waveFreq) * waviness
    vertex(wave, i)
  }
  endShape()
  pop()
  
  // leaves
  let leafSize = 20
  push()
  translate(x, y)
  for (let i = 0; i < num; i++) {
    let d = stemLen * (i + 1) / (num + 1)   // how far down the stem
    let wave = sin(d * waveFreq) * waviness  // where the stem is at that height
    push()
    translate(wave, d)
    if (i%2===0) scale(-1,1)
    translate(8, 0)    // dist from stem
    rotate(radians(-60))
    fill(c)
    rect(0, 0, leafSize, leafSize, 0, leafSize / 2, leafSize / 2, leafSize / 2)
    // circle(0,0,20)
    pop()
    
    
  }
  pop()

  // center topping
  push()
  translate(x,y)
  drawTopping(topping)
  pop()
}

function drawTopping(topping) {
  if (topping === 'boba') {
    fill("#4F7A3A")
    circle(0,0,20)
  } else if (topping === 'pudding') {
    stroke("#4F7A3A")
    strokeWeight(4)
    fill("LightYellow")
    circle(0,0,20)
  } else if (topping === "grass jelly") {
    rectMode(CENTER)
    rotate(QUARTER_PI)
    fill("#613A3A")
    square(0,0,20, 4) // roundedness for the square
  }
}

