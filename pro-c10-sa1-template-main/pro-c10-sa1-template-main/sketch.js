var player_walking_right
var player_walking_left
var prison_background
var player
var player2
var scene
var zombieIMG, zombie
var shooterIMG, shooter
function preload(){
player_walking_right = loadAnimation("walking1.png","walking2.png","walking3.png","walking4.png")
player_walking_left = loadAnimation("walking5.png","walking6.png","walking7.png","walking8.png")
prison_background = loadImage("pri.jpg")
zombieIMG = loadAnimation("zombie1.png", "zombie2.png", "zombie3.png")
shooterIMG = loadAnimation("shooter_1.png", "shooter_2.png","shooter_1.png", "shooter_2.png","shooter_1.png", "shooter_2.png","shooter_1.png", "shooter_2.png","shooter_1.png", "shooter_2.png", "shooter_3.png")
}
function setup()  
{
  createCanvas(1128,634)
  scene = createSprite(600,300,1128,634);
  scene.addImage(prison_background);
  scene.scale = 2
  player = createSprite(1000,550)
  player.scale = 3
  player.addAnimation("leftWalking", player_walking_left)
  player2 = createSprite(100,550)
  player2.scale = 3
  player2.addAnimation("rightWalking", player_walking_right)
  prison_background
  zombie = createSprite(500, 550, 50, 50)
  zombie.scale = 1
  zombie.addAnimation("zombie_walk", zombieIMG)
  shooter = createSprite(300, 550)
  shooter.addAnimation("shooter_walk", shooterIMG)
  shooter.scale = 0.2
}

function draw() 
{
  if(KeyDown("space")){
    player.velocityX = -3
  }
drawSprites()
}