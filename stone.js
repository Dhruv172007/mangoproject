class stone{
    constructor(x, y, r) {
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r/2;
        World.add(world, this.body);
    }
    display(){ var pos = this.body.position; 
        push(); translate(pos.x, pos.y);
        strokeWeight(3);
           
            fill('blue')
            ellipse(0,0,this.r,this.r);
            pop(); }
}