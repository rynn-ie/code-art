let cols
let gridSize = 40

function setup() {
  createCanvas(400, 400);
  cols = int(width/gridSize)
  rows = int(height/gridSize)
}

// function draw() {
//   background(220);
//   for (let i=0; i < cols; i++) {
//     for(let j=0; j < rows; j++) {
//       let x = i * gridSize + gridSize/2
//       let y = j * gridSize + 100
//     circle(x, y, gridSize*0.5)
//     }
//   }
// }

function draw() {
  background(220);
  for (let i=0; i < cols; i++) {
    for(let j=0; j < rows; j++) {
      let x = i * gridSize + gridSize/2
      let y = j * gridSize + gridSize/2
    // circle(x, y, gridSize*0.9)

    if (j % 2 === 0) {
    fill('#c10006');
    rectMode(CENTER)
    rect(x,y,gridSize)
    stroke('red')
    }

    if (i % 2 === 0) {
    fill('#f9b8ba');
    rectMode(CENTER)
    rect(x,y,gridSize)
    stroke('red')
    }

    if ((i+j) % 2 === 0) {
    fill('#FF5A5F');
    rectMode(CENTER)
    rect(x,y,gridSize)
    stroke('red')
    }

  let rotateAng = frameCount*0.04
   push()
   translate(x, y)
   rotate(rotateAng)
   fill("red")
   rectMode(CENTER)
   rect(0,0,gridSize*1.2, 1)
      // line(x-gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
      // line(x-gridSize/2, y+gridSize/2, x+gridSize/2, y-gridSize/2)
      
  pop()

  push()
   translate(x, y)
   rotate(rotateAng)
   fill("red")
   rectMode(CENTER)
   rect(0,0,1, gridSize*1.2)
      // line(x-gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
      // line(x-gridSize/2, y+gridSize/2, x+gridSize/2, y-gridSize/2)
      
  pop()
      // star(x, y, gridSize*0.3, gridSize*0.5, 5) // don't do this, use push(), pop(), and translate()
      // noStroke()
      // push()
      // translate(x, y)
      // let upValue = map(sin(frameCount*0.02+i+j), -1, 1, -10, 10)
      // translate(0,upValue) // wave~
        // star face
        // push()
        // rotate((frameCount*0.01+i+j))
        // fill("#F3DFA2")

          // triangle(x-gridSize/2, y-gridSize/2, x-gridSize/2, y+gridSize/2, x+gridSize/2, y+gridSize/2)
      // triangle(x-gridSize/2, y-gridSize/2, x+gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
    }
  }
}



