"use strict";
class Animal {
    constructor() {
        Animal.population++;
    }
}
Animal.population = 0;
class Dog extends Animal {
    constructor(color) {
        super();
        this.color = color;
    }
    sound() {
        console.log('WOW');
    }
    iamadog() {
        console.log('yes, this is a dog');
    }
}
class Cat extends Animal {
    constructor(gender) {
        super();
        this.gender = gender;
    }
    sound() {
        console.log('MEOW');
    }
    iamacat() {
        console.log('yes, this is a cat');
    }
}
let animals = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/
for (let animal of animals) {
    animal.sound();
    if (animal instanceof Cat) {
        animal.iamacat();
    }
    else if (animal instanceof Dog) {
        animal.iamadog();
    }
}
console.log(Animal.population); //4