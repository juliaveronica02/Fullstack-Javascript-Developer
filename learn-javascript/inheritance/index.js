class Person {
    eat() {
        console.log("I am eating");
    }
    breathe(){
        console.log("I am breathing");
    }
    swim() {
        console.log("I am swimming");
    }
}
class Magician extends Person {
    trick(){
        console.log("I am doing a trick");
    }
}
let magic = new Magician()
let magichan = new Magician()
magic.eat();
magichan.eat();
magic.swim();
magichan.swim();
magic.trick();
magichan.trick();
// result:
// I am eating.
// I am eating.
// I am swimming.
// I am swimming.
// I am doing a trick.
// I am doing a trick.