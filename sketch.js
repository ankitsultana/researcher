
let particle = [];
let num_p = 40;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-2');
  for(let x=0; x<num_p; x++){
      particle.push(new Particles(random(0,width), random(0,height)));  
  }
}

function draw() {
  background(255);
  for (p of particle) {
    // let rep_vel = dist(mouseX, mouseY, p.loc.x, p.loc.y);
    // if (rep_vel < range) {
    //   let rep = map(rep_vel, 0, range, -1, 0);
    // }
    
    p.update();
    for (q of particle) {
      let d = p.loc.dist(q.loc);
      if (d < 150) {
        let a = map(d, 0, 150, 100, 0);
        stroke(0, 0, 0, a);
        line(p.loc.x, p.loc.y, q.loc.x, q.loc.y);
      }
      p.show();
    }
  }
}

function mousePressed() {
  particle.push(new Particles(mouseX, mouseY));
}
