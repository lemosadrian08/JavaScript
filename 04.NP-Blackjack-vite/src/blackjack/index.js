

import { takeACard, computerSTurn, accumulatePoints } from './usecases/index' 
import { crateCard } from './usecases/crateCard';
import { createDeck } from './usecases/index';
/* 
2C = two of clubs
2D = two of diamonds
2H = two of hearts
2S = two of spades
*/

/*
Immediately-Invoked Function Expression
 (()=>{})() 
 The forebid people to invoke variables on the frontend
*/


(()=>{

  let deck           = [];
  const types        = ['C','D','H','S'],
        spetialTypes = ['A','J','Q','K'];
/*     let playerSPoints = 0,
      computerSPoints = 0; */

  let playerSPointsArray=[]
  
  const numberOfPlayers = 2
  
  // HTML References
  const btnAsk = document.querySelector('#btnAsk'),
        btnStand = document.querySelector('#btnStand'),
        btnNew = document.querySelector('#btnNew');
  const playerSCardDiv = document.querySelectorAll('.divCards');
  const pointsSmall = document.querySelectorAll('small')
  


  // This function initializes the game
   const inicilizeGame = () =>{
    deck = createDeck (types,spetialTypes);
    playerSPointsArray=[]
    for( let i = 0; i< numberOfPlayers; i++){
        playerSPointsArray.push(0)
    }

    pointsSmall.forEach( elem => elem.innerText = 0)

    playerSCardDiv.forEach( elem => elem.innerHTML='' )


    btnAsk.disabled = false;
    btnStand.disabled = false; 
};

  
  // Events
  
  /* 
  callback is a function that is call as an argument in another function
  */
  
  btnAsk.addEventListener('click', ()=>{
      const card=   takeACard( deck ) ;
      const playerSPoints = accumulatePoints(card, 0, playerSPointsArray, pointsSmall);
      
      crateCard(card,0, playerSCardDiv)
  
  
      if ( playerSPoints > 21 ) {
          console.warn('sorry, you lost :(')
          btnAsk.disabled = true
          btnStand.disabled = true;
          computerSTurn(playerSPoints, deck, playerSPointsArray, pointsSmall, playerSCardDiv );
      } else if (playerSPoints===21){
          btnAsk.disabled = true
          btnStand.disabled = true;
          console.log('21, well done! :)');
          computerSTurn(playerSPoints, deck, playerSPointsArray, pointsSmall, playerSCardDiv );
      }
  
      
  })
  
  btnStand.addEventListener('click', ()=>{
      btnAsk.disabled = true;
      btnStand.disabled = true;
      computerSTurn(playerSPointsArray[0], deck, playerSPointsArray , pointsSmall,  playerSCardDiv);
  
  })
  
  btnNew.addEventListener('click', ()=>{
      console.log({deck});
      inicilizeGame()

  })
  
})()
