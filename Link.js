class rope {
    constructor(Body1, Body2, offsetX) {
        this.offsetX=offsetX;
        
        var options= {
            bodyA:Body1,
            bodyB:Body2,
            pointB:{x:this.offsetX, y:0},
            
          }
        
          this.chain= Constraint.create(options);
          World.add(world, this.chain);
    }




    display() {
        
        push();
        strokeWeight(2)
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x+this.offsetX, this.chain.bodyB.position.y);
        pop();

    }
}