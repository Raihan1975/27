class cradles extends BaseClass {
    constructor(x,y,height,wideth){
    super(x,y,20,height,angle);
    Matter.Body.setAngle(this.body, angle);
    }
}