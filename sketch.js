function setup() {
  createCanvas(windowWidth, windowHeight); //Creating the canvas to the size of the window
  noStroke();
}

function draw() {
  background(255, 252, 245); //Background colour

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

  //More yellow rectangles using the ratio of the position and size relative to the canvas to ensure responsiveness
  drawYellowRect(0.1, 0.152, 0.148, 0.272);
  drawYellowRect(0.144, 0.504, 0.06, 0.052);
  drawYellowRect(0.152, 0.612, 0.132, 0.088);
  drawYellowRect(0.168, 0.756, 0.086, 0.104);
  drawYellowRect(0.284, 0.154, 0.132, 0.136);
  drawYellowRect(0.272, 0.273, 0.108, 0.064);
  drawYellowRect(0.416, 0.304, 0.088, 0.152);
  drawYellowRect(0.292, 0.476, 0.08, 0.096);
  drawYellowRect(0.428, 0.592, 0.016, 0.064);
  drawYellowRect(0.352, 0.696, 0.124, 0.212);
  drawYellowRect(0.484, 0.832, 0.104, 0.048);
  drawYellowRect(0.54, 0.150, 0.388, 0.06);
  drawYellowRect(0.6, 0.256, 0.072, 0.128);
  drawYellowRect(0.768, 0.252, 0.092, 0.176);
  drawYellowRect(0.568, 0.5, 0.152, 0.256);
  drawYellowRect(0.736, 0.584, 0.16, 0.092);
  drawYellowRect(0.68, 0.72, 0.128, 0.26);
  drawYellowRect(0.824, 0.788, 0.048, 0.06);


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
  let outputXPos = inputXPos * sin(frameCount / 500); // Using frameCount and sin to oscillate left to right
  let outputYPos = inputYPos * height;

  fill(250, sin((frameCount + inputXPos) / 50) * 201, 1); // Colour oscillates from yellow to red
  rect(outputXPos * width, outputYPos, inputWidth * width, inputHeight * height); 
}

//Defining a function to draw the blue rectangles with size relative to the window size
function drawBlueRect(inputXPos, inputYPos, inputWidth, inputHeight) {
  let outputXPos = width - (inputXPos + frameCount/50 * 0.05) * width; // Shifting it to the right, however doesn't reappear
  let outputYPos = inputYPos * height;
  fill(34, sin((frameCount + inputXPos) / 50) * 80, 149); // Green value of RGB oscillates
  rect(outputXPos, outputYPos, inputWidth * width, inputHeight * height);
}

//Defining a function that draws a grey rectangle with size relative to window size
function drawGreyRect(inputXPos, inputYPos, inputWidth, inputHeight) {
  let outputXPos = (inputXPos * sin(frameCount / 150) * width); //Oscillating left to right 
  let outputYPos = inputYPos * height;
  fill(232, 232, 232);
  rect(outputXPos, outputYPos, inputWidth * width, inputHeight * height);

}
//Responsive design. 
//Since the rectangles are drawn in ratio of the window width and height, they will not change position
//Rectangles will change in size relative to window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
