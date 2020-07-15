import { loadImg, loadLevel } from "./loaders.js";
import SpriteSheet from "./SpriteSheet.js";

const screen = document.querySelector("#screen");
const ctx = screen.getContext("2d");

const drawBackground = (background, context, sprite) => {
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprite.drawTiles(background.tile, context, x, y);
      }
    }
  });
};

loadImg("/img/tiles.png").then((img) => {
  const sprite = new SpriteSheet(img, 16, 16);
  sprite.define("ground", 0, 0);
  sprite.define("sky", 10, 7);

  loadLevel("1-1").then((res) => {
    const { backgrounds } = res;

    backgrounds.forEach((background) =>
      drawBackground(background, ctx, sprite)
    );
  });
});
