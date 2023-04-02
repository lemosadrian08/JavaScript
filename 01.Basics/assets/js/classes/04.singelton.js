//the singleton pattern is a software design pattern that restricts the instantiation of a class to a singular instance.

class SingletonClass {

    static instance; // undefined
    name = '';

    constructor( name = '' ) {
   
        if ( !!SingletonClass.instance ) {
            return SingletonClass.instance;
        }

        SingletonClass.instance = this;
        this.name = name;
    }

}

const instance1 = new SingletonClass('Ironman');
const instance2 = new SingletonClass('Spiderman');
const instance3 = new SingletonClass('BlackPanther');


console.log(`The instance's name is: ${ instance1.name }`);
console.log(`The instance's name is: ${ instance2.name }`);
console.log(`The instance's name is: ${ instance3.name }`);
