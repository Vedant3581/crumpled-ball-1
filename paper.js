class Paper extends BaseClass{
    constructor(x, y, width, height) {
      super(x,y,40,40)
      this.image = loadImage("sprites/paper.png");
    }    

    display(){
      super.display();
    }
}