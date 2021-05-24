var player, form, killers;
var orbs, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10;
var rand
var map;
var score = 0;

function preload(){
  mapIMG = loadImage("map.jpg")
  greenIMG = loadImage("green.png");
  redIMG = loadImage("red.png");
  pinkIMG = loadImage("pink.png");
  blueIMG = loadImage("blue.png");
  whiteIMG = loadImage("white.png");
  yellowIMG = loadImage("yellow.png");
  indigoIMG = loadImage("indigo.png");
  img1 = loadImage("1.png");
  img2 = loadImage("2.png");
  img3 = loadImage("3.png");
  img4 = loadImage("4.png");
  img5 = loadImage("5.png");
  img6 = loadImage("6.png");
  img11 = loadImage("11.png");
  img12 = loadImage("12.png");
  img13 = loadImage("13.png");
  img14 = loadImage("14.png");
  img15 = loadImage("15.png");
  img16 = loadImage("16.png");
  img21 = loadImage("21.png");
  img22 = loadImage("22.png");
  img23 = loadImage("23.png");
  img24 = loadImage("24.png");
  img25 = loadImage("25.png");
  img26 = loadImage("26.png");
  img31 = loadImage("31.png");
  img32 = loadImage("32.png");
  img33 = loadImage("33.png");
  img34 = loadImage("34.png");
  img35 = loadImage("35.png");
  img36 = loadImage("36.png");
  img41 = loadImage("41.png");
  img42 = loadImage("42.png");
  img43 = loadImage("43.png");
  img44 = loadImage("44.png");
  img45 = loadImage("45.png");
  img46 = loadImage("46.png");
  img51 = loadImage("51.png");
  img52 = loadImage("52.png");
  img53 = loadImage("53.png");
  img54 = loadImage("54.png");
  img55 = loadImage("55.png");
  img56 = loadImage("56.png");
  img61 = loadImage("61.png");
  img62 = loadImage("62.png");
  img63 = loadImage("63.png");
  img64 = loadImage("64.png");
  img65 = loadImage("65.png");
  img66 = loadImage("66.png");
  img71 = loadImage("71.png");
  img72 = loadImage("72.png");
  img73= loadImage("73.png");
  img74 = loadImage("74.png");
  img75 = loadImage("75.png");
  img76 = loadImage("76.png");
  img81 = loadImage("81.png");
  img82 = loadImage("82.png");
  img83 = loadImage("83.png");
  img84 = loadImage("84.png");
  img85 = loadImage("85.png");
  img86 = loadImage("86.png");
  img91 = loadImage("91.png");
  img92 = loadImage("92.png");
  img93 = loadImage("93.png");
  img94 = loadImage("94.png");
  img95 = loadImage("95.png");
  img96 = loadImage("96.png");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  gameState = 0;
  playerCount = 0;
  game = new Game();
  game.getState();
  game.start();

  imageMode(CENTER);
  rectMode(CENTER);
  orbs1 = new Group();
  orbs2 = [greenIMG, redIMG, pinkIMG, blueIMG, whiteIMG, yellowIMG, indigoIMG];
  player = createSprite(displayWidth/2, displayHeight/2, 30, 30);
}

function draw() {
  background("brown"); 

if(playerCount === 10){
  game.update(state);
} 
if(gameState===1){
    game.play();
} 
if(gameState===2){
    game.end();
}

if(gameState === 1){
  randOrbs(); 
  camera.x = player.x;
  camera.y = player.y

  if(keyIsDown(UP_ARROW)){
    player.y = player.y-3;
  } else{
    player.y = player.y;
  }

  if(keyIsDown(DOWN_ARROW)){
    player.y = player.y+3;
  } else{
    player.y = player.y;
  }

  if(keyIsDown(LEFT_ARROW)){
    player.x = player.x-3;
  } else{
    player.x = player.x;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.x = player.x+3;
  } else{
    player.x = player.x;
  }

  if(player.isTouching(orbs1)){
    orbs1[0].destroy();
    score = score+1;
    
  }
  drawSprites();
  text("Score: " + score, player.x, player.y);
}
}

function randOrbs(){
  if(frameCount % 10 === 0){
    orbs = createSprite(10, 10, 10 ,10);
    orbs.shapeColor = "lightgreen"
    var rand = Math.round(random(1,7));

    if(rand == 1){
      orbs.addAnimation("redIMG", redIMG)
      orbs.scale = (random(0.2, 0.4))
    } else if(rand == 2){
      orbs.addAnimation("yellowIMG", yellowIMG)
      orbs.scale = (random(0.2, 0.4))
    } else if(rand == 3){
      orbs.addAnimation("greenIMG", greenIMG)
      orbs.scale = (random(0.2, 0.4))
    } else if(rand == 4){
      orbs.addAnimation("blueIMG", blueIMG)
      orbs.scale = (random(0.2, 0.4))
    } else if(rand == 5){
      orbs.addAnimation("indigoIMG", indigoIMG)
      orbs.scale = (random(0.2, 0.4))
    } else if(rand == 6){
      orbs.addAnimation("pinkIMG", pinkIMG)
      orbs.scale = (random(0.2, 0.4))
    } else if(rand == 7){
      orbs.addAnimation("whiteIMG", whiteIMG)
      orbs.scale = (random(0.2, 0.4))
    }
    orbs.x = Math.round(random(displayWidth-displayWidth-400, displayWidth+displayWidth+400));
    orbs.y = Math.round(random(displayHeight-displayHeight-250, displayHeight+displayHeight+250))
    orbs1.add(orbs);
  }
}