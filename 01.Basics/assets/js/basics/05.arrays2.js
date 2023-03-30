const games = ['Zelda', 'Mario', 'Metroid', 'Warcraft'];

const gamesLength = games.length
console.log('length =>', gamesLength);

// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
games.forEach( (value, index, array) => {
    console.log( 'forEach =>', {value, index, array} );
});
// Appends new elements to the end of an array, and returns the new length of the array.
let newLenght = games.push('F-Zero');
console.log( 'push =>', newLenght, games );

// Inserts new elements at the start of an array, and returns the new length of the array.
newLenght = games.unshift('Fire Emblem');
console.log( 'unshift =>', newLenght, games );

// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let deletedGame = games.pop();
console.log( 'pop =>', deletedGame, games );

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let deletedGames = games.splice( 1, 2 );
console.log('splice =>', deletedGames, games);

//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
const fireEmblemIndex = games.indexOf('Fire Emblem')
console.log('indexOf =>', fireEmblemIndex);
