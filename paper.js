class Paper {
  constructor(x, y, r) {
    var options = {
      restitution: 0.8,
      density: 1.2,
      friction: 1,
    };
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
    this.r =r;
    this.image = loadImage("paper.png");
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,2*this.r, 2*this.r);
    pop();
  }
}
