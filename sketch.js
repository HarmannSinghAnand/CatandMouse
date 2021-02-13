var background,backgroundImg;

var cat,catImg1,catImg2,catImg3,catImg4;

var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;
function preload() {
    //load the images here
  backgroundImg=loadImage("images/garden.png"); 
  
  catImg1 = loadImage("images/cat1.png");
  catImg2 = loadImage("images/cat2.png");
  catImg3 = loadImage("images/cat3.png");
  catImg4 = loadImage("images/cat4.png");

  mouseImg1 = loadImage("images/mouse1.png");
  mouseImg2 = loadImage("images/mouse2.png");
  mouseImg3 = loadImage("images/mouse3.png");
  mouseImg4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat =createSprite(800,600);
    cat.addImage("catSleeping",catImg1);
    cat.scale=0.2;

    mouse=createSprite(100,600);
    mouse.addImage("mouseStanding",mouseImg1);
    mouse.scale=0.2;
  }

function draw() {

    background(backgroundImg); 
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x < (cat.width - mouse.width)/2)  {
     cat.velocityX=0;
     cat.addAnimation("catLastImage",catImg4);
     cat.x = 300;
     cat.scale=0.2;
     cat.changeAnimation("catLastImage");
     
     mouse.addAnimation("mouseLastImage",mouseImg4);
     mouse.scale=0.2;
     mouse.changeAnimation("mouseLastImage")
  
     } 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
   cat.velocityX=-5;
   cat.addAnimation("catRunning", catImg2,catImg3);
  
   cat.changeAnimation("catRunning");

   mouse.addAnimation("mouseTeasing",mouseImg2,mouseImg3);
   mouse.changeAnimation("mouseTeasing");
   mouse.scale=0.15;
}
text(mouseX +',' + mouseY,10,45);
}
