"use strict";

// rectangle variables
let x1, y1, w1, h1;
let x2, y2, w2, h2;
let x3, y3, w3, h3;

// speed
const speedY = 2;

function setup() {
    createCanvas(400, 300);

    // rect 1
    x1 = 50;
    y1 = 50;
    w1 = 40;
    h1 = 40;

    // rect 2
    x2 = 150;
    y2 = 50;
    w2 = 40;
    h2 = 40;

    // rect 3
    x3 = 250;
    y3 = 0;
    w3 = 40;
    h3 = 40;
}

function draw() {
    background(0);

    // rect 1
    fill("#DC143C");
    rect(x1, y1, w1, h1);

    // rect 2
    fill("#FFC0CB");
    rect(x2, y2, w2, h2);

    // rect 3
    fill("#ADD8E6");
    rect(x3, y3, w3, h3);

    // update y position 
    y3 = y3 + speedY;

    // bottom canvas bounds
    if (y3 > height) {
        y3 = 0;
    }
}

// mouse click to move rectangle
function mousePressed() {
    x1 = mouseX;
    y1 = mouseY;
}

// spqce bar to move rectangle
function keyPressed() {
    if (key === ' ') {
        x2 = mouseX;
        y2 = mouseY;
    }
}
