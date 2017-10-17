function setup() {
  createCanvas(400,400);
 
  
}

function draw() {
  noStroke();
  
  
  for (var x = 0; x < width; x += 10) {
    for (var y = 0; y < height; y += 10) {
      
      if (random() < 0.4) {
        fill (255,255,255);
      }
      else {
        fill(0,0,0);
      }

      quad(x,y,x + 10,y,x + 10,y + 10,x,y + 10);
    
      
    }
  }
  

  
}