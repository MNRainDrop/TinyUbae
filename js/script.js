const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

let dpi = window.devicePixelRatio;

let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
//get CSS width
let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
//scale the canvas
canvas.setAttribute('height', style_height * dpi);
canvas.setAttribute('width', style_width * dpi);


ctx.fillStyle = '#ae93bc';

const circlesarray = [];
class Circles{
    constructor (x, y){
        this.x = x;
        this.y = y;
    }
    draw(){
        ctx.fillStyle = '#ae93bc';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2*Math.PI, false);
        ctx.fill();
    }
}

function draw() {
    for(let i = 0; i < 70; i++) {
        circlesarray.push(new Circles(Math.random() * canvas.width, Math.random() * (canvas.height-150) +150))
    }
    for(let i = 0; i < 70; i++) {
        circlesarray[i].draw();
    }
}

function reportWindowSize() {
    ctx.fillStyle = '#f3d9ff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
}
window.addEventListener('resize', reportWindowSize);
draw();