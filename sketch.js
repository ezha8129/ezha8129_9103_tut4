let shapes = []; //Initialise empty array

function setup() {
  createCanvas(windowWidth, windowHeight); //Creating the canvas to the size of the window
  noStroke();
}

function draw() {
  background(255, 252, 245); //Background colour
  runningSquares();

  //Yellow rectangles using the ratio of the position and size relative to the canvas to ensure responsiveness
  drawYellowRect(0, 0, 0.072, 0.464);
  drawYellowRect(0.124, 0.078, 0.208, 0.112);
  drawYellowRect(0.127, 0.304, 0.16, 0.096);
  drawYellowRect(0, 0.612, 0.16, 0.176);
  drawYellowRect(0, 0.824, 0.328, 0.18);
  drawYellowRect(0.152, 0.716, 0.132, 0.008);
  drawYellowRect(0.184, 0.508, 0.172, 0.1);
  drawYellowRect(0.388, 0.664, 0.112, 0.104);
  drawYellowRect(0.42, 0.872, 0.056, 0.076);
  drawYellowRect(0.424, 0.248, 0.296, 0.172);
  drawYellowRect(0.528, 0.53, 0.016, 0.072);
  drawYellowRect(0.052, 0.028, 0.112, 0.028);
  drawYellowRect(0.656, 0.776, 0.108, 0.18);
  drawYellowRect(0.688, 0.014, 0.284, 0.148);
  drawYellowRect(0.728, 0.808, 0.128, 0.104);
  drawYellowRect(0.768, 0.108, 0.06, 0.048);
  drawYellowRect(0.082, 0.408, 0.048, 0.128);

  //Blue rectangles  using the ratio of the position and size relative to the canvas to ensure responsiveness
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
  drawBlueRect(0.408, 0.68, 0.08, 0.072);
  drawBlueRect(0.436, 0.848, 0.036, 0.026);
  drawBlueRect(0.736, 0.084, 0.052, 0.024);
  drawBlueRect(0.68, 0.168, 0.284, 0.092);
  drawBlueRect(0.792, 0.484, 0.64, 0.036);
  drawBlueRect(.64, 0.568, 0.228, 0.104);
  drawBlueRect(0.708, 0.82, 0.096, 0.08)


  //Grey rectangles using the ratio of the position and size relative to the canvas to ensure responsiveness
  drawGreyRect(0.34, 0, 0.072, 0.12);
  drawGreyRect(0.148, 0.148, 0.036, 0.136);
  drawGreyRect(0.56, 0.124, 0.144, 0.032);
  drawGreyRect(0.484, 0.18, 0.052, 0.14);
  drawGreyRect(0.856, 0.216, 0.008, 0.032);
  drawGreyRect(0, 0.388, 0.088, 0.048);
  drawGreyRect(0.624, 0.34, 0.068, 0.064);
  drawGreyRect(0.282, 0.544, 0.168, 0.04);
  drawGreyRect(0.12, 0.622, 0.076, 0.148);
  drawGreyRect(0.64, 0.552, 0.076, 0.092);
  drawGreyRect(0.8, 0.6, 0.104, 0.052);
  drawGreyRect(0.252, 0.832, 0.172, 0.056);
  drawGreyRect(0.476, 0.7, 0.024, 0.108);
  drawGreyRect(0.616, 0.74, 0.02, 0.072);
  drawGreyRect(0.252, 0.832, 0.172, 0.056);
  drawGreyRect(0.824, 0.856, 0.172, 0.032);
}

//Defining a function to draw the yellow rectangles with size relative to the window size
function drawYellowRect(inputXPos, inputYPos, inputWidth, inputHeight) {
  // Using modulus of the canvas width-inputWidth so the rectangles appear more smoothly into hte canvas
  // Shifts the modulo boundary to the left, causing the rectangles to start their suddenly in the canvas 
  // but gradually shift out
  
  let outputXPos = (inputXPos * width + frameCount * 2) % (width + (inputWidth * width));
  let outputYPos = inputYPos * height;
  fill(250, sin((frameCount + inputXPos) / 50) * 201, 1); 
  rect(outputXPos, outputYPos, inputWidth * width, inputHeight * height);
}

//Defining a function to draw the blue rectangles with size relative to the window size
function drawBlueRect(inputXPos, inputYPos, inputWidth, inputHeight) {
  // Using modulo to wrap around and frameCount to change position over time
  // Rectangles gradually move from right to left however disappear instantly once it touches the edge because of the modulo value being the width
  let outputXPos = width - (inputXPos * width + frameCount) % (width + (inputWidth * width)); 
  let outputYPos = inputYPos * height;
  fill(34, sin((frameCount + inputXPos) / 50) * 80, 149);
  rect(outputXPos, outputYPos, inputWidth * width, inputHeight * height);
}


//Defining a function that draws a grey rectangle with size relative to window size
function drawGreyRect(inputXPos, inputYPos, inputWidth, inputHeight) {
  let outputXPos = (inputXPos * sin(frameCount / 150) * width); //Oscillating left to right 
  let outputYPos = inputYPos * height;
  fill(232, 232, 232);
  rect(outputXPos, outputYPos, inputWidth * width, inputHeight * height);

}

//Creating a function to add falling squares. Code adapted from https://editor.p5js.org/annA/sketches/zaqrFwMH5
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

//Responsive design. 
//Since the rectangles are drawn in ratio of the window width and height, they will not change position
//Rectangles will change in size relative to window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
