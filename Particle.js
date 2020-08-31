class Particle{
    constructor(x,y){
        var options ={
            restitution:1,
            friction:0.2
        }
        this.bodies = Bodies.circle(x,y,5,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.radius = 5;
        World.add(world,this.bodies);
    }
    display(){
        var pos = this.bodies.position;
        var angle = this.bodies.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }
}