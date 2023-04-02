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
        deck = createDeck();
        playerSPointsArray=[]
        for( let i = 0; i< numberOfPlayers; i++){
            playerSPointsArray.push(0)
        }

        pointsSmall.forEach( elem => elem.innerText = 0)

        playerSCardDiv.forEach( elem => elem.innerHTML='' )
    
        btnAsk.disabled = false;
        btnStand.disabled = false; 

    };


    // This function crate a a new deck
    const createDeck = () =>{
        deck=[];
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
    
    
    // This function allows you to take a card
    
    const takeACard = () =>{
        if (deck.length === 0) {
            throw 'There no cards on the deck'
        }
        return deck.pop();
    }
    
    
    
    const cardValue = ( card ) => {
        const value = card.substring(0, card.length -1 ) // example: 2D => 2, 10H => 10 
        // isNaN Is not a number 
    /*     isNaN (value)  ? console.log("string"):console.log("number");  */
        return ( isNaN( value ) ) ? 
                ( value === 'A' ) ? 11 : 10
                : value * 1; //this transform a string in a number
    }
    

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
            const card=   takeACard() ;
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
        const card=   takeACard() ;
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
