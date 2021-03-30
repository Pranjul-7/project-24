class Paper
{
    constructor(x,y)
    {
        var options = 
        {
            restitution : 0.3, density : 1.2 , friction : 0.5 , isStatic: false
        }
        this.body=Bodies.circle(x,y,80,options);
        World.add(world,this.body);
        
        this.radius=80;
    }
    display()
    {
        var pos = this.body.position;
        push ();
        translate (pos.x,pos.y);
        rotate (this.body.angle);
        rectMode(CENTER);   
        fill ("red");
        strokeWeight(3);
        stroke("black");
        ellipse(0,0,this.radius,this.radius)
        pop ();
    }
}