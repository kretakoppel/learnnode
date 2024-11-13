let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
context.moveTo(0,0);
context.lineTo(300, 300);
context.stroke();

context.beginPath();
context.arc(600,600,50, 0, 2*Math.PI);
context.stroke();

context.font = "50px Arial";
context.fillText('WOW CANVAS!', 600, 100);
context.strokeText('WOW CANVAS!', 600, 200);