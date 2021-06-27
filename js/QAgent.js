class QAgent {

  constructor() {
    // Initialise parameters
    this.gamma = 0.5; // Discount factor
    this.alpha = 0.75; // Learning rate
    this.done = false;
    this.nobs = [];
    this.obs = env.reset();
    this.rew = 0;
    this.act = 0;
    this.obs_idx = 0
    this.nobs_idx = 0;
    this.Q_table = create_grid_Q(size * size, 5);
    this.info = []
  }

  train() {

    //     if (this.done) {
    //       var newObs = env.reset();
    //       arrayCopy(newObs, this.obs, 2);
    //       this.done = false;
    //     }

    //Epsilon greedy
    var p = random(0, 1);

    if (p < 0.8) {
      this.act = int(random(0, 5));
    } else {
      this.obs_idx = state_to_idx(this.obs);
      this.act = this.Q_table[this.obs_idx].indexOf(max(this.Q_table[this.obs_idx]))
    }

    this.act = int(random(0, 5));
    this.info = env.step(this.act);
    this.nobs = this.info[0];
    this.rew = this.info[1];
    this.done = this.info[2];


    this.obs_idx = state_to_idx(this.obs);
    this.nobs_idx = state_to_idx(this.nobs);

    var TD = (this.rew + this.gamma * max(this.Q_table[this.nobs_idx]) * (1 - this.done)) - this.Q_table[this.obs_idx][this.act];
    this.Q_table[this.obs_idx][this.act] = this.Q_table[this.obs_idx][this.act] + this.alpha * TD;

    arrayCopy(this.nobs, this.obs, 2);
    //this.obs = this.nobs

    for (var i = 0; i < size * size; i++) {
      var val = max(this.Q_table[i]);
      var state = idx_to_state(i);
      Q_grid[state[0]][state[1]] = val; //int(map(val, 0 , 5, 0, 255));
      Q_array.push(val);
    }
  }

  test() {
    if (this.rew > 0) {
      var newObs = env.reset();
      arrayCopy(newObs, this.obs, 2);
      this.done = false;
    }
    this.obs_idx = state_to_idx(this.obs);
    var act = this.Q_table[this.obs_idx].indexOf(max(this.Q_table[this.obs_idx]));
    this.info = env.step(act);
    this.nobs = this.info[0];
    this.rew = this.info[1];
    this.done = this.info[2];
    arrayCopy(this.nobs, this.obs, 2);
  }
}