import { loadImg } from "./loaders.js";
import SpriteSheet from "./SpriteSheet.js";

export function loadMarioSprites() {
  return loadImg("/img/sprites.png").then((img) => {
    const sprites = new SpriteSheet(img, 16, 16);
    sprites.define("idle", 0, 88, 13, 16);

    return sprites;
  });
}

export function loadBackgroundSprites() {
  return loadImg("/img/tiles.png").then((img) => {
    const sprites = new SpriteSheet(img, 16, 16);
    sprites.defineTile("ground", 0, 0);
    sprites.defineTile("sky", 10, 7);
    return sprites;
  });
}
