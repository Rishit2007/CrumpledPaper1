class Paper {
    constructor(x, y, w, h){
        var options = {
            isStatic : false,
            restituiton : 0.3,
            friction : 0.5,
            density : 1.2,
        }
        this.body = Bodies.ellipse(x, y, w, h, options);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle); 
        ellipseMode(CENTER)
        ellipse(this.body,0, 0, this.width, this.height);
        pop();
      };
};