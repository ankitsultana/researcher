class GridWorld {

  constructor(size) {
    this.location = [int(random(0, this.size)), int(random(0, this.size))];
    this.location_prev = [];
    this.size = size
    this.grid_spacing = width/50;
    this.counter = 0;
    this.done = false;
    this.timeout = 15;
    this.world_rewards = create_grid(size, size);
    this.rew_loc = [int(random(0, this.size)), int(random(0, this.size))]
    this.world_rewards[this.rew_loc[0]][this.rew_loc[1]] = 1;
    this.actions = [
      [-1, 0],
      [+1, 0],
      [0, -1],
      [0, +1],
      [0, 0]
    ];
  }

  reset() {
    this.location = [int(random(0, this.size)), int(random(0, this.size))];
    return this.location
  }

  step(action) {
    arrayCopy(this.location, this.location_prev, 2);
    this.location[0] = constrain(this.location[0] + this.actions[action][0], 0, this.size - 1);
    this.location[1] = constrain(this.location[1] + this.actions[action][1], 0, this.size - 1);

    this.counter += 1;
    if (this.counter > this.timeout) {
      this.done = true;
      this.counter = 0;
    } else {
      this.done = false;
    }
    return [this.location, this.world_rewards[this.location[0]][this.location[1]], this.done]
  }

  render() {
    var x = this.location_prev[0] * this.grid_spacing;
    var y = this.location_prev[1] * this.grid_spacing;

    noStroke();
    fill(map(Q_grid[this.location_prev[0]][this.location_prev[1]], min(Q_array), max(Q_array), 0, 255));
    rect(x, y, this.grid_spacing, this.grid_spacing);
    fill(7, 177, 27, 125);
    rect(this.rew_loc[0] * this.grid_spacing, this.rew_loc[1] * this.grid_spacing, this.grid_spacing, this.grid_spacing);
  }

  render_all() {
    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
        var x = i * this.grid_spacing;
        var y = j * this.grid_spacing;
        noStroke();
        fill(map(Q_grid[i][j], min(Q_array), max(Q_array), 0, 255));
        rect(x, y, this.grid_spacing, this.grid_spacing);
      }
    }
    noStroke();
    fill(143, 0, 0, 150);
    rect(this.location[0] * this.grid_spacing, this.location[1] * this.grid_spacing, this.grid_spacing, this.grid_spacing);
    fill(7, 227, 17, 170);
    rect(this.rew_loc[0] * this.grid_spacing, this.rew_loc[1] * this.grid_spacing, this.grid_spacing, this.grid_spacing);
  }
}
