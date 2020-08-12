const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5, ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    box3 = new Box(700,270,70,70);
    box4 = new Box(900,270,70,70);
    box5 = new Box(800,225,70,70);

    pig1 = new Pig(800,320,50,50);
    pig2 = new Pig(800,270,50,50);

    log1 = new Log(800,280,270,PI/2);
    log2 = new Log(800,235,270,PI/2);
    log3 = new Log(730,150,140,PI/6);
    log4 = new Log(870,150,140,-PI/6);

    bird1 = new Bird(100,100,40,40);


    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}