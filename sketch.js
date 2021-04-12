var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var star2, star3, star4, star5, star6, star7, star8, star9, star10, star11, star12;

var fairyHand;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");	

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;
	fairy.setCollider("rectangle", 430,90,100,100);
	fairy.debug=false;


	var star_options={
		restitution: 1.5
	}
	star = createSprite(650,20);
	star.addImage(starImg);
	star.scale = 0.1;
	star.velocityY = 4;

	//star2 = createSprite(289,50);
	//star2.addImage(starImg);
	//star2.scale = 0.1;
	//star2.velocityY = 4;

	//star3 = createSprite(289,50);
	//star3.addImage(starImg);
	//star3.scale = 0.1;
	//star3.velocityY = 4;

	//star4 = createSprite(294,50);
	//star4.addImage(starImg);
	//star4.scale = 0.1;
	//star4.velocityY = 4;

	//star5 = createSprite(294,100);
	//star5.addImage(starImg);
	//star5.scale = 0.1;
	//star5.velocityY = 4;

	//star6 = createSprite(382,80);
	//star6.addImage(starImg);
	//star6.scale = 0.1;
	//star6.velocityY = 4;

	//star7 = createSprite(769,30);
	//star7.addImage(starImg);
	//star7.scale = 0.1;
	//star7.velocityY = 4;

	//star8 = createSprite(384,96);
	//star8.addImage(starImg);
	//star8.scale = 0.1;
	//star8.velocityY = 4;


	//star9 = createSprite(706,20);
	//star9.addImage(starImg);
	//star9.scale = 0.1;
	//star9.velocityY = 4;

	//star10 = createSprite(293,30);
	//star10.addImage(starImg);
	//star10.scale = 0.1;
	//star10.velocityY = 4;

	//star11 = createSprite(193,20);
	//star11.addImage(starImg);
	//star11.scale = 0.1;
	//star11.velocityY = 4;

	//star12 = createSprite(740,10);
	//star12.addImage(starImg);
	//star12.scale = 0.1;
	//star12.velocityY = 4;

	fairyHand = createSprite(650,30, 2,2);
	fairyHand.X=fairy.X;
	fairyHand.y=fairy.y;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , star_options);
	World.add(world, starBody);

	star.collide(fairy);
	star2.collide(fairy);
	
	Engine.run(engine);
}

function draw() {
  background(bgImg);

  if(keyDown('Right_Arrow')){
   fairy.velocityX=4;
  }
  if(keyDown('Left_Arrow')){
	fairy.velocityX=-4;
   }


if(fairy.isTouching(star)){
	star.velocityY = 0;
	velocityY = 4;
}

//if(fairy.isTouching(star3)){
//	star3.velocityY = 0;
//}

//if(fairy.isTouching(star4)){
//	star4.velocityY = 0;
//}

//if(fairy.isTouching(star5)){
	//star5.velocityY = 0;
//}

//if(fairy.isTouching(star6)){
//	star6.velocityY = 0;
//}

//if(fairy.isTouching(star7)){
	//star7.velocityY = 0;
//}

//if(fairy.isTouching(star8)){
	//star8.velocityY = 0;
//}

//if(fairy.isTouching(star9)){
//	star9.velocityY = 0;
//}

//if(fairy.isTouching(star10)){
//	star10.velocityY = 0;
//}

//if(fairy.isTouching(star11)){
//	star11.velocityY = 0;
//}

//if(fairy.isTouching(star12)){
//	star12.velocityY = 0;
//}
  // ellipseMode(RADIUS);
   //ellipseMode(star.position.x, star.position.y, 2, 2);

  drawSprites();

}

