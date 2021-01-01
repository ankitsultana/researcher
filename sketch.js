var canvas;

function setup() {
  canvas=createCanvas(400, 400);
  canvas.positions(0,0);
  canvas.style('z-index', '-1');
}

function draw() {
  background(220);
  
  let x = random(width);
  
  //let x = map(noise(frameCount*0.01), 0, 1, 0, width);
  
  //let x = map(sin(frameCount*0.01), -1, 1, 0, width);
  
  ellipse(x,200,24,24);
  
}
