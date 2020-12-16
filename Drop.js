class Drop{
    constructor(x,y){
        var options = {
            'friction':0.1,
            'isStatic':false,
            'friction':1.0,
        }
        this.x = x;
        this.y = y;
        this.body = Matter.Bodies.circle(10,x,y,options);
        World.add(world,this.body); 
    }

    display(){
        var pos = this.body.position;
        push();
        //noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
        pop();
    }

    update(){
        if(this.body.position.y>height){
            Matter.body.setPosition(this.body,{x:random(0,400),y:random(0,500)});
        }
    }
    
}