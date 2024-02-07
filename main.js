import * as ex from "excalibur";
import { VIEWPORT_HEIGHT, VIEWPORT_WIDTH, SCALE} from "./constants";
import {Player} from "./src/actors/Players/Player.js";
// import {Floor} from "./src/actors/Floor.js";
// import {loader} from "./resources.js";
// import {Map_Indoor} from "./src/maps/Map_Indoor.js";

const game = new ex.Engine({
  width: VIEWPORT_WIDTH * SCALE,
  height: VIEWPORT_HEIGHT * SCALE,
  fixedUpdateFps: 60,
  antialiasing: false, // Pixel Art boi
});

const player = new Player(200, 200, "RED");
game.add(player);

// const floor = new Floor(1, 1, 1, 6);
// game.add(floor);

// game.start(loader);
game.start();