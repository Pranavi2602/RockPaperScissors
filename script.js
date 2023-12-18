function pickComputermove(){
    const randomNumber = Math.random();

    let computerMove='';
    
        if(randomNumber>=0 && randomNumber< 1/3){
             computerMove='rock'
        }else if(randomNumber>=1/3 && randomNumber<2/3){
             computerMove='paper'
        }else if(randomNumber>=2/3 && randomNumber<1){
             computerMove='scissors'
        }
        return computerMove;
    }


    function playGame(playerMove){
        const computer=pickComputermove();

        let result='';

    if(playerMove==='rock'){
        if(computerMove==='rock'){
            result='tie'
        }else if(computerMove==='paper'){
            result='you lose'
        }else if(computerMove==='scissors'){
            result='you win'
        }
    }else if(playerMove==='paper'){
        if(computerMove==='rock'){
            result='you win'
        }else if(computerMove==='paper'){
            result='Tie'
        }else if(computerMove==='scissors'){
            result='you lose'
        }
    }else if(playerMove==='scissors'){
        if(computerMove==='rock'){
            result='you win'
        }else if(computerMove==='paper'){
            result='you lose'
        }else if(computerMove==='scissors'){
            result='Tie'
        }
    }


       alert(`you picked:${playerMove},computermove:${computerMove},result:${result}`) ;

    }
