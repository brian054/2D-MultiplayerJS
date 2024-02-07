import * as ex from "excalibur";
import { ANCHOR_CENTER, DOWN, SCALE_2x } from "../../../constants";
// import {DirectionQueue} from "../../classes/DirectionQueue.js";
// import {DrawShapeHelper} from "../../classes/DrawShapeHelper.js";
// import {generateCharacterAnimations} from "../../../character-animations.js";
// import {PlayerAnimations} from "./PlayerAnimations.js";

// ToDo: Find docs for Actor, excalibur's version of a GameObject
// Link: 
export class Player extends ex.Actor {
    constructor(x, y, skinId) {
        super({
            pos: new ex.Vector(x, y),
            width: 32,
            height: 32,
            scale: SCALE_2x,
            collider: ex.Shape.Box(15, 15, ANCHOR_CENTER, new ex.Vector(0, 6)),
            collisionType: ex.CollisionType.Active,
            color: ex.Color.Green
        });

        this.directionQueue = DirectionQueue();

    }

    // excalibur thing
    onPreUpdate(_engine, _delta) {
    }
}