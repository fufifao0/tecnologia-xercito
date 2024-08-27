function setup() {
  createCanvas(400, 400);
  background("white")
}

function draw() {
  stroke("#3C3939");
  fill("rgb(0,83,255)");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}


