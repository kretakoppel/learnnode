let array = ['banana', 'apple', 'cherry', 'pear'];

for(value of array){
    value = 'nothing';
    console.log(value);
}

console.log(array);

let object = {
    name: 'kaspar',
    age: 31,
    color: 'green',
}

for(key in object){
    console.log(key, object[key]);
}