const Mecanismo = Matter.Mecanismo;
const Mundo= Matter.Mundo;
const Corpos = Matter.Corpos;

var mecanismo, mundo;
var caixa1;

function setup(){
    var telas = createCanvas(400,400);
    mecanismo = Mecanismo.create();
    mundo = mecanismo.mundo;

    caixa1= new Box(200,300,50,50);
    caixa2 = new Box(240,100,50,100);
    solo = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Mecanismo.update(mecanismo);
    console.log(caixa2.body.position.x);
    console.log(caixa2.body.position.y);
    console.log(caixa2.body.angle);
    caixa1.display();
    caixa2.display();
    solo.display();

}