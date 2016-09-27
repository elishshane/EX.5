function setup() 
{
  createCanvas(1200,1200);
  background(100);
}

function draw() 
{
  background(100);
  samir(0,0,false);
  samir(600,200,true);
  samir(1200,0,false);
  shane(100,100,false);
  shane(800,200,true);
  shane(300,400,false);
  lucas(300,200);

  
}


//CODE BY SAMIR

function samir(x,y, tf)
{
  x = x+50;
  
  if(tf)
  {
    // general
  ellipseMode(CENTER);
  rectMode(CENTER);
  noStroke();
  
  // body
  fill(232, 100, 23);
  ellipse(x, y+ 250, 150,150);
  
  // head
  if(mouseIsPressed)
  {
    fill(random(255),random(255),random(255));
  }
  else
  {
  fill(255, 0, 0);
  }
  rect(x, 130 + y, 50, 90);
  
  // eye
  fill(255);
  ellipse(x, 110 + y, 25, 20);
  fill(0);
  ellipse(x, 110 + y, 10, 8.5);
  
  // nose
  stroke(0, 2550, 200);
  line(x, 130 + y, 5 + x, 125 + y);
  
  // mouth
  strokeWeight(3);
  stroke(255, 155, 155);
  noFill();
  bezier(x - 10, 140 + y, x-5, 130 + y,x+5, 130+ y,x+10,140+y);
  
  // arms
  strokeWeight(3);
  stroke(23, 155, 255);
  line(x - 100, y+200, x+120, 280 + y);
  line(100 + x, y+200, x-120, 280+ y);
  strokeWeight(1);
  }
  else
  {
  // general
  ellipseMode(CENTER);
  rectMode(CENTER);
  noStroke();
  
  // body
  fill(232, 100, 23);
  ellipse(x, y+ 250, 300,300);
  
  // head
  fill(23, 155, 255);
  rect(x, 110 + y, 50, 90);
  
  // eye
  fill(255);
  ellipse(x, 90 + y, 25, 20);
  fill(0);
  ellipse(x, 90 + y, 10, 8.5);
  
  // nose
  stroke(0, 2550, 200);
  line(x, 110 + y, 5 + x, 125 + y);
  
  // mouth
  noStroke();
  fill(127, 0, 0);
  ellipse(x, 140 + y, 20, 12);
  
  // arms
  strokeWeight(3);
  stroke(23, 155, 255);
  line(x - 100, y+200, x-220, 180 + y);
  line(100 + x, y+200, 220+x, 180+ y);
  strokeWeight(1);
  }
}

//CODE BY SHANE

function shane(x,y,tf) //using param breaks system for some reason
{

  stroke(0);
  strokeWeight(1);
  
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  //monster body
  fill(255);
  ellipse(100 + x,70 + y,90,80);
  fill(127,80,20);
  ellipse(100 + x,50 + y,40,20);
  fill(255,0,0);
  rect(100 + x,85 + y,20,20);
  fill(0);
  rect(100 + x,135 + y,50,50);
  fill(0,255,0);
  
  if(tf && mouseIsPressed) //arm waves
  {
    if((int)(random(3)) == 1)
    {
      
    quad(120 + x,135 + y, 120 + x, 155 + y, 200 + x, 55 + y, 190 + x, 45 + y); 
    rect(30 + x,130 + y,90,20);
    
    }
    if((int)(random(3) == 2 || (int)(random(3)) === 0))
    {
      
    rect(30 + x,135 + y,90,20);
    rect(160+x,135+y,70,20);
    }
    if((int)(random(3)) == 2)
    {
      rect(30 + x,135 + y,90,20);
      quad(120+x,135+y, 120+x, 155+y, 190+x, 245+y,200+x, 235+y);

    }
    
  }
  else
  {
  fill(0,255,0);
  rect(30+x,135+y,90,20);
  rect(160+x,135+y,70,20);
  }
  
  rectMode(CORNER);
  
  
}

//CODE BY LUCAS

function lucas(x,y,tf){ //using param breaks system for some reason
  
  rectMode(CORNER);
  ellipseMode(CORNER);
  fill(100, 175, 100);
  rect(x,y,200,200);
  fill(255);
  ellipse(x+50,y+50,30,30);
  ellipse(x+125,y+50,30,30);
  fill(0);
  ellipseMode(CENTER);
  ellipse(x+66,y+66,3,3);
  ellipse(x+133,y+66,3,3);
  fill(175,100,175);
  rect(x,y,200,20);
  
 

}