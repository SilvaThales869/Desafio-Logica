let rank = "ferro"// variable for the rank
let champ = "teros"// variable for the choosen character
let winrate // variable for the win rate of the chossen character
let victory = 0 // variable to count victorys
let defeat = 0// variable to store the defeats
let matches = 10// variable to determine the number of matches
function game(rate){// function to calculate the result of a game
    let result = Math.random()//gives a random number between 0 and 0.99
    if (result<=rate){ // compares the result withe the win rate of the character
     return 1
    } 
    else{
     return 0
    }
}
function balance(w,l){// function to calculate the balace
    return w-l
}

switch(champ){// control function to choose the win rate
    case "teros":    
        winrate = 0.9
        break
    case "koji":
        winrate = 0.8
        break
    case "kor":
        winrate = 0.7
        break
    case "azoth":
        winrate = 0.6
        break
    case "cross":
        winrate = 0.4
        break            
    default:
        winrate = 0.5
}
console.log(winrate)



for(let cont = 0;cont<=e;cont++){// loop to calculate how many matches the user won
    let outcome= game(winrate)
    victory = victory + outcome
}
defeat = matches-victory

// selecting the rank of the user
if(victory<=10)
rank = "Ferro"
else if(victory>=11&victory<=20)
rank = "Bronze"
else if(victory>=21&victory<=50)
rank = "Prata"
else if(victory>=51&victory<=80)
rank = "Ouro"
else if(victory>=81&victory<=90)
rank = "Diamante"
else if(victory>=91&victory<=100)
rank = "Lendário"
else
rank = "Imortal"
// final result
console.log("O herói tem saldo de "+balance(victory,defeat)+" está no nível de "+rank)