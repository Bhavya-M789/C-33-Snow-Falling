class Snowflake {
    constructor(x, y,r) {
        var options ={
            restitution:0.5
        }
        this.r=r;
        this.body = Bodies.circle(x, y, this.r, options);       
        this.image = loadImage("Snowflake.png");
        World.add(world, this.body);

    }
    display() {

        var pose = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pose.x, pose.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
    }
}
