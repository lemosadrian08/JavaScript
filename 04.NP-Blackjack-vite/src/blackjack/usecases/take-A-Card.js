 /** 
 * This function allows you to take a card
 * @param {Array<String>} deck 
 * @returns {String} returns a card 
 */  


  export const takeACard = (deck) =>{
    if (!deck || deck.length === 0) {
        throw new Error('There no cards on the deck')
    }
    return deck.pop();
}
