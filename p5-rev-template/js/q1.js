"use strict";

function setup() {
    console.log("go");
    createCanvas(300, 300);
    background(0);
}

function draw() {

    let x, y, w, h;
    let r, g, b;

    // 1
    x = 60;
    y = 60;
    w = 25;
    h = 25;
    r = 180;
    g = 60;
    b = 140;
    fill(r, g, b);
    ellipse(x, y, w, h);

    // 2
    x = 100;
    y = 100;
    w = 40;
    h = 40;
    r = 220;
    g = 80;
    b = 170;
    fill(r, g, b);
    ellipse(x, y, w, h);

    // 3
    x = 150;
    y = 150;
    w = 55;
    h = 55;
    r = 255;
    g = 100;
    b = 200;
    fill(r, g, b);
    ellipse(x, y, w, h);

    noLoop();
}
