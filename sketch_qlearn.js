var size = 5;
var env;
var agent;
var counter;
var Q_grid;
var Q_array = [];

function setup() {
  createCanvas( windowWidth/10, windowWidth/10+20);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  reset();
}

function draw() {
  let Progress = map(counter, 0, 3000, 0, env.grid_spacing * size);
  if (counter < 3000) {
    agent.train();
    env.render_all();
    fill(50, 90, 158);
    rect(0, env.grid_spacing * size, Progress, 20)
    stroke(50, 90, 158);
    noFill();
    rect(0, env.grid_spacing * size, env.grid_spacing * size, 20)

  } else {
    env.timeout = 10;
    frameRate(10);
    agent.test();
    env.render_all();
  }
  counter++;
}


//---------------------------------- Helpers -----------------------------------------//

function mousePressed() {
  reset();
}

function reset() {
  env = new GridWorld(size);
  agent = new QAgent();
  Q_grid = create_grid_Q(size, size);
  env.reset();
  env.render_all();
  counter = 0;
}

function state_to_idx(state) {
  var idx = (state[0] * size) + state[1];
  return idx;
}

function idx_to_state(idx) {
  var state = []
  state[0] = int(idx / size);
  state[1] = idx % size;
  return state;
}

function create_grid(width, height) {
  var world = [];
  for (var i = 0; i < width; i++) {
    world[i] = [];
    for (var j = 0; j < height; j++) {
      world[i][j] = 0;
    }
  }
  return world
}

function create_grid_Q(width, height) {
  var world = [];
  for (var i = 0; i < width; i++) {
    world[i] = [];
    for (var j = 0; j < height; j++) {
      world[i][j] = random(0, 1);
    }
  }
  return world
}
