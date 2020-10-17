## Background Image

This example presents the fastest way to load a background image. To load an image as the background, it must be the same width and height as the program.
*To run this example locally, you will need an image file, and a running local server.*

> PREVIEW HERE

```
let bg;
let y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('assets/moonwalk.jpg');
  createCanvas(720, 400);
}

function draw() {
  background(bg);

  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }
}
```