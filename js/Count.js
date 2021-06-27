class Count {
  constructor(s, w) {
    this.s = s
    this.w = w
    this.p = createP('')
  }
  start() {
    if (!this.done) {
      setInterval(() => this.counter(), this.w)
    }
  }
  counter() {
    if (this.s < 100) {
      this.s++
      this.p.html(this.s)
    }
  }
  reset() {
    this.s = 0
  }
}