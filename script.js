let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let x = 100;
let y = 100;

context.beginPath();
context.rect(x,y,100,100);
context.fillStyle = '#bada55';
context.fill();

// setInterval(() => {
//     context.clearRect(x, y, 100, 100);
//     context.beginPath();
//     x+=1;
//     context.rect(x,y,100,100);
//     context.fillStyle = '#bada55';
//     context.fill();
// }, 16.66666666666667);

let start;
let prevTimestamp;
function step(timestamp){
    if(prevTimestamp == undefined){
        prevTimestamp = timestamp;
    }
    if(start == undefined){
        start = timestamp;
    }
    let delta = timestamp - prevTimestamp;
    prevTimestamp = timestamp;

    console.log(delta);

    context.clearRect(x-1, y, 100, 100);
    context.beginPath();
    x+=10/60*delta;
    context.rect(x,y,100,100);
    context.fillStyle = '#bada55';
    context.fill();

    requestAnimationFrame(step);
}

requestAnimationFrame(step);