class balls {
    constructor(x) {
        
        var options= {
            isStatic:false, 
            restitution:1,
            density:1.2


        }
     

      this.body= Bodies.circle(x, 300, 15, options)
      World.add(world, this.body)
    }

    


    display() {

      fill("pink");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, 15);


    }
}