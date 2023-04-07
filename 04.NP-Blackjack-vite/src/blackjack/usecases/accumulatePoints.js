import { cardValue } from "./card-value"  
  
  /* 
  turn=0 -> first player,
  turn=1 -> second player

  last turn -> computer
  */
 export const accumulatePoints = ( card, turn, playerSPointsArray, pointsSmall ) =>{
    playerSPointsArray[turn] = playerSPointsArray[turn] + cardValue(card)
    pointsSmall[turn].innerText= playerSPointsArray[turn]
    return playerSPointsArray[turn]
}