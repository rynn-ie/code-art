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