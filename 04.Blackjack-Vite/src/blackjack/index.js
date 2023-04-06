import { createDeck } from './usecases/create-deck'
import { takeACard } from './usecases/take-A-Card';
import { cardValue } from './usecases/card-value';
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
  
  
  
  // HTML References
  const btnAsk = document.querySelector('#btnAsk'),
        btnStand = document.querySelector('#btnStand'),
        btnNew = document.querySelector('#btnNew');
  const playerSCardDiv = document.querySelectorAll('.divCards');
  const pointsSmall = document.querySelectorAll('small')
  
  // This function initializes the game
  const inicilizeGame = ( numberOfPlayers = 2 ) =>{
      deck = createDeck(types,spetialTypes);
      playerSPointsArray=[]
      for( let i = 0; i< numberOfPlayers; i++){
          playerSPointsArray.push(0)
      }

      pointsSmall.forEach( elem => elem.innerText = 0)

      playerSCardDiv.forEach( elem => elem.innerHTML='' )
  
      btnAsk.disabled = false;
      btnStand.disabled = false; 

  };


  

  
  

  

  /* 
  turn=0 -> first player,
  turn=1 -> second player

  last turn -> computer
  */
  const accumulatePoints = (card, turn ) =>{
      playerSPointsArray[turn] = playerSPointsArray[turn] + cardValue(card)
      pointsSmall[turn].innerText= playerSPointsArray[turn]
      return playerSPointsArray[turn]
  }

  const crateCard = (card, turn) => {
    const imgCard = document.createElement('img')
    imgCard.src = `assets/cards/${card}.png`
    imgCard.classList.add('card')
    playerSCardDiv[turn].append( imgCard )
    
}


  const WhollWin =()=>{

      const [points, computerSPoints] = playerSPointsArray

      setTimeout(() => {
          (computerSPoints===21 && points===21)? alert('Nobody won'):
          (points>21)? alert('The computer won'):
          (points===21 && computerSPoints>21)? alert('The player won'):
          (computerSPoints>21)? alert('The player won'):
          (computerSPoints>points)? alert('The computer won') : alert('The player won')
          
      }, 100);
  }

  //computer's turn
  const computerSTurn = ( points ) => {
      let computerSPoints = 0;
      do {
          const card=   takeACard( deck ) ;
          computerSPoints = accumulatePoints(card, playerSPointsArray.length-1)
          crateCard(card, playerSPointsArray.length-1)

      } while ( (computerSPoints < points) && ( points <= 21) );
  
      WhollWin();
  
  }
  
  // Events
  
  /* 
  callback is a function that is call as an argument in another function
  */
  
  btnAsk.addEventListener('click', ()=>{
      const card=   takeACard( deck ) ;
      const playerSPoints = accumulatePoints(card, 0);
      
      crateCard(card,0)
  
  
      if ( playerSPoints > 21 ) {
          console.warn('sorry, you lost :(')
          btnAsk.disabled = true
          btnStand.disabled = true;
          computerSTurn(playerSPoints);
      } else if (playerSPoints===21){
          btnAsk.disabled = true
          btnStand.disabled = true;
          console.log('21, well done! :)');
          computerSTurn(playerSPoints);
      }
  
      
  })
  
  btnStand.addEventListener('click', ()=>{
      btnAsk.disabled = true;
      btnStand.disabled = true;
      computerSTurn(playerSPointsArray[0]);
  
  })
  
  btnNew.addEventListener('click', ()=>{
      console.log({deck});
      inicilizeGame()

  })
  
})()
