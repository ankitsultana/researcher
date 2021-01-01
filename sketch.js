var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,50);
  canvas.style('z-index', '-2');
}

function draw() {
  background(255);
  
  let x = random(width);
  
  //let x = map(noise(frameCount*0.01), 0, 1, 0, width);
  
  //let x = map(sin(frameCount*0.01), -1, 1, 0, width);
  
  ellipse(x,200,24,24);
  
}
