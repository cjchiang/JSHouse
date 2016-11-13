// Canvas Initialization----------------------------------------
var canvas = document.getElementById("House");
var context = canvas.getContext("2d");
var particles = {};
var particleIndex = 0;
var density = 20;
var maxSize = 40;

// Slider Speed-------------------------------------------------
var speed = 0.2;

// Slider Speed Update------------------------------------------
function updateSpeed() {
    speed = document.getElementById("speedRange").value;
}

// Particle------------------------------------------------------
function Particle() {
    // Particle properties
    this.size = 10;
    this.opacity = 0.5;
    this.x = 35;
    this.y = 210;
    this.vx = Math.random() * 2 - 0.5;
    this.vy = Math.random() * 3 - 1;
    this.gravity = -0.5;

    particleIndex++;
    particles[particleIndex] = this;
    this.id = particleIndex;
    this.life = 0;
    this.maxLife = 200;
}

// Draws Particle-----------------------------------------------
Particle.prototype.draw = function() {
    // Adjust speed and motion
    this.x += (this.vx * speed);
    this.y += (this.vy * speed);
    this.vy += (this.gravity * speed);

    // Ages the particle
    this.life++;

    // Kills of old particle
    if (this.life >= this.maxLife) {
        delete particles[this.id];
    }

    // Randomly increase the size
    if (this.size < maxSize) {
        if (Math.random() > 0.97) {
            this.size++;
        }
    }

    // Draws the particle----------------------------------------
    context.beginPath();
    context.fillStyle = "rgba(200,200,200,0.1)";
    context.arc(this.x, this.y, this.size, 0, 2*Math.PI);
    context.closePath();
    context.fill();
}

// Sets the interval for particle emitter------------------------
setInterval(function(){
    // Clears previous particle frames---------------------------
    context.fillStyle = "rgba(0,153,51,0.2)";
    context.fillRect(0,0,110,228);

    // Create new particles with some randomness
    for (var i = 0; i < density; i++) {
        if (Math.random() > 0.85) {
            new Particle();
        }
    }

    // Spawn new particles
    for (var i in particles) {
        particles[i].draw();
    }
}, 30);
