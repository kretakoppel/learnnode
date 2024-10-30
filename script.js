let person = {
    name: 'Kaspar',
    age: 31,
    sex: 'Male',
    'id-code': '39303217010',
    getBirthYear() {
        return this['id-code'].slice(1,3);
    }
};

console.log(person.name);
console.log(person['id-code']);
console.log(person.getBirthYear());