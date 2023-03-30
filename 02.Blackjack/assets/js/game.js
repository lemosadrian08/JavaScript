/* 
2C = two of clubs
2D = two of diamonds
2H = two of hearts
2S = two of spades
*/

let deck           = [];
const types        = ['C','D','H','S']
const spetialTypes = ['A','J','Q','K']

// This function crate a a new deck
const createDeck = () =>{

    for( let i=2; i<=10; i++){
        for(let type of types){
            deck.push(i + type)
        }
    }
    for( let type of types){
        for(let spetialType of spetialTypes){
            deck.push( spetialType + type)
        }
    }
    deck = _.shuffle( deck )
    console.log(deck);
   return deck
}

createDeck()

// This function allows you to take a card

const takeACard = () =>{

    if (deck.length === 0) {
        throw 'There no cards on the deck'
    }
    const card = deck.pop()
    console.log(card);
    console.log(deck);
    return card
}



const cardValue = ( card ) => {

    const value = card.substring(0, card.length -1 ) // example: 2D => 2, 10H => 10 
    console.log({value}, typeof value);
    // isNaN Is not a number 
    isNaN (value)  ? console.log("string"):console.log("number"); 
    return ( isNaN( value ) ) ? 
            ( value === 'A' ) ? 11 : 10
            : value * 1; //this transform a string in a number
}

cardValue(takeACard())
cardValue(takeACard());