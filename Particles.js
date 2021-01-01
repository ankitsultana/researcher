class Particles {

  constructor(x,y){
    this.loc = createVector(x,y);
    this.vel = createVector(random(-0.2,0.2), random(-0.2,0.2));
    this.offsetX = random(0,500);
    this.offsetY = random(0,500);
  }
  
  show(){
    fill(255);
    circle(this.loc.x, this.loc.y, 10);
  }
  
  update(){
    
    //check that it is in bounds
    if (this.loc.x < 0 || this.loc.x > width) {
      this.vel.x = -this.vel.x;
    }
    //check that it is in bounds
    if (this.loc.y < 0 || this.loc.y > height) {
      this.vel.y = -this.vel.y;
    }
    this.loc.add(this.vel);
  }
}

