//Set global variable that would contain the position, velocity and the html element "ball"
var velocityX =25;
var velocityY = 5;
var positionX = 000;
var positionY = 0;
var ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");
var reverse = false;


//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 1000;
  var Ymin = 0;
  var Ymax = 1000;
  if (reverse) {
    positionX = positionX - velocityX;
    positionY = positionY - velocityY;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    } else {
        positionX = positionX + velocityX;
        positionY = positionY + velocityY;
        ball.style.left = positionX + "px";
        ball.style.top = positionY + "px";
    }
    if (positionX > Xmax || positionX == Xmin || positionY > Ymax || positionY === Ymin) {
        reverse = !reverse;
    }
}

function moveBall2() {
    // two fixed x-axis coordinates (you will use these variable in step 3)
    var Xmin = 100;
    var Xmax = 500;
    var Ymin = 110;
    var Ymax = 500;
    if (reverse) {
      positionX = positionX - velocityX;
      positionY = positionY - velocityY;
      ball2.style.left = positionX + "px";
      ball2.style.top = positionY + "px";
      } else {
          positionX = positionX + velocityX;
          positionY = positionY + velocityY;
          ball2.style.left = positionX + "px";
          ball2.style.top = positionY + "px";
      }
      if (positionX > Xmax || positionX == Xmin || positionY > Ymax || positionY === Ymin) {
          reverse = !reverse;
      }
  }

// This call the moveBall function every 100ms
setTimeout(moveBall, 500);
setInterval(moveBall, 100);
setInterval(moveBall2, 1000);
