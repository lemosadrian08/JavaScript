
const adrian = {
    firstName: 'adrian',
    age: 32,
    print(){
        console.log(`Name: ${adrian.firstName} - Age: ${adrian.age}`);
    }
}

//in a method if we want to make a reference to the same object we use this

const adrian2 = {
    firstName: 'adrian',
    age: 32,
    print(){
        console.log(`Name: ${this.firstName} - Age: ${this.age}`);
    }
}



const melisa = {
    firstName: 'melisa',
    age: 32,
}

adrian.print()
adrian2.print()


//Before ES6 we create the classes in this way

function Person(firstName, age) {
    this.firstName = firstName,
    this.age = age,
    this.print = function(){
        console.log(`Name: ${this.firstName} - Age: ${this.age}`);
    }

}

// new create a new instance of the function Person

const maria = new Person ('maria', 18)
console.log(maria);






