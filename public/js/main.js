import { loadLevel } from "./loaders.js";
import { loadMarioSprites, loadBackgroundSprites } from "./sprites.js";
import Compositor from "./Compositor.js";
import { createBackgroundLayer } from "./layer.js";

const screen = document.querySelector("#screen");
const ctx = screen.getContext("2d");

function createSpriteLayer(sprites, pos) {
  return function drawSpriteLayer(ctx) {
    for (let i = 0; i < 20; i++) {
      sprites.draw("idle", ctx, pos.x + i * 13, pos.y);
    }
  };
}

Promise.all([
  loadMarioSprites(),
  loadBackgroundSprites(),
  loadLevel("1-1"),
]).then(([marioSprite, backgroundSprites, level]) => {
  const comp = new Compositor();

  const backgroundLayer = createBackgroundLayer(
    level.backgrounds,
    backgroundSprites
  );
  comp.layers.push(backgroundLayer);

  const pos = {
    x: 64,
    y: 64,
  };

  const spriteLayer = createSpriteLayer(marioSprite, pos);
  comp.layers.push(spriteLayer);

  function update() {
    comp.draw(ctx);

    pos.x += 2;
    pos.y += 2;
    requestAnimationFrame(update);
  }

  update();
});
