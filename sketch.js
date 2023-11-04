let shapes = []; //Initialise empty array
let shapesMovingUp = []

function setup() {
  createCanvas(windowWidth, windowHeight); //Creating the canvas to the size of the window
  noStroke();
}

/* 
Functions to create the yellow, blue, red and grey rectangles which are in ratio of the position and 
size relative the canvas size to ensure responsiveness. 
*/
function draw() {
  background(255, 252, 245); //Background colour
  runningSquares();

  //Yellow rectangles in the background
  drawYellowRect(0.1, 0.152, 0.148, 0.272);
  drawYellowRect(0.144, 0.504, 0.06, 0.052);
  drawYellowRect(0.168, 0.756, 0.086, 0.104);
  drawYellowRect(0.284, 0.154, 0.132, 0.136);
  drawYellowRect(0.272, 0.273, 0.108, 0.064);
  drawYellowRect(0.416, 0.304, 0.088, 0.152);
  drawYellowRect(0.292, 0.476, 0.08, 0.096);
  drawYellowRect(0.736, 0.584, 0.16, 0.092);


  //Blue rectangles in the background
  drawBlueRect(0.052, 0.032, 0.052, 0.388);
  drawBlueRect(0.14, 0.1, 0.172, 0.068);
  drawBlueRect(0.152, 0.328, 0.14, 0.048);
  drawBlueRect(0.2, 0.528, 0.148, 0.076);
  drawBlueRect(0.02, 0.6336, 0.128, 0.12);
  drawBlueRect(0.168, 0.728, 0.092, 0.048);
  drawBlueRect(0, 0.852, 0.312, 0.148);
  drawBlueRect(0.492, 0.052, 0.088, 0.152);
  drawBlueRect(0.412, 0.268, 0.268, 0.148);
  drawBlueRect(0.484, 0.576, 0.016, 0.028);

  //Red rectangles in background
  //drawRedRect(0, 0, 0.072, 0.464);
  drawRedRect(0.124, 0.078, 0.208, 0.112);
  //drawRedRect(0.127, 0.304, 0.16, 0.096);
  drawRedRect(0.42,0.872,0.056,0.076);
  drawRedRect(0.768,0.108,0.06,0.048);

  //Grey rectangles in the background
  drawGreyRect(0.282,0.544,0.168,0.04);
  drawGreyRectTwo(0.12,0.622,0.076,0.148);
  drawGreyRectTwo(0.64,0.552,0.076,0.092);
  drawGreyRectTwo(0.8,0.6,0.104,0.052);
  drawGreyRectTwo(0.252,0.832,0.172,0.056);
  drawGreyRectTwo(0.476,0.7,0.024,0.108);
  drawGreyRectTwo(0.616,0.74,0.02,0.072);
  drawGreyRectTwo(0.252,0.832,0.172,0.056);
  drawGreyRectTwo(0.824,0.856,0.172,0.032);

  //Blue rectangles in the foreground
  drawBlueRect(0.408, 0.68, 0.08, 0.072);
  drawBlueRect(0.436, 0.848, 0.036, 0.026);
  drawBlueRect(0.736, 0.084, 0.052, 0.024);
  drawBlueRect(0.68, 0.168, 0.284, 0.092);
  drawBlueRect(0.792, 0.484, 0.64, 0.036);
  drawBlueRect(0.64, 0.568, 0.228, 0.104);
  drawBlueRect(0.708, 0.82, 0.096, 0.08)

 //Red rectangles in the foreground
  drawRedRect(0.388,0.664,0.112,0.104);
  drawRedRect(0.42,0.872,0.056,0.076);
  drawRedRect(0.768,0.108,0.06,0.048);
  drawRedRect(0.388,0.664,0.112,0.104);

 //Yellow rectangles in foreground
  drawYellowRect(0.428, 0.592, 0.016, 0.064);
  drawYellowRect(0.352, 0.696, 0.124, 0.212);
  drawYellowRect(0.484, 0.832, 0.104, 0.048);
  drawYellowRect(0.54, 0.150, 0.388, 0.06);
  drawYellowRect(0.6, 0.256, 0.072, 0.128);
  drawYellowRect(0.768, 0.252, 0.092, 0.176);
  drawYellowRect(0.568, 0.5, 0.152, 0.256);

  //Grey rectangles in the foreground
  drawGreyRect(0.34,0,0.072,0.12);
  drawGreyRect(0.148,0.148,0.036,0.136);
  drawGreyRect(0.56,0.124,0.144,0.032);
  drawGreyRect(0.484,0.18,0.052,0.14);
  drawGreyRect(0.856,0.216,0.008,0.032);
  drawGreyRect(0,0.388,0.088,0.048);
  drawGreyRect(0.624,0.34,0.068,0.064);

  runningSquaresUp();
}

//Defining functions to create the rectangles with responsive size

function drawYellowRect(inputXPos, inputYPos, inputWidth, inputHeight) {
  //Calculating the distance by adjusting the modulus operation and then subtracting inputWidth * width. 
  //This ensures that the rectangles start partially off-canvas to the left to smoothly move in
  let distance = (inputXPos * width + frameCount * 2) % (width + (inputWidth * width)) - inputWidth * width; 
  let outputXPos = constrain(distance, -inputWidth * width, width); // Ensure the rectangles stay within the canvas
  let outputYPos = inputYPos * height;
  fill(250, 201, 1); //Yellow
  rect(outputXPos, outputYPos, inputWidth * width, inputHeight * height);
}

function drawRedRect(inputXPos, inputYPos, inputWidth, inputHeight) {
  //Calculating the distance by adjusting the modulus operation and then subtracting inputWidth * width. 
  //This ensures that the rectangles start partially off-canvas to the left to smoothly move in
  let distance = (inputXPos * width + frameCount) % (width + (inputWidth * width)) - inputWidth * width; 
  let outputXPos = constrain(distance, -inputWidth * width, width); // Ensure the rectangles stay within the canvas
  let outputYPos = inputYPos * height;
  fill(221, 1, 0); //Red
  rect(outputXPos, outputYPos, inputWidth * width, inputHeight * height);
}

//Defining a function to draw the blue rectangles with size relative to the window size
function drawBlueRect(inputXPos, inputYPos, inputWidth, inputHeight) {
  // Using modulo to wrap around and frameCount to change position over time
  let outputXPos = width - (inputXPos * width + frameCount*4) % (width + (inputWidth * width)); 
  let outputYPos = inputYPos * height;
  let startColor = color(34, 80, 149); // Blue
  let endColor = color(0, 0, 0); // Black
  let lerpedColor = lerpColor(startColor, endColor, (1 + sin(frameCount / 100)) / 2); // This gradually changes from blue to black
  fill(lerpedColor);
  rect(outputXPos, outputYPos, inputWidth * width, inputHeight * height);
}

//Defining a function that draws a grey rectangle with size relative to window size
function drawGreyRect(inputXPos, inputYPos, inputWidth, inputHeight) {
  let outputXPos = (inputXPos * sin(frameCount / 100) * width); //Oscillating from left to right
  let outputYPos = inputYPos * height;
  fill(232, 232, 232);
  rect(outputXPos, outputYPos, inputWidth * width, inputHeight * height);
}

function drawGreyRectTwo(inputXPos, inputYPos, inputWidth, inputHeight) {
let outputXPos = width - (inputXPos * sin(frameCount / 150) * width); //Oscillating right to left 
let outputYPos = inputYPos * height;
fill(232, 232, 232);
rect(outputXPos, outputYPos, inputWidth * width, inputHeight * height);
}

//Creating a function to add falling squares. Code adapted from https://editor.p5js.org/annA/sketches/zaqrFwMH5
//However, I added time based events using frameCount
function runningSquares() {
  if (frameCount % 50 === 0) {  // Create a new shape every 50 frames 
    let xpos = random(windowWidth);
    let ypos = 0;
    let fillColour = random([color('#fac901'), color('#000000'), color('#225095'), color('#dd0100')]); //Randomising between selected colours

    shapes.push({ xpos, ypos, fillColour}); // Create a new shape in the array with the determined attributes
  }

  for (let i = 0; i < shapes.length; i++) {
    if (shapes[i]) { // Check if the element exists
      fill(shapes[i].fillColour);
      shapes[i].ypos += 1; // Rectangle moves down 
      let shapeWidth = 0.02 * windowWidth // Always in ratio to the canvas width (responseive design)
      let shapeHeight = 0.03 * windowHeight // Always in ratio to the canvas height (responseive design)
      rect(shapes[i].xpos, shapes[i].ypos, shapeWidth, shapeHeight);
    }
  }
}

function runningSquaresUp() {
  if (frameCount % 50 === 0) {
    // Create a new shape every 50 frames 
    let xpos = random(windowWidth);
    let ypos = height;
    let fillColour = random([color('#fac901'), color('#000000'), color('#225095'), color('#dd0100')]);

    shapesMovingUp.push({ xpos, ypos, fillColour });
  }

  for (let i = 0; i < shapesMovingUp.length; i++) {
    if (shapesMovingUp[i]) { // Check if the element exists
      fill(shapesMovingUp[i].fillColour);
      shapesMovingUp[i].ypos -= 4; // Moves up at a faster speed
      let shapeWidth = 0.02 * windowWidth // Always in ratio to the canvas width (responseive design)
      let shapeHeight = 0.03 * windowHeight // Always in ratio to the canvas height (responseive design)
      rect(shapesMovingUp[i].xpos, shapesMovingUp[i].ypos, shapeWidth, shapeHeight);
    }
  }
}
//Responsive design. 
//Since the rectangles are drawn in ratio of the window width and height, they will not change position
//Rectangles will change in size relative to window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
