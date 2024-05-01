/* Using `this`
-------------------------------------------------------------- */
const someObject = {
    someKey: 'some value',
    myMethod() {
        console.log(this.someKey)
    }
}

someObject.myMethod()


/* Building a custom class in JS
-------------------------------------------------------------- */
class Character {
    static numberOfInstances = 0;

    // Define each instance's properties
    constructor(name, age, eyes, hair) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        Character.numberOfInstances++;
    }

    // Prototype methods each instance can use
    greet(otherCharacter) {
        console.log(`hi ${otherCharacter}!`)
    }

    classyGreeting(otherCharacter) {
        console.log(`Howdy ${otherCharacter.name}!`)
    }

    setHair(hairColor) {
        this.hair = hairColor
    }

    walk() {
        console.log('Its a lovely day for a stroll')
    }

    // Static method only th class itself can use
    static about() {
        console.log(`This is the character class, ${Character.numberOfInstances} instances have been created.`)
    }
}


/* Instantiating a class
-------------------------------------------------------------- */
const me = new Character('Scott', undefined, 'blue', 'brown')
const you = new Character(null, '2 Weeks', 'hazel', 'gray')
console.log(me)
console.log(you)

// Using prototype methods
me.greet('you')
me.walk()
you.classyGreeting(me)
you.setHair('purple')
console.log(you)

// Using static methods & properties
Character.about()


/* Building a custom subclass
-------------------------------------------------------------- */
class Hobbit extends Character {
    // Only use a constructor in a subclass if you're adding/overriding properties
    constructor(name, eyes, hair, height) {
        super(name, undefined, eyes, hair);
        this.hobby = 'eating';
        this.height = height;
    }

    // New function specific to the Hobbit subclass
    steal() {
        console.log('lets get away!')
    }
    // Updated function specific to the Hobbit subclass
    greet(otherCharacter) {
        console.log(`Hello ${otherCharacter}`)
    }
}


/* Instantiating a subclass
-------------------------------------------------------------- */
const frodo = new Hobbit('Frodo', 'brown', 'blue', '1 meter')
console.log(frodo)

// using prototype methods from the superclass
frodo.walk()

// using prototype methods specific to the subclass
frodo.greet('Sam')
frodo.steal()