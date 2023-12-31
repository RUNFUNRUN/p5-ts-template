import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };

  p.mouseClicked = () => {
    p.fill(0, 255, 0);
  }
};

new p5(sketch);
