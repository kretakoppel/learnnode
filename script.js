let fruits = ['apple', 'cherry', 'mango', 'banana'];

fruits.forEach((fruit, i, fruits) => console.log(fruit, i, fruits));

let capitalizedFruits = fruits.map(fruit => {
    return fruit.charAt(0).toUpperCase() + fruit.slice(1);
});

console.log(capitalizedFruits);

let mangoIndex = fruits.findIndex(fruit => fruit == 'mango');

console.log(mangoIndex);

let fruitsWithA = fruits.filter(fruit => !fruit.includes('a'));

console.log(fruitsWithA);

let nums = [3, 5, 7, 2, 1, 5, 7, 8];

let product = nums.reduce((prod, num) => prod * num, 1);

console.log(product);

let sortedNums = nums.sort((a,b) => {
    if(a < b){
        return -1;
    } else if(a > b){
        return 1;
    } else {
        return 0;
    }
});

sortedNums = nums.sort((a,b) => a - b);
sortedNums = nums.sort();
console.log(sortedNums);