let score =  JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement()

     function playGame(playerMove){
    const computerMove = pickComputerMove()

    if (playerMove === 'scissors'){
      if (computerMove === 'rock'){ 
      result ='You lose'
    } else if (computerMove === 'paper'){
      result ='You win'
    } else if (computerMove === 'scissors'){
      result = 'Tie'
    }

  }else if (playerMove ==='paper'){
      if (computerMove === 'rock'){ 
      result ='You win'
    } else if (computerMove === 'paper'){
      result ='Tie'
    } else if (computerMove === 'scissors'){
      result = 'You lose'
    }
    
  } else if (playerMove ==='rock'){
      if (computerMove === 'rock'){ 
      result ='Tie'
    } else if (computerMove === 'paper'){
      result ='You lose'
    } else if (computerMove === 'scissors'){
      result = 'You win'
    }
  }

  if (result === 'You win'){
    score.wins ++
  } else if (result === 'You lose'){
    score.losses ++
  } else if (result === 'Tie'){
    score.ties ++
  }

  localStorage.setItem('score', JSON.stringify(score))

  document.querySelector('.js-result').innerHTML = result
  document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`
  document.querySelector('.js-score').innerHTML = score

  updateScoreElement()

 
  } //the "win losses ties" have no spaces to make the alert more readable
    
function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function pickComputerMove //a verb or action name is recommended to naming functions
(){
  const randomNumber = (Math.random()); 
    //<!--generates a number that is greater or equal than 0 and less than 1 (0<= Math.random() <1) -->
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1/3 ){
    computerMove = 'rock'; 
  } else if (randomNumber >= 1/3 && randomNumber < 2/3 ){
    computerMove = 'paper'; 
  } else if (randomNumber >= 2/3 && 1){
    computerMove = 'scissors'; 
  }
  return computerMove //the syntax for return is simple as is writen. If the return doesn't have a value, will return "undefined" 
  console.log("this line won't run cause when we use return, we go back to where the funcion was called")//this line won't run cause when we use return, we go back to where the funcion was called
}