## Pointillism

By Dan Shiffman. Mouse horizontal location controls size of dots. Creates a simple pointillist effect using ellipses colored according to pixels in an image.
*By Dan Shiffman. Mouse horizontal location controls size of dots. Creates a simple pointillist effect using ellipses colored according to pixels in an image.*

> PREVIEW HERE

```
let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('assets/moonwalk.jpg');
}

function setup() {
  createCanvas(720, 400);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
```