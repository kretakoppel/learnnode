let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.moveTo(640,720);
context.lineTo(640, 620);
tree(640, 620, 100, 10);
context.stroke();

function tree(x, y, length, steps){
    if(steps>0){
        context.moveTo(x, y);
        context.lineTo(x+length, y-length);
        tree(x+length, y-length, length-10, steps-1);
        context.moveTo(x, y);
        context.lineTo(x-length, y-length);
        tree(x-length, y-length, length-10, steps-1);
    }
}