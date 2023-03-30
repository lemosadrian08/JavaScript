const character = {
    characerName: 'Tony Stark',
    codeName: 'Iron Man',
    isHeAlive: false,
    age: 40,
    cordinates:{
        latitude: 34,
        length: -118
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    direction:{
        zip: '11080',
        location: 'Malibu, California'
    }
}


console.log(character);
console.log(character.characerName);
console.log(character.codeName);
console.log(character.age);
console.log(character.isHeAlive);
console.log(character.cordinates.latitude);
console.log(character.cordinates.length);
console.log(character.suits[0]);
console.log(character.suits[1]);
console.log(character.suits[2]);
console.log(character.direction.zip);
console.log(character.direction.location);

// Delete a property
delete character.age

// Change a property value
character.codeName= 'Captain America'

console.log(character);

/* 
Object that contains the properties and methods.
This can be an object that you created or an existing Document Object Model (DOM) object.
Returns an array of key/values of the enumerable properties of an object
*/
const entriesPaers = Object.entries( character );
console.log( 'entriesPaers', entriesPaers );



const properties = Object.getOwnPropertyNames( character );
const values = Object.values( character );

console.log(properties,values);
