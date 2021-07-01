class Particle {
  constructor(x, y, hue, sat, p5, word) {
    this.word = word
    this.x = x + p5.random(-10, 10)
    this.y = y + p5.random(-10, 10)
    this.vx = p5.random(-2.5, 2.5)
    this.vy = p5.random(-2.5, 2.5)
    this.radius = p5.random() > 0.75 ? p5.random(25, 50) : 1 + p5.random(1, 20)
    this.radius *= 1.2
    this.lifespan = p5.random(25, 50)
    this.charge = this.lifespan
    this.color = {
      r: hue,
      g: p5.round(p5.random(sat, sat + 50)),
      b: 100,
    }
    p5.colorMode(p5.HSB)
  }

  update() {
    this.charge--
    this.radius--
    this.x += this.vx
    this.y += this.vy
  }

  draw(p5) {
    // var gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    // gradient.addColorStop(0, 'rgba(' + this.color.r + ', ' + this.color.g + ', ' + this.color.b + ', ' + this.opacity + ')');
    // gradient.addColorStop(0.5, "rgba(" + this.color.r + ", " + this.color.g + ", " + this.color.b + ", " + this.opacity + ")");
    // gradient.addColorStop(1, "rgba(" + this.color.r + ", " + this.color.g + ", " + this.color.b + ", 0)");

    if (this.x >= p5.width) {
      this.x = this.radius
    } else if (this.x < 0) {
      this.x = p5.width - this.radius
    } else if (this.y > p5.height) {
      this.y = this.radius
    } else if (this.y < 0) {
      this.y = p5.height - this.radius
    }

    // p5.fill(`hsb(${this.color.r},${this.color.g},${this.color.b})`)
    p5.fill(this.color.r, this.color.g, this.color.b,this.opacity)
    // p5.ellipse(this.x, this.y, this.radius, this.radius)
    p5.textSize(this.lifespan)
    p5.text(this.word, this.x, this.y)
  }
}

export default Particle
