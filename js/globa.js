/**
 * 
 * This will hold any globa value and function
 */



export const canvas = $("display");
export const context = canvas.getContext("2d");
export const SQUARE = [];



export function $(id){
    return document.getElementById(id);
}


export function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {$}