var commonColor = color(100, 175, 100);
var specialColor = color(200, 100,100);


function setup() {
  createCanvas(600,600);
  background(175);
}

function draw() {
  noStroke();
  
  
  if(mouseX > 125 && mouseX <175 && mouseY > 400 && mouseY < 450) //if mouse is in red box
  {
    if(mouseIsPressed)
    {
      amy(specialColor); //run amy
    }
    else
    {
      amy(commonColor); //run amy
    }
  }
  
  else if(mouseX > 425 && mouseX < 475 && mouseY > 400 && mouseY < 450) //if mouse is in blue box
  {
    if(mouseIsPressed)
    {
      lucas(specialColor); //run lucas
    }
    else
    {
      lucas(commonColor); //run lucas
    }
  }
  else if(mouseX > 275 && mouseX < 325 && mouseY > 400 && mouseY < 450) //if mouse is in green box
  {
    if(mouseIsPressed) 
    {
      shane(specialColor); //run shane
    }
    else
    {
      shane(commonColor); //run shane
    }
  }
  
  else //when mouse is in normal position
  {
  background(200); //display R,G & B boxes
  fill(255,0,0);
  rect(125, 400, 50,50); 
  fill(0,255,0);
  rect(275, 400, 50,50);
  fill(0,0,255);
  rect(425, 400, 50,50);
  
  }
  
  
  
 
  


  
}

//CODE BY AMY

function amy(use){ //using param breaks system for some reason
  

  
  
  background(175);
  
    // HORNS
  noStroke();
  fill(0, 0, 225);
  triangle(200, 150, 200, 50, 275, 100);
  triangle(325, 100, 400, 50, 400, 150);
  
 // TAIL
  noFill();
  stroke(50);
  //noStroke();
  strokeWeight(4);
  //line(50, 325, 150, 325);
  //line(75, 510, 200, 500);
  bezier(50, 325, 150, 325, 75, 510, 220, 500);
  
  noStroke();
  fill(225, 225, 10);
  quad(20, 325, 40, 315, 50, 325, 40, 335); 
    
 /* FAILED ATTEMPT
  //stripes?
  stroke(255);
  arc(200, 400, 225, 10, PI+QUARTER_PI, CHORD);
  */
  
// BODY
  stroke(0);
  strokeWeight(5);
  fill(10);
  ellipse (300, 400, 225, 275);
  
  fill(100, 50);
  ellipse(300, 425, 180, 200);
  
  fill(255);
  ellipse(250, 400, 40, 40);
  ellipse(350, 400, 40, 40);

  
  // HEAD lightning design
  stroke(225, 225, 0);
  strokeWeight(1);
  line(290, 200, 290, 175);
  line(290, 175, 270, 155);
  line(270, 155, 290, 135);
  line(290, 135, 270, 115);
  line(310, 200, 310, 175);
  line(310, 175, 330, 155);
  line(330, 155, 310, 135);
  line(310, 135, 330, 115);

  // HEAD
  stroke(0);
  fill(0);
  ellipse(300, 200, 250, 225);

// EYES
if(mouseIsPressed) //eye blinks
{
stroke(225, 225, 0);
strokeWeight(2);
noFill();
bezier(210,200, 225, 180, 275, 180,290,200)
bezier(310,200, 325, 180, 375, 180,390,200)
}
else //eye open
{
stroke(225, 225, 0);
strokeWeight(5);
fill (225, 0, 0);
ellipse(250, 200, 50, 50);
ellipse(350, 200, 50, 50);
}

 
// MOUTH
noStroke();
  fill(220);
  ellipse(300, 250, 80, 80);
  
  fill(200, 0, 0, 50);
  rect(280, 230, 40, 20, 7);
  
  //screw whiskers
  point(270, 240);
  point(270, 250);
  point(290, 240);
  point(290, 250);
  
// FEET
fill(240);
ellipse(250, 520, 60, 45);
ellipse(350, 520, 60, 45);




  
  /* FAILED ATTEMPT
  stroke(225);
  strokeWeight(3);
  curve(15, 100, 50, 100, 52, 200, 60, 220);
  // curve(250, 420, 200, 300, 201, 301, 100, 220);
  // curve(10, 40, 250, 350, 200, 400, 250, 450);
  // curve(250, 420, 200, 375, 220, 350, 175, 300); 
  */
  
  
  
  
}

//CODE BY SHANE

function shane(use) //using param breaks system for some reason
{
  background(175);
  stroke(0);
  strokeWeight(1);
  
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  //monster body
  fill(255);
  ellipse(100,70,90,80);
  fill(127,80,20);
  ellipse(100,50,40,20);
  fill(255,0,0);
  rect(100,85,20,20);
  fill(0);
  rect(100,135,50,50);
  fill(0,255,0);
  
  if(mouseIsPressed) //arm waves
  {
    if((int)(random(3)) == 1)
    {
      
    quad(120,135, 120, 155, 200, 55, 190, 45); 
    rect(30,135,90,20);
    
    }
    if((int)(random(3) == 2 || (int)(random(3)) === 0))
    {
      
    rect(30,135,90,20);
    rect(160,135,70,20);
    }
    if((int)(random(3)) == 2)
    {
      rect(30,135,90,20);
      quad(120,135, 120, 155, 190, 245,200, 235);

    }
    
  }
  else
  {
  fill(0,255,0);
  rect(30,135,90,20);
  rect(160,135,70,20);
  }
  
  rectMode(CORNER);
  
  
}

//CODE BY LUCAS

function lucas(use){ //using param breaks system for some reason
  
  //noStroke();
  //fill(100, 100, 175);
  //rect( 75, 75, 175, 175);

  noStroke();
  //fill(random(0,255),random(0,255), random(0,255));
  //ellipse(mouseX, mouseY, mouseX, mouseY);
  
  if(mouseIsPressed) //manic state
  {
    if(millis()/250 % 2 === 0)
    {
      //head
    background(0);
    noStroke();
    fill(125);
    bezier(300,0,320,200, 280,295,600,300);
    noStroke();
    triangle(298,0,600,301,600,0);
    
    //eyes
    fill(0,0,255);
    ellipse(150, 150, 200, 200);
    fill(255,0,0);
    ellipse(450, 150, 200, 200);
    fill(0);
    ellipse(150, 150, 10, 10);
    ellipse(450, 150, 10, 10);
    
    //mouth
    stroke(255);
    fill(255);
    bezier(50, 400, 150, 550, 450, 550, 550, 400);
    fill(0);
    bezier(50, 400, 150, 450, 450, 450, 550, 400);
    noFill();
    stroke(0);
    bezier(50, 400, 150, 500, 450, 500, 550, 400);
    line(500,300,500,600);
    line(450,300,450,600);
    line(400,300,400,600);
    line(350,300,350,600);
    line(300,300,300,600);
    line(250,300,250,600);
    line(200,300,200,600);
    line(150,300,150,600);
    line(100,300,100,600); 
    
    //hair
    fill(255);
    triangle(0,0, 0,200, 100, 0);
    triangle(75,0, 125,150, 150, 0);
    triangle(150,0,175,205,250,0);
    triangle(225,0,280,215,325,0);
    triangle(320,0,375,150,400,0);
    triangle(397,0,425,150,450,0);
    triangle(425,0,500,200,525,0);
    triangle(500,0,600,200,600,0);
    
    //nose
    fill(255);
    triangle(300,250,300,350,350,350);
    //stroke(0);
    fill(0);
    bezier(300,248,307,295,318,302,327,301);
    fill(255);
    bezier(323,301,335,302,340,310,348,350);
    
    
    }
    else
    {
      //head
    background(255);
    noStroke();
    fill(125);
    bezier(300,0,320,200, 280,295,600,300);
    noStroke();
    triangle(298,0,600,301,600,0);
    //eyes
    fill(255,0,0);
    ellipse(150, 150, 200, 200);
    fill(0,0,255);
    ellipse(450, 150, 200, 200);
    fill(255);
    ellipse(150, 150, 10, 10);
    ellipse(450, 150, 10, 10);
    
    //mouth
    stroke(0);
    fill(0);
    bezier(50, 400, 150, 550, 450, 550, 550, 400);
    fill(255);
    bezier(50, 400, 150, 450, 450, 450, 550, 400);
    noFill();
    stroke(255);
    bezier(50, 400, 150, 500, 450, 500, 550, 400);
    
    //teeth
    line(500,300,500,600);
    line(450,300,450,600);
    line(400,300,400,600);
    line(350,300,350,600);
    line(300,300,300,600);
    line(250,300,250,600);
    line(200,300,200,600);
    line(150,300,150,600);
    line(100,300,100,600);
    
    //hair
    fill(0);
    triangle(0,0, 0,200, 100, 0);
    triangle(75,0, 125,150, 150, 0);
    triangle(150,0,175,205,250,0);
    triangle(225,0,280,215,325,0);
    triangle(320,0,375,150,400,0);
    triangle(397,0,425,150,450,0);
    triangle(425,0,500,200,525,0);
    triangle(500,0,600,200,600,0);
    
    //nose
    fill(0);
    triangle(300,250,300,350,350,350);
    //stroke(0);
    fill(255);
    bezier(300,248,307,295,318,302,327,301);
    fill(0);
    bezier(323,301,335,302,340,310,348,350);
    
    
    }
   
    
  }
  else //normal state
  {
    //head
  background(100, 175, 100);
    noStroke();
    fill(255,150,150);
    bezier(300,0,320,200, 280,295,600,300);
    noStroke();
    triangle(298,0,600,301,600,0);
    
    //eyes
  fill(255);
    ellipse(150, 150, 200, 200);
    ellipse(450, 150, 200, 200);
    fill(0);
    ellipse(150, 150, 30, 30);
    ellipse(450, 150, 30, 30);
    stroke(0);
    bezier(50, 400, 150, 550, 450, 550, 550, 400);
    fill(100,175,100);
    bezier(50, 400, 150, 450, 450, 450, 550, 400);

    

    
    //hair
    noStroke();
    fill(175,100,175);
    triangle(0,0, 0,100, 100, 0);
    triangle(75,0, 125,50, 150, 0);
    triangle(150,0,175,105,250,0);
    triangle(225,0,280,115,325,0);
    triangle(320,0,375,50,400,0);
    triangle(397,0,425,50,450,0);
    triangle(425,0,500,100,525,0);
    triangle(500,0,600,100,600,0);
    
    //nose
    fill(66,66,250);
    triangle(300,250,300,350,350,350);
    //stroke(0);
    fill(100, 175, 100);
    bezier(300,248,307,295,318,302,327,301);
    fill(66,66,250);
    bezier(323,301,335,302,340,310,348,350);
    
  }
 

}
  