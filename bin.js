class Bin {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.width = 200;
    this.height = 213;
    this.thickness = 20;
    this.leftWall = Bodies.rectangle(
      x - this.width / 2 + this.thickness / 2,
      y - this.height / 2 + this.thickness / 2,
      this.thickness,
      this.height,
      options
    );
    this.rightWall = Bodies.rectangle(
      x + this.width / 2 - this.thickness / 2,
      y - this.height / 2 + this.thickness / 2,
      this.thickness,
      this.height,
      options
    );
    this.bottomWall = Bodies.rectangle(
      x,
      y,
      this.width,
      this.thickness,
      options
    );
    World.add(world, [this.leftWall, this.rightWall, this.bottomWall]);

    this.image = loadImage("dustbingreen.png");
  }
  display() {
    var pos = this.bottomWall.position;
    imageMode(CENTER);
    image(
      this.image,
      pos.x,
      pos.y - this.height / 2 + this.thickness / 2,
      this.width,
      this.height
    );
    // rectMode(CENTER);
    // rect(
    //   this.leftWall.position.x,
    //   this.rightWall.position.y,
    //   this.thickness,
    //   this.height
    // );
    // rect(
    //   this.rightWall.position.x,
    //   this.rightWall.position.y,
    //   this.thickness,
    //   this.height
    // );
    // rect(
    //   this.bottomWall.position.x,
    //   this.bottomWall.position.y,
    //   this.width,
    //   this.thickness
    // );
  }
}
