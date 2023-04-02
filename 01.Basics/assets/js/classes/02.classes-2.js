
class Person {
    // static -> they are call without instantiate

    static _count = 0
    static message () {
        console.log(this.name); //undefined
        console.log('hello my friends');
    }



    constructor(fullName ='no data', code ='no data', age ='no data'){
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

const spiderMan = new Person('Peter Parker', 'Spider-Man', 18 )



spiderMan.whoAmI()
spiderMan.myAge()


spiderMan.setFavoryteFood = 'pie'
console.log(spiderMan);

console.log(spiderMan.getFavoryteFood);

console.log(Person._count);
Person.message()
