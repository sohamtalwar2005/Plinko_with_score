class PLinko{
    constructor(x,y){
        var options ={
            restitution:1,
            isStatic:true
        }
        this.bodies = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.bodies);
    }
    
    display(){
        var pos = this.bodies.position;
        var angle = this.bodies.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(255)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop()

    }
}