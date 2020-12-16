class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true,
        }
        this.x = x;
        this.y = y;
        this.image= loadImage("proc41images/walking_1.png");
        World.add(world,this.image); 
    }
    display(){
        image(this.image, 0, 0, this.width, this.height);
    }
}