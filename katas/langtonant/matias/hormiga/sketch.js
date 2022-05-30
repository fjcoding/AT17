let ant;
let grid;
let slider;
let sliderValue;
let button;
let started = false;

function setup() {
  createCanvas(960, 540);
  slider = select('#slider');
  sliderValue = select('#sliderValue');
  button = select('#button');
  button.mousePressed(() => {
    if (started) {
      started = false;
      button.html('continue');
    } else {
      started = true;
      button.html('pause');
    }
  });

  grid = [];
  for (let i = 0; i < width; i++) {
    grid.push([]);
    for (let j = 0; j < height; j++) {
      grid[i].push(0);
    }
  }

  ant = new Ant(floor(width / 2), floor(height / 2));

  background(255);
}

function draw() {
  sliderValue.html(slider.value());

  loadPixels();

  if (started) {
    for (let n = 0; n < slider.value(); n++) {

      const x = ant.position.x;
      const y = ant.position.y;

      if (y < 0 || x > width - 1 || y > height - 1 || x < 0) {
        ant.reset();
        grid = [];
        for (let i = 0; i < width; i++) {
          grid.push([]);
          for (let j = 0; j < height; j++) {
            grid[i].push(0);
          }
        }
        background(255);
      }

      const index = (x + y * width) * 4;

      if (grid[x][y] > 0) {
        pixels[index + 0] = 0;
        pixels[index + 1] = 0;
        pixels[index + 2] = 0;
        pixels[index + 3] = 255;
      } else {
        pixels[index + 0] = 255;
        pixels[index + 1] = 255;
        pixels[index + 2] = 255;
        pixels[index + 3] = 255;
      }

      if (grid[x][y] > 0) {
        ant.turnLeft();
      } else {
        ant.turnRight();
      }

      grid[x][y] = grid[x][y] > 0 ? 0 : 1;
      ant.moveForward();
    }
  }

  updatePixels();
}