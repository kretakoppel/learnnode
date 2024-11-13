let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let draw = false;
let drawSize = 30;
function drawing(){
    let rect = event.target.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    context.beginPath();
    context.arc(x, y, drawSize, 0, 2*Math.PI);
    context.fill();
}

let size =  document.querySelector('input#size');

size.addEventListener('input', () => {
    drawSize = size.value;
})

canvas.addEventListener('mousemove', event => {
    if(draw){
       drawing();
    }
});

canvas.addEventListener('mousedown', () => {
    draw = true;
    drawing();
});

canvas.addEventListener('mouseup', () => {
    draw = false;
});

let color = document.querySelector('input#color');
color.addEventListener('input', () => {
    context.fillStyle = color.value;
})