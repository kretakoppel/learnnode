function hello(){
    console.log('Hello function');
}

hello();


function greet(name='Nameless', age){
    console.log('Hello ' + name + '!You are ' + age + ' years old');
}

greet('Kaspar', 30);
greet('Martin', 21);
greet();

let sum = function (a, b){
    return a+b;
}

let answer = sum(2,4);
console.log(answer);

let sub = (a,b) => {
    return a-b;
}

answer = sub(2,4);
console.log(answer);

let div = (a,b) => a/b;

answer = div(2,4);
console.log(answer);

let root = a => a*a;

answer = root(6);
console.log(answer);

let object = {
    hello(){
        console.log('hello object');
    },
    goodbye: () => {
        console.log('goodbye object');
    }
}

object.hello();
object.goodbye();

function isNameLong(name){
    return name.length > 5;
}

console.log(isNameLong('Kaspar'));
console.log(isNameLong('Ott'));
