const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1;
var score= 0;
var gameSate = "Start"
var divisionarray = [];
var plinkoarray1 = [];
var plinkoarray2 = [];
var plinkoarray3 = [];
var plinkoarray4 = [];
var particlearray = []
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(240,780,480,20);
  for(k = 30 ; k<480 ;k = k+80){
    divisionarray.push(new Division(k,680,20,200))
  }
  for(o = 30 ;o<480; o+=80){
    plinkoarray1.push(new PLinko(o,100))
    plinkoarray2.push(new PLinko(o,200))
    plinkoarray3.push(new PLinko(o,300))
    plinkoarray4.push(new PLinko(o,400))
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  ground1.display(); 
  textSize(25)
  text("Score: "+score,100,50);
  for(i = 0 ; i<divisionarray.length;i++){
  divisionarray[i].display();
  }
  for(j = 0 ; j<plinkoarray1.length;j++){
    plinkoarray1[j].display();
    }
    for(k = 0 ; k<plinkoarray2.length;k++){
      plinkoarray2[k].display();
      }
      for(l = 0 ; l<plinkoarray3.length;l++){
        plinkoarray3[l].display();
        }
        for(m = 0 ; m<plinkoarray4.length;m++){
          plinkoarray4[m].display();
          }
  if (frameCount%30 === 0){
    particlearray.push(new Particle(random(0,480),100));
    score++;
  }
  for(n = 0;n<particlearray.length;n++ ){
    
    particlearray[n].display()
  }
  
}
/*function mousePressed(){
    if (gameSate!= "end"){
      count++;
      particle=new Particle(mouseX,10)
    }
}*/