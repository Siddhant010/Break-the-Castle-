const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var jaol1, jaol2, jaol3, jaol4;
var pig1, pig2;
var bird;

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    //box1,box2,pig1,log1
    box1 = new Box(760,755,50,50);
    box2 = new Box(900,755,50, 50);
    jaol1 = new Logz(830, 730, 20, 200, PI/2);
    pig1 = new Unhygenic(830, 765, 40, 40);

    //box3,box4,pig2,log2
    pig2 = new Unhygenic(830, 705, 45, 45);
    box4 = new Box(760,695,50,50);
    box3 = new Box(900,695,50, 50);
    jaol2 = new Logz(830, 660, 20, 200, PI/2);

    //log3,log4,box5

    box5 = new Box(830,625,50, 50);
    jaol3 = new Logz(780, 625, 20, 100, PI/3);
    jaol4 = new Logz(880, 625, 20, 100, -PI/3);

    bird = new AngryBirds(200, 250, 100, 100);

    ground = new Ground(width/2,height-10,width,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    pig1.display();
    jaol1.display();

    box3.display();
    box4.display();
    pig2.display();
    jaol2.display();
    
    box5.display();
    jaol3.display();
    jaol4.display();

    bird.display();

    ground.display();
}