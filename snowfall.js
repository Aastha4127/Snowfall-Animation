class Snowfall{
    constructor(x,y,width,height){
        var options = {
            isStatic : false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image1 = loadImage("snow4.webp");
        this.image2 = loadImage("snow5.webp");
        this.width = width;
        this.height = height;
        this.rand = Math.round(random(1,2));
        this.Visiblity = 255;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        
        if(this.body.position.y>350){
            this.Visiblity = 0;
            tint(255,this.Visiblity);

        }
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        if(this.rand === 1){
            imageMode(CENTER);
            image(this.image1, 0, 0, this.width, this.height);
        }
        if(this.rand === 2){
            imageMode(CENTER);
            image(this.image2, 0, 0, this.width, this.height);
        }
        pop();
    }

}