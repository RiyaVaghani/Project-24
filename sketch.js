const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,iron,rubber;
var stoneSound,rubberSound,ironSound;

function preload(){
    stoneSound = loadSound("stoneSound.mp3");
    ironSound = loadSound("ironSound.mp3");
    rubberSound = loadSound("rubberSound.mp3");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(600,300,50,50);
    iron = new Iron(300,500,100,70);
    rubber = new Rubber(900,100,30);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    if(hammer.x + stone.x > hammer.width/2 +stone.width/2){
        stoneSound.play();
    }

    if(hammer.x + iron.x > hammer.width/2 +iron.width/2){
        ironSound.play();
    }
    
    if(hammer.x + rubber.x > hammer.width/2 +rubber.width/2){
        rubberSound.play();
    }

    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
}