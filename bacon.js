class Unhygenic {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      var rndm = random(0, 255);
      var rand = random(0, 255);
      var r = random(0, 255);
      rectMode(CENTER);
      fill(rndm, rand, r);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };