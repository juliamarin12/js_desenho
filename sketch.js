function setup() {
    createCanvas(1024, 768);
    background(color(28,28,28));
  }  
  
  function draw() {
    cor = color(random(0, 225), random(0, 225), random(0, 225))
    fill(cor);
    stroke("white");
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX,mouseY,30,40);
    }
  }