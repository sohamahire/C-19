var trex;
var trexImage;
var ground;
var groundImg
var invground;
var cloudImg;
var ob1;
var ob2;
var ob3;
var ob4;
var ob5;
var ob6;



var cloudGrp;
var obstacleGrp;

var score;

function preload()
{
 trexImage = loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImg = loadImage("ground2.png");
 cloudImg = loadImage("cloud.png"); 
 ob1 = loadImage("obstacle1.png");
 ob2 = loadImage("obstacle2.png");
 ob3 = loadImage("obstacle3.png");
 ob4 = loadImage("obstacle4.png");
 ob5 = loadImage("obstacle5.png");
 ob6 = loadImage("obstacle6.png");
}

function setup() 
{
  createCanvas(600, 200);
  invground = createSprite(300,210,610,10);
  ground = createSprite(300,190,610,10);
  ground.addImage("groundImg",groundImg); 
  trex = createSprite(50,180,10,10);
  trex.addAnimation("trexRunning",trexImage);
  trex.scale = 0.5;
  score = 0;
  cloudGrp  = createGroup();
  obstacleGrp = createGroup();
}

function draw() 
{
  background(0);
  
  score = Math.round(frameCount/4);
  
  if(keyDown("space") && trex.collide (invground))
  {
    trex.velocityY = -10;
  }
  
  if(ground.x<0)
  {
    ground.x = ground.width/2;   
  }
  
  ground.velocityX =  -5;
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(invground);      
  
  cloud();
  obstacles();
  drawSprites();
  text("score:" + score ,10,10);
}

function cloud()
{
  if( frameCount % 100 == 0)
  {
    var clouds = createSprite(600,random(80,120),10,10);
    clouds.addImage(cloudImg);
    clouds.scale = 0.7;
    clouds.velocityX = -5;
    clouds.lifeTime = 150;
    clouds.depth = trex.depth +1;
    cloudGrp.add(clouds);
  }
}

function obstacles()
{
  if(frameCount % 150 == 0)
  {
    var obstacle = createSprite(600,170,10,10); 

    obstacle.velocityX = -5;
    obstacle.lifeTime = 150;
    obstacle.scale = 0.5;
    obstacleGrp.add(obstacle);
    
    switch(Math.round(random(1,6)))
    {
    case 1:
    obstacle.addImage(ob1);
    break;

    case 2:
    obstacle.addImage(ob2);
    break;

    case 3:
    obstacle.addImage(ob3);
    break;

    case 4:
    obstacle.addImage(ob4);
    break;

    case 5:
    obstacle.addImage(ob5);
    break;    

    case 6:
    obstacle.addImage(ob6);
    break;
    default:
    break;

    }

  }
}





































