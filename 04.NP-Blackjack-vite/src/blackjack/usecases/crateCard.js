


export const crateCard = (card, turn, playerSCardDiv) => {
    const imgCard = document.createElement('img')
    imgCard.src = `assets/cards/${card}.png`
    imgCard.classList.add('card')
    playerSCardDiv[turn].append( imgCard )
    
}