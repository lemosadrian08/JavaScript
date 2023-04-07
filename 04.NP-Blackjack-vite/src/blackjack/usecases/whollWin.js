export const whollWin =(playerSPointsArray)=>{

    const [points, computerSPoints] = playerSPointsArray

    setTimeout(() => {
        (computerSPoints===21 && points===21)? alert('Nobody won'):
        (points>21)? alert('The computer won'):
        (points===21 && computerSPoints>21)? alert('The player won'):
        (computerSPoints>21)? alert('The player won'):
        (computerSPoints>points)? alert('The computer won') : alert('The player won')
        
    }, 100);
}