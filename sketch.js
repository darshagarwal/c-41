const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop, maxDrops=100;

var engine,world;

var umbrella;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(400,550);
   engine = Engine.create();
   world = engine.world;

   drop=[];

  for(var i=0; i<maxDrops;i++){
    drop.push(new Drop(random(0,400),random(0,400)));
  }

   umbrella=new Umbrella();


    
}

function draw(){
    background("black")
   // drops.display();

    umbrella.display();

}   

