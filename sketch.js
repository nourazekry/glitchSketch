
let cam;

function setup() {
  cam = createCapture(VIDEO, function(){
    createCanvas(cam.width, cam.height); 
    cam.hide();
  });
}

function draw() {
  background(220);
  image(cam, 0, 0);
  push();
  scale(-1, 1);
  // Copy left half of the camera image
  // To the right half of the canvas
  copy(cam, 0, 0, width/2, height, -width, 0, width/2, height);
  // rect(-width, 0, width/2, height);
  // ellipse(-width, 0, 50, 50);
  tint(255, 128*sin(frameCount*0.01) + 127)  
  image(cam, -width, 0);
  pop();
}