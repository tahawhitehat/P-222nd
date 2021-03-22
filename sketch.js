const Bodies = Matter.Bodies; 
const World = Matter.World; 
const Engine = Matter.Engine; 


var fairy,fairyImage
var star,starImage, starBody
var background2, bi

var engine, world; 

function preload(){
   //preload the images here
  fairyImage = loadImage("fairy1.png");
  starImage = loadImage("star.png")
  bi = loadImage("starnight.png")
  }

function setup() {
  createCanvas(800, 750);

  engine = Engine.create(); 
  world = engine.world; 


  fairy = createSprite(150,600)
  fairy.addImage("fairyImage",fairyImage)
  fairy.scale = 0.2
  
  star = createSprite(650,30); 
  star.addImage(starImage); 
  star.scale = 0.2;

  var star_options = { 
    restitution: 0.5,
    isStatic: true
  }

  starBody = Bodies.circle(650, 30, 5, star_options); 
  World.add(world,starBody)

}


function draw() {
  background(bi);

  Engine.update(engine)

  star.x = starBody.position.x
  star.y = starBody.position.y

  if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
  }
  

  if (keyIsDown(LEFT_ARROW)){
    fairy.x = fairy.x -10
  }
  if (keyIsDown(RIGHT_ARROW)){
    fairy.x = fairy.x + 10
   }
    if (keyIsDown(DOWN_ARROW)){
      Matter.Body.setStatic(starBody,false);
        }
        
  drawSprites();
}
