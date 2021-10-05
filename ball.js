//Set global variable that would contain the position, velocity and the html element "ball"
var velocityX =5;
var velocityY = 3;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById("ball");
var reverse = false


//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;

  positionX = positionX + velocityX;
  positionY = positionY + velocityY;

}


// This call the moveBall function every 100ms
setInterval(moveBall, 100);
