/* class Animal {
    eat() {
        console.log("The animal is eating");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    } 
} 
const dog = new Dog();

dog.eat();   // inherited from Animal
dog.bark();  // belongs to Dog
 */
class Animal {

    eat() {
        console.log("Animal is eating");
    }

    sleep() {
        console.log("Animal is sleeping");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}