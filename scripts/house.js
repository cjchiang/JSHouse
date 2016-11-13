// Canvas Declaration.
var canvas;
var ctx;

// Variables for the colors.
var houseColor = "#0000e6";
var houseSideColor = "#000099";
var roofColor = "#00001a"
var decorationMainColor = "#cccccc";
var decorationShadowColor = "#999999";
var doorKnobColor = "#ffff00";
var garageLinesColor = "#000033";
var grassColor = "#8c8c8c";
var pathwayColor = "#009933";
var glassColor = "#66ffcc";
var roadColor = "#333333";
var laneColor = "#e6e600";

//Draws the ground for the whole canvas.
function drawGround() {
  //Draws the road.
  ctx.fillStyle = roadColor;
  ctx.beginPath();
  ctx.moveTo(0,500);
  ctx.lineTo(500,300);
  ctx.lineTo(500,400);
  ctx.lineTo(250,500);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws lane line inside the row.
  ctx.fillStyle = laneColor;
  ctx.beginPath();
  ctx.moveTo(100,500);
  ctx.lineTo(125,500);
  ctx.lineTo(500,355);
  ctx.lineTo(500,345);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws both top and bottom grass.
  //Top grass.
  ctx.fillStyle = grassColor;
  ctx.beginPath();
  ctx.moveTo(0,500);
  ctx.lineTo(500,300);
  ctx.lineTo(500,280);
  ctx.lineTo(0,480);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  //Bottom grass.
  ctx.beginPath();
  ctx.moveTo(250,500);
  ctx.lineTo(500,400);
  ctx.lineTo(500,420);
  ctx.lineTo(300,500);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws both pathways.
  //Bottom pathway.
  ctx.fillStyle = pathwayColor;
  ctx.beginPath();
  ctx.moveTo(300,500);
  ctx.lineTo(500,500);
  ctx.lineTo(500,420);
  ctx.closePath();
  ctx.fill();
  //Top pathway.
  ctx.beginPath();
  ctx.moveTo(0,480);
  ctx.lineTo(500,280);
  ctx.lineTo(500,0);
  ctx.lineTo(0,0);
  ctx.closePath();
  ctx.fill();
}
//Draws the main body of the house.
function drawHouse() {
  //Draws the house body.
  ctx.fillStyle = houseColor;
  ctx.beginPath();
  ctx.moveTo(100,400);
  ctx.lineTo(350,303);
  ctx.lineTo(350,213);
  ctx.lineTo(100,310);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the body of the garage.
  ctx.beginPath();
  ctx.moveTo(400,338);
  ctx.lineTo(480,307);
  ctx.lineTo(480,217);
  ctx.lineTo(440,200);
  ctx.lineTo(400,248);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the side of the house.
  ctx.fillStyle = houseSideColor;
  ctx.beginPath();
  ctx.moveTo(100,400);
  ctx.lineTo(30,350);
  ctx.lineTo(30,270);
  ctx.lineTo(60,260);
  ctx.lineTo(100,310);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the side of the garage.
  ctx.beginPath();
  ctx.moveTo(350,303);
  ctx.lineTo(400,338);
  ctx.lineTo(400,248);
  ctx.lineTo(350,213);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
//Draws the roof and edges for the whole house.
function drawRoof() {
  //Draws the left top overflow.
  ctx.fillStyle = decorationMainColor;
  ctx.beginPath();
  ctx.moveTo(30,270);
  ctx.lineTo(20,274);
  ctx.lineTo(30,274);
  ctx.closePath();
  ctx.fill();

  //Draws the left top edge.
  ctx.beginPath();
  ctx.moveTo(20,274);
  ctx.lineTo(18,270);
  ctx.lineTo(60,255);
  ctx.lineTo(60,260);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the left right edge.
  ctx.beginPath();
  ctx.moveTo(60,260);
  ctx.lineTo(110,322);
  ctx.lineTo(110,318);
  ctx.lineTo(60,255);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the left edge of the garage.
  ctx.beginPath();
  ctx.moveTo(390,257);
  ctx.lineTo(440,200);
  ctx.lineTo(440,196);
  ctx.lineTo(390,253);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the right edge of the garage
  ctx.beginPath();
  ctx.moveTo(440,200);
  ctx.lineTo(490,225);
  ctx.lineTo(490,221);
  ctx.lineTo(440,196);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the bottom edge.
  ctx.fillStyle = decorationShadowColor;
  ctx.beginPath();
  ctx.moveTo(110,322);
  ctx.lineTo(350,229);
  ctx.lineTo(350,225);
  ctx.lineTo(110,318);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the bottom edge of the garage.
  ctx.beginPath();
  ctx.moveTo(350,229);
  ctx.lineTo(390,257);
  ctx.lineTo(390,253);
  ctx.lineTo(350,225);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the main house's roof.
  ctx.fillStyle = roofColor;
  ctx.beginPath();
  ctx.moveTo(60,255);
  ctx.lineTo(370,150);
  ctx.lineTo(350,225);
  ctx.lineTo(110,318);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  //Draws the garage's roof
  ctx.beginPath();
  ctx.moveTo(370,150);
  ctx.lineTo(440,196);
  ctx.lineTo(390,253);
  ctx.lineTo(350,225);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}
//Draws lines in all the bodies of the house
function drawPlanks() {
  //Declares variables for intervals and number of lines
  var verticalInterval = 7;
  var bars = 13;
  var shrink = 10;
  //Draws the lines for main house.
  for(var x = 0; x < bars; x++) {
    ctx.beginPath();
    ctx.moveTo(100,400 - (x*verticalInterval));
    ctx.lineTo(350,303 - (x*verticalInterval));
    ctx.stroke();
  }

  //Draws thee lines for garage side.
  for(var x = 0; x < bars; x++) {
    ctx.beginPath();
    ctx.moveTo(350,303 - (x*verticalInterval));
    ctx.lineTo(400,338 - (x*verticalInterval));
    ctx.stroke();
  }

  //Draws the lines for garage.
  //Shrinks the length of the lines onces there more than 13.
  for(var x = 0; x < bars + 4; x++) {
    if (x < 14) {
      ctx.beginPath();
      ctx.moveTo(400,338 - (x*verticalInterval));
      ctx.lineTo(480,307 - (x*verticalInterval));
      ctx.stroke();
    }
    else if (x >= 14) {
      ctx.beginPath();
      ctx.moveTo(400,338 - (x*verticalInterval));
      ctx.lineTo(480 - shrink,307 - (x*verticalInterval) + (shrink/2));
      ctx.stroke();
      shrink = shrink + 5;
    }
  }

  //Resets the value of shrink
  shrink = 10;
  //Draws the lines for main house side
  //Shrinks the length of the lines onces there more than 13.
  for(var x = 0; x < bars + 2; x++) {
    if (x < 13) {
      ctx.beginPath();
      ctx.moveTo(30,350 - (x*verticalInterval));
      ctx.lineTo(100,400 - (x*verticalInterval));
      ctx.stroke();
    }
    else if (x >= 13) {
      ctx.beginPath();
      ctx.moveTo(30 + shrink,350 - (x*verticalInterval)+ (shrink/2));
      ctx.lineTo(100,400 - (x*verticalInterval));
      ctx.stroke();
      shrink = shrink + 5;
    }
  }
}
//Draws the doors for the house
function drawDoors() {
  //Draws the main door of the house.
  ctx.fillStyle = decorationMainColor;
  ctx.beginPath();
  ctx.moveTo(300,323);
  ctx.lineTo(300,283);
  ctx.lineTo(320,275);
  ctx.lineTo(320,315);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the garage goor.
  ctx.beginPath();
  ctx.moveTo(405,336);
  ctx.lineTo(405,266);
  ctx.lineTo(475,239);
  ctx.lineTo(475,309);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the door knob.
  ctx.beginPath();
  ctx.moveTo(315,305);
  ctx.lineTo(315,301);
  ctx.lineTo(318,299);
  ctx.lineTo(318,303);
  ctx.closePath();
  ctx.fillStyle = doorKnobColor;
  ctx.fill();
  ctx.stroke();

  //Draws the lines for the garage door.
  var verticalInterval = 5;
  var bars = 14;
  ctx.lineWidth = 1;
  ctx.strokeStyle = garageLinesColor;
  for(var x = 0; x < bars; x++) {
    ctx.beginPath();
    ctx.moveTo(405,336 - (x*verticalInterval));
    ctx.lineTo(475,309 - (x*verticalInterval));
    ctx.stroke();
  }
}
//Draws the chimney for the house.
function drawChimney() {
  //Draws the chimney's left side.
  ctx.fillStyle = decorationShadowColor;
  ctx.beginPath();
  ctx.moveTo(30,266);
  ctx.lineTo(30,236);
  ctx.lineTo(40,232);
  ctx.lineTo(40,262);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the chimney's left edge.
  ctx.fillStyle = decorationShadowColor;
  ctx.beginPath();
  ctx.moveTo(30,236);
  ctx.lineTo(32,236);
  ctx.lineTo(39,226);
  ctx.lineTo(34,230);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the chimney's right edge.
  ctx.beginPath();
  ctx.moveTo(39,226);
  ctx.lineTo(50,224);
  ctx.lineTo(50,222);
  ctx.closePath();
  ctx.fillStyle = decorationMainColor;
  ctx.fill();
  ctx.stroke();

  //Draws the chimney's right side.
  ctx.beginPath();
  ctx.moveTo(40,262);
  ctx.lineTo(40,232);
  ctx.lineTo(50,222);
  ctx.lineTo(50,258);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the funnel for the chimney.
  ctx.beginPath();
  ctx.moveTo(32,236);
  ctx.lineTo(40,232);
  ctx.lineTo(50,222);
  ctx.lineTo(39,226);
  ctx.closePath();
  ctx.fillStyle = roofColor;
  ctx.fill();
}
//Draws the windows of the house.
function drawWindows() {
  //Variable that determines the size of the glass.
  var offset = 5;
  //Draws the left main window frame.
  ctx.beginPath();
  ctx.moveTo(150,360);
  ctx.lineTo(150,320);
  ctx.lineTo(175,310);
  ctx.lineTo(175,350);
  ctx.closePath();
  ctx.fillStyle = decorationMainColor;
  ctx.fill();
  ctx.stroke();

  //Draws the right main window frame.
  ctx.beginPath();
  ctx.moveTo(225,332);
  ctx.lineTo(225,292);
  ctx.lineTo(250,282);
  ctx.lineTo(250,322);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the side window frame.
  ctx.beginPath();
  ctx.moveTo(40,330);
  ctx.lineTo(40,290);
  ctx.lineTo(90,326);
  ctx.lineTo(90,366);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the left window glass.
  ctx.fillStyle = glassColor;
  ctx.beginPath();
  ctx.moveTo(150 + offset,358 - offset);
  ctx.lineTo(150 + offset,318 + offset);
  ctx.lineTo(175 - offset,312 + offset);
  ctx.lineTo(175 - offset,352 - offset);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the right window glass.
  ctx.beginPath();
  ctx.moveTo(225 + offset,330 - offset);
  ctx.lineTo(225 + offset,290 + offset);
  ctx.lineTo(250 - offset,284 + offset);
  ctx.lineTo(250 - offset,324 - offset);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the side glass.
  ctx.beginPath();
  ctx.moveTo(40 + offset,330 - offset);
  ctx.lineTo(40 + offset,290 + offset * 2);
  ctx.lineTo(90 - offset,326 + offset);
  ctx.lineTo(90 - offset,366 - offset * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draws the lines for the windows.
  ctx.lineWidth = 2;
  ctx.strokeStyle = decorationMainColor;
  ctx.beginPath();
  ctx.moveTo(65,339);
  ctx.lineTo(65,318);
  ctx.moveTo(45,315);
  ctx.lineTo(85,344);
  ctx.moveTo(155,338);
  ctx.lineTo(170,331);
  ctx.moveTo(162,350);
  ctx.lineTo(162,320);
  ctx.moveTo(230,310);
  ctx.lineTo(245,303);
  ctx.moveTo(237,322);
  ctx.lineTo(237,290);
  ctx.stroke();
}
//Draws everything.
function drawAll() {
  canvas = document.getElementById('House');
  ctx = canvas.getContext("2d");
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;

  drawGround();
  drawHouse();
  drawPlanks();
  drawRoof();
  drawChimney();
  drawDoors();
  drawWindows();
}
