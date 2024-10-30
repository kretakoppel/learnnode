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
console.log(person);

class Person {
    constructor(){
        this.name = '';
        this.idCode = '';
    }
    getCentury(){
        let num = parseInt(this.idCode.charAt(0));
        return 1700 + Math.ceil(num/2) * 100
    }

    getBirthYear() {
        return this.getCentury() + parseInt(this.idCode.slice(1,3));
    }

    getSex(){
        if(parseInt(this.idCode.charAt(0)) % 2 === 0) {
            return 'Female';
        } else {
            return 'Male';
        }
    }
    getBirthMonth(){
        return this.idCode.slice(3,5);
    }
    getBirthDay(){
        return this.idCode.slice(5,7);
    }
}

let person1 = new Person();
person1.name = 'Kaspar';
person1.idCode = '39303217010';

console.log(person1.getBirthYear());
console.log(person1);
