/** 
 * This function give you the value uf a card
 * @param {String} deck 
 * @returns {Number} returns the value of the card
 */  


export const cardValue = ( card ) => {
    const value = card.substring(0, card.length -1 ) // example: 2D => 2, 10H => 10 
    // isNaN Is not a number 
/*     isNaN (value)  ? console.log("string"):console.log("number");  */
    return ( isNaN( value ) ) ? 
            ( value === 'A' ) ? 11 : 10
            : value * 1; //this transform a string in a number
}