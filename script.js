let time = Date.now();
console.log(time);
let i = 0;
while(time+10000 > Date.now()){
    i++;
}
console.log(i);