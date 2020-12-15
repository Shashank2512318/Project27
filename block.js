class support {
      constructor(x) {
        
        var box_options= {
            isStatic:true


        }
       

        this.body= Bodies.rectangle(x, 200, 200, 20, box_options)
        World.add(world, this.body)
      }


      display() {

        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 200, 20);

      }
}