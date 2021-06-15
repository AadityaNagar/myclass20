var cat,catStill,catMoving,catStops
var mouse,catStill,mouseMoving,mouseStops
var wallpaper, wallpaperImage




function preload() {
    //load the images here
  catStill=loadAnimation("images/cat1.png")
  mouseStill=loadAnimation("images/mouse1.png")  
  wallpaperImage=loadImage("images/garden.png")
  catMoving=loadAnimation("images/cat2.png","images/cat3.png")
  mouseMoving=loadAnimation("images/mouse2","images/mouse3.png")
  catStops=loadAnimation("cat4.png")
  mouseStops=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(50,30,800,70)
    cat.addAnimation("catnothing",catStill)
    mouse=createSprite(30,10,80,70)
    mouse.addAnimation("mousenothing",mouseStill)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.addAnimation("happyCat",catStops)
    cat.ChangeAnimation(happyCat)

    mouse.addAnimation("happyMouse",mouseStops)
    mouse.ChangeAnimation(happyMouse)
    }
    drawSprites();
}


function keyPressed(){
 
  //For moving and changing animation write code here

   if(keyCode === RIGHT_ARROW){
       mouse.addAnimation("comingMouse",mouseMoving)
       mouse.ChangeAnimation("comingMouse")
   }
   if(keyCode === LEFT_ARROW){
    cat.addAnimation("comingCat",catMoving)
    cat.ChangeAnimation("comingCat")
   }
}
