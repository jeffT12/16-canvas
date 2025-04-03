/**
 * Date : 04/03/2025
 * @author Jeff Tchakote <jeff.tchakote@stu.ocsb.ca>
 * 
 * Description : Practicing canvas
 * 
 */

'use strict'

//Randomize
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


//Event listener
$("my_square").addEventListener("click", random);

// Globals
const canvas = $("display");
const context = canvas.getContext("2d");

//Detail
context.strokeStyle = "Red";
context.fillStyle = "Yellow";
context.fillRect(20, 30, 40, 50);


//Shortcut to the getElementbyId function
function $(id){
    return document.getElementById(id);
}

function random(){
    $("my_square").innerHTML = math.random();
}