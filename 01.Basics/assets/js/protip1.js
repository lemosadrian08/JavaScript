/* 
Rest parameters
In a tradiditional function we can read the "arguments" object, but in an arrow function we can't.
So we have the "..."  that allow as to read the arguments.It brings an array with the arguments that we pass
*/

const getArguments = (...args) => {
    console.log(args);
}


getArguments(12, "hello",{'1':'cats','2':'dogs'})



/* 
Destructuring
({arrayProperty1,arrayProperty1})
*/

const tony = {
    characerName: 'Tony Stark',
    codeName: 'Iron Man',
    isHeAlive: false,
    age: 40,
    cordinates:{
        latitude: 34,
        length: -118
    }
}

const heroeProperties = ({characerName,codeName,isHeAlive,age,cordinates}) => {
    console.log(characerName);
    console.log(codeName);
    console.log(isHeAlive);
    console.log(age);
    console.log(cordinates);
}

heroeProperties(tony)