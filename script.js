let fruits = ['apple', 'cherry', 'mango', 'banana'];

fruits.forEach(function (fruit, i, fruits){
    console.log(fruit, i, fruits);
});

let capitalizedFruits = fruits.map(function (fruit) {
    return fruit.charAt(0).toUpperCase() + fruit.slice(1);
});

console.log(capitalizedFruits);

let mangoIndex = fruits.findIndex(function (fruit) {
    return fruit == 'mango';
});

console.log(mangoIndex);

let fruitsWithA = fruits.filter(function (fruit){
    return !fruit.includes('a');
});

console.log(fruitsWithA);

let nums = [3, 5, 7, 2, 1, 5, 7, 8];

let product = nums.reduce(function (prod, num) {
    return prod * num;
}, 1);

console.log(product);