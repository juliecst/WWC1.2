let babus = 100;
let ro = 0;
let x = 250;
let y = 250;

function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);
}

function draw() {
  background(20, 10, 50);

  //babushkas
  for (i = 0; i < babus; i += 0.48) {
    let r = width / 3;
    rNew = i * (r / babus) + 150;

    //size
    szx = width - (width / babus) * i;
    szy = height - (height / babus) * i;

    //time
    var s = second();
    var secAngle = map(s, 0, 60, 0, 360);

    //shape
    translate(200, 200);
    rotate(-150);
    fill(230, 200, 20, 20);
    stroke(255);
    strokeWeight(0.5);
    arc(rNew, rNew, szx, szy, ro, secAngle, PIE);
    ro += 7;

    //timer
    let m = millis();
    if (m < 25000) {
      scale(0.6);
      scale(x, y);
      x += 0.00001;
      y += 0.00001;

      if (x > 3.5) {
        x = 0.5;
      }

      if (y > 4) {
        y = 0.5;
      }
    }
    //original
    if (m < 30000) {
      scale(1);
    }
  }

  fill(255);
  noStroke();
  text("It´s NOW", 110, 70);
  textSize(9);
}
