"use strict";

function setup() {
    console.log("go");
    createCanvas(300, 300);
    background(0);

    drawEllipse(60, 60, 25, 25, 180, 60, 140);
    drawEllipse(100, 100, 40, 40, 220, 80, 170);
    drawEllipse(150, 150, 55, 55, 255, 100, 200);
}

function draw() {
}

function drawEllipse(x, y, w, h, r, g, b) {
    fill(r, g, b);
    ellipse(x, y, w, h);
}
