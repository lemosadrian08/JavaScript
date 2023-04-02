class Person {

    static byObject({ name, country, age}){
        return new Person (name,country,age)
    }


    constructor(name, country, age){
        this.name=name
        this.country=country
        this.age=age
    }

    getInfo(){
        console.log(`name: ${this.name}, country: ${this.country}, age:${this.age}`);
    }
}


const name1 = 'adrian',
   country1 = 'Argentina',
       age1 = 32;

const obj1={
    name : 'marcos',
    country: 'canada',
    age: 44
}

const person1 = new Person (name1, country1, age1)
const person2 =  Person.byObject(obj1)


person1.getInfo()
person2.getInfo()
