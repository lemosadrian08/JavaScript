
class Person {
    // static -> they are call without instantiate

    static _count = 0
    static message () {
        console.log(this.name); //undefined
        console.log('hello my friends');
    }



    constructor(fullName, code, age){
        this.fullName = fullName,
        this.code = code,
        this.age = age

        Person._count++ //add one every time that an instance is call
    }


    //set: to set a value
    set setFavoryteFood(food){
        this.food=food
    }

    get getFavoryteFood(){
        return `${this.firstName}´favorite food is ${this.food}`
    }

    whoAmI(){
       console.log(`My name is ${this.firstName} and I'm ${this.code}`); 
    }

    myAge(){
        this.whoAmI()
        console.log(`I'm ${this.age}`)

    }
}


class Heroe extends Person{

    constructor(firstName,code,age,clan){
        super(firstName,code,age)
        this.clan= clan
    }

    whoAmI(){
        console.log(`My name is ${this.firstName} and I'm from ${this.clan}`)
        super.whoAmI() //this call Person's method
    }
}

const spiderMan = new Heroe('Peter Parker', 'Spider-Man', 18, 'the avengers' )

console.log(spiderMan);
spiderMan.whoAmI()
