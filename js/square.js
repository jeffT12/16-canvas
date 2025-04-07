/**
 * 
 * 
 * 
 */

import { context } from "./globa.js";


export default class square {
    size = 1;
    x = 0;
    y = 0;
    colour = "black";

    constructor(x, y, s_l, c){
        this.x = x;
        this.y = y;
        this.size = s_l;
        this.c = c;
    }

    draw(){
        context.fillStyle = this.colour;
        context.fillRect(this.x, this.y, this.size, this.size)
    }
}