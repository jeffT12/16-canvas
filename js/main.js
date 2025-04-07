/**
 * Date : 04/03/2025
 * @author Jeff Tchakote <jeff.tchakote@stu.ocsb.ca>
 * 
 * Description : Practicing canvas
 * 
 */

'use strict'

import {$, randInt, canvas, context, SQUARE} from "./globa.js";
import square from "./square.js";

let test_sqaure = new square(30, 55, 45, "red");
test_sqaure.draw();


//Detail
context.strokeStyle = "Red";
context.fillStyle = "Yellow";
context.fillRect(20, 30, 40, 50);


function get_rgb_string(){
    let r = randInt(0, 255);
    let g = randInt(0, 255);
    let b = randInt(0, 255);

    return rgb($(r), $(g), $(b))
}


function add_square(){
    let colour = get_rgb_string();
    let s = randInt(1,230);
    let x = randInt(0, canvas.Width);
    let y = randInt(0, canvas.Height);

    let my_square = new square(x, y, s_l, colour);
    my_square.draw();
    SQUARE.push(my_square);
    draw_square();

}


function draw_square(){
    clear();
    for (let square of SQUARE){
        square.draw();
    }

}


function clear(){
    context.clearReact(0, 0, canvas.Width, canvas.Height);
}

