import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Give us a number', a => {
    if(a < 10){
        console.log('less than 10');
    } else if(a==10){
        console.log('equal to 10');
    } else {
        console.log('more than 10');
    }
    rl.close();
});

