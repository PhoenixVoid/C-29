class Package{

    constructor(x, y)
    {
        var options = {

            restitution:0.3,
            density:1,
            fricion:1.2,
            isStatic:true
        }
            this.body = Bodies.rectangle(x, y, 10, 10, options);
            this.x = x;
            this.y = y;
            this.width = 10;
            this.height = 10;
            this.image = loadImage("package.png");
            World.add(world, this.body);
    }   
    display() {

        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, 10, 10);
        pop()    
    
    }
}