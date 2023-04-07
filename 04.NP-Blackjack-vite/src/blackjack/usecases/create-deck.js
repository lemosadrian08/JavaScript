import _ from 'underscore'

/** 
 * This function crate a a new deck
 * @param {Array<String>} types Example: ['C','D','H','S'] 
 * @param {Array<String>} spetialTypes Example: ['A','J','Q','K'] 
 * @returns {Array<String>} returns a new deck 
 */  


  // This function crate a a new deck
  export const createDeck = (types, spetialTypes) =>{
    
    if (!types || types.length === 0) throw new Error ('The param types is required and it has to be > 0')
    if (!spetialTypes || spetialTypes.length === 0) throw new Error ('The param spetialTypes is required and it has to be > 0')
    
    let deck=[];
    for( let i=2; i<=10; i++){
        for(let type of types){
            deck.push(i + type);
        }
    }
    for( let type of types){
        for(let spetialType of spetialTypes){
            deck.push( spetialType + type);
        }
    }
   return _.shuffle( deck );
};