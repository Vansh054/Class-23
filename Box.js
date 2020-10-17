class Box 
{
    constructor(x,y,w,h){
      
      var bounce_options = {
          restitution: 0.8,
          friction: 1.0
      }
      this.body = Bodies.rectangle(x,y,w,h,bounce_options);
      this.width = w;
      this.height = h;
      World.add(world, this.body);  
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}