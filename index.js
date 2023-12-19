

function game()
    {

    const playerselection = prompt("Whats your choice?").toLowerCase(); 
    const computerSelection = getComputerChoice();
    let playerScore = 0;
    let computerScore = 0;
    console.log(computerSelection);
    alert(playRound(playerselection, computerSelection));
    alert("The player score is " + playerScore);
    alert("The computer score is " + computerScore); 

    function playRound(playerselection, computerSelection){
        
        if (playerselection == computerSelection){

            return "Its a tie!";
        }
        if (playerselection == "rock" && computerSelection == "paper"){
            computerScore++;
            return "You have lost!";
        }
        if (playerselection == "rock" && computerSelection == "scissors"){
            playerScore++;
            return "You have won!";
        }
        if (playerselection == "paper" && computerSelection == "rock"){
            playerScore++;
            return "You have won!";
        }   
        if (playerselection == "paper" && computerSelection == "scissors"){
            computerScore++;
            return "You have lost!";
        }
        if (playerselection == "scissors" && computerSelection == "paper"){
            playerScore++;
            return "You have won!";
        }
        if (playerselection == "scissors" && computerSelection == "rock"){
            computerScore++;
            return "You have lost!";
        } 
    }


    function getComputerChoice()
        {
            let computerChoice = Math.floor(Math.random() * 3);
        
                if (computerChoice == 0){
                    return "rock";
                }
                if  (computerChoice == 1 ){
                    return "paper";
                }
                if (computerChoice == 2){
                    return "scissors";
                }

        }

    }
