import { takeACard } from './take-A-Card'; 
import { accumulatePoints } from './accumulatePoints';
import { whollWin } from './whollWin';  
import { crateCard } from './crateCard';

/** 
 * Computer's turn
 * @param {Number} points minimun point that the computer need to win
 * @param {Array<String>} deck Example: ['A','J','Q','K'] 
 * @param {Array<String>} playerSPointsArray Example: ['A','J','Q','K'] 
 */  


  //
 export const computerSTurn = ( points, deck, playerSPointsArray, pointsSmall, playerSCardDiv) => {

    if (!points) throw new Error ('The param points is required')
    if (!deck) throw new Error ('The param deck is required')

    let computerSPoints = 0;
    do {
        const card=   takeACard( deck ) ;
        computerSPoints = accumulatePoints(card, playerSPointsArray.length-1, playerSPointsArray, pointsSmall )
        crateCard(card, playerSPointsArray.length-1, playerSCardDiv )

    } while ( (computerSPoints < points) && ( points <= 21) );

    whollWin( playerSPointsArray );

}



