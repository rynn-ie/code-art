let theDates
let petalColors = {
  'eating': '#FF0F4F',
  'cooking': '#FF6600',
  'deep convos': '#6596F3',
  'church': '#D3A4EA',
  'gaming': '#EAD094',
  'fam/friend': '#B2DCE2',
  'nature': '#D7EAAC',
  'tv': '#4fecc3',
}
async function setup() {
  let cnv= createCanvas(1200, 550);
  cnv.parent("sketch4")
  theDates = await loadJSON('dates.json');
  console.log(theDates)
}

function draw() {
  background('#f7f6e7');
  for (let i = 0; i < theDates.length; i++) {
      let datedays = theDates[i]
      let x = (i+1) * 90
      let y
      let flowertype
      let location = datedays.location.split(',').map(l => l.trim())
      let others = datedays.others
      let purposes = datedays.purpose.split(',').map(p => p.trim())
      let c = petalColors[theDates.purpose]

    
      if (datedays.time === 2) {
      y = height - height * 0.3 // shortest stalk for short time
    } else if (datedays.time === 3) {
      y = height - height * 0.5 // longer stem for partial day
    } else if (datedays.time === 4) {
      y = height - height * 0.8 // longest stem for all day
    }

   let num = 3
    if (datedays.emotion === 'relaxed') {
      num = 3
    } else if (datedays.emotion === 'pleasant') {
      num = 4
    } else if (datedays.emotion === 'happy') {
      num = 6
    } else if (datedays.emotion === 'excited') {
      num = 7
    } else if (datedays.emotion === 'social') {
      num = 8
    } else if (datedays.emotion === 'very excited') {
      num = 9
    }

    drawFlower(x, y, num, purposes, c, others, location)
  }
}

function drawFlower(x, y, num, purposes, c, others, location){
  // stem
  push()
  translate(x,y)
  strokeWeight(2)
  stroke('#4F7A3A')
  line(0,0,0,height-y)
  pop()

  //colors
  let maxSize = 70
  let n = purposes.length

  push()
  translate(x, y)
  noStroke()
  for (let i = 0; i < n; i++) {
    let size = maxSize * (n - i) / n   // shrinks each step
    fill(petalColors[purposes[i]] || '#f7f6e7')
    circle(0, 0, size)
  }
  pop()

  //petals
  push()
  translate(x, y)
  let slice = TWO_PI / num
  let gap = slice * 0.3 // small gap between petals

  for (let i = 0; i < num; i++) {
    let petal = slice - gap
    push()
    rotate(i * slice)
    translate(5, 0) // dist from center
    noStroke()
    fill('#f7f6e7')
    arc(0,0, 64, 64, -petal/4, petal/3)
    pop()
  }
  
  pop()

  push();
  translate(x, y);
  drawCenter(others);
  pop();

  drawLeaves(x,y,location);
}

function drawLeaves(x, y, location) {
  let leafSize = 20
  let stemLen = height - y

  push()
  translate(x, y)
  for (let i = 0; i < location.length; i++) {
    let loc = location[i]
    let d = stemLen * (i + 1) / 4
    push()
    translate(0, d)
    if (i % 2 === 0) scale(-1, 1)
    if (loc === 'aidan') {
      rotate(radians(-60))
      fill('#00914d75')
      stroke('#00914d')
      strokeWeight(2)
      rect(0, 0, leafSize, leafSize, 0, leafSize / 2, leafSize / 6, leafSize / 2)
    } else if (loc === 'lauren') {
      rotate(radians(-60))
      fill('#00914d50')
      noStroke()
      rect(0, 0, leafSize*2, leafSize, 0, leafSize / 2, leafSize / 6, leafSize / 2)
    } else if (loc === 'trip') {
      rotate(radians(-60))
      fill('#e1ff00')
      stroke('#00914d')
      strokeWeight(2)
      rect(0, 0, leafSize, leafSize, 0, leafSize / 2, leafSize / 6, leafSize / 2)
    } else if (loc === 'out to eat') {
      rotate(radians(-60))
      fill('#a7620075')
      stroke('#956678')
      strokeWeight(2)
      rect(0, 0, leafSize, leafSize, 0, leafSize / 2, leafSize / 2, leafSize / 2)
    } else if (loc === 'shopping') {
      rotate(radians(-60))
      fill('#aecd0050')
      noStroke()
      rect(0, 0, leafSize, leafSize, 0, leafSize / 2, leafSize / 6, leafSize / 2)
    } else if (loc === 'event') {
      rotate(radians(-60))
      fill('#005015')
      stroke('#00bb64')
      strokeWeight(2)
      rect(0, 0, leafSize, leafSize, 0, leafSize / 2, leafSize / 6, leafSize / 2)
    } else {
      rotate(radians(-60))
      fill('#da6a29')
      stroke('#965e35')
      strokeWeight(2)
      rect(0, 0, leafSize, leafSize, 0, leafSize / 2, leafSize / 6, leafSize / 2)
    }
    pop()
  }
  pop()
}

function drawCenter(others) {
  if (others === 'yes') {
    noStroke()
    fill('#000fff50')
    circle(0,0,20)
  } else if (others === 'no') {
    push();
    noFill()
    strokeWeight(4)
    stroke('#870232')
    circle(0,0,20)
    circle(0,0, 10)
    pop();
  } else if (others === 'partial') {
    push()
    rectMode(CENTER)
    rotate(QUARTER_PI)
    stroke('#d6536a')
    fill("#ffa3a3")
    square(0,0,20) // roundedness for the square
    pop()
    push()
    rectMode(CENTER)
    noStroke()
    fill("#ff9fa7")
    square(0,0,20) // roundedness for the square
    pop()
  }
}