class Line {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
  getSlope() {
    let slope = (this.p2.y - this.p1.y) / (this.p2.x - this.p1.x);
    return slope;
  }
  toString() {
    return `[${this.p1} , ${this.p2}] , slope = ${this.getSlope()}`;
  }

  static isParallelled(line1, line2) {
    return (line1.getSlope == line2.getSlope);
  }
}
