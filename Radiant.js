const prompt = require("prompt-sync") ({sigint: true}) // Comand to enable user inputs
var xp = 523 // variable to store the hero experience
var GoblinCount = 0 // variable to store how many times the user selected to kill goblins
var RunCount = 0 // variable to store how many times the user selected to run
var lvl = "Iron" // variable to store the hero level
var q1 = "0" // variable to store the user choise
var end = 0 // variable to determine the ending
console.log("This is a 'chose your own adventure game") //tutorial
console.log("Everytime you need to make a choise type the letter of the alternative, not the action")//tutorial
console.log("Have fun")//tutorial
console.log("---------------------------------------------------------------------------------------------------------------------")//tutorial
console.log("You, a simple peasant, frustrated with al the chaos and injustice in the world, decides to follow the goddess quest and defeat the demon king in your own hands and become the legendary hero")// introduction
console.log("All yours life expirences and insect murders until now have garanted you "+xp+" XP making you a "+lvl+" Level hero")//introduction

do{ // loop to avaliete the users level and direct then to the right path
    if(xp<=1000){ // iron lvl loop
    lvl = "Iron" // lvl atualization
    console.log("Starting your adventure you encounter a group of goblins. WDYD?") //  level question
    console.log("A) Fight")// first option
    console.log("B) Run") // second option
    q1 = prompt() // copmand to get the users input
        if(q1=="B"|q1=="b"){ //run case
            do { // running loop until the user decides to fight or achieve the coward ending
                RunCount++
                console.log("After you fled the last fight, you encountered another group of goblins. What do you do?")
                console.log("A) Fight")
                console.log("B) Run")
                q1 = prompt()
                } while ((RunCount<4)&(q1=="b"|q1=="B"))
                if(q1=="a"|q1=="A"){//fight case
                    console.log("+500 XP")
                    GoblinCount++// progress toward the goblin ending
                    xp = xp + 500}// experience gained
                else if (q1=="b"|q1=="B"){
                    end = 2
                }   
                else { //in case the users input something other than the alternatives they unlock an ending
                    end = 1
                }
        }
        else if(q1=="a"|q1=="A"){//fight case
            console.log("+500 XP")
            GoblinCount++
            xp = xp + 500}
        else{
            end=1
        }    
    }
    else if(xp>=1001&xp<=2000){//bronze loop
    lvl = "Bronze"
    console.log("After this battle you have "+xp+" XP and has become a "+lvl+" level hero")
    console.log("After a well deserverd rest you continue yor jurney")
    console.log("Down the south road you encounter a kobold camp with some hight ranks among then. What do you do?")
    console.log("A) Fight")
    console.log("B) Run")
    console.log("C) Look for more goblins to fight")
    q1 = prompt()//choice
    if(q1=="B"|q1=="b"){//run case
        do {
            RunCount++
            console.log("After you enjoy a little more your life you come back to the kobold camp. What do you do?")
            console.log("A) Fight")
            console.log("B) Run")
            console.log("C) Look for more goblins to fight")
            q1 = prompt()
            } while ((RunCount<4)&(q1=="b"|q1=="B"))
            if(GoblinCount>=5){ //checking for the goblinslayer ending
                end=3
            }
            if(q1=="c"|q1=="C"){ // goblin case 
                console.log("You look around a little and find another goblin camp, you destroy then")
                console.log("+500 XP")
                GoblinCount++ //progres towards the goblin slayer ending
                xp = xp + 500}//some experience for killing the goblins
            else if (q1=="b"|q1=="B"){// checking for run ending
                end = 2
            } 
            else if(q1=="a"|q1=="A"){//fight case
                console.log("You infiltrate at night and start eliminating the higher ups to creat some chaos and then finishng the camp")
                console.log("+1231 XP")
                xp=xp+1231
            }  
            else {// else ending
                end = 1
            }
    }
    if(GoblinCount>=5){// checking for goblin ending
        end=3
    }
    else if(q1=="a"|q1=="A"){// fight case
        console.log("You infiltrate at night and start eliminating the higher ups to creat some chaos and then finishng the camp")
        console.log("+1231 XP")
        xp = xp + 1231}
    else if(q1=="c"|q1=="C"){// goblin case
            console.log("You look around a little and find another goblin camp, you destroy then")
            console.log("+500 XP")
            GoblinCount++
            xp = xp + 500}    
    else{
        end=1
    }    
    }
    else if(xp>=2001&xp<=5000){// siver loop
    lvl = "Silver"
    console.log("After this battle you have "+xp+" XP and has become a "+lvl+" level hero")
    console.log("Following the road you reach a bigger city and have a good rest" )
    console.log("The next day in the tavern you hear some rumors about a group of bandits atacking this town" )
    console.log("Affter some investigation you discover their hidout. What do you do?" )
    console.log("A) Fight")
    console.log("B) Run")
    console.log("C) Look for more goblins to fight")
    q1 = prompt()
    if(q1=="B"|q1=="b"){
        do {
            RunCount++
            console.log("After you enjoy a little more your life you come back to the bandit hidout. What do you do?")
            console.log("A) Fight")
            console.log("B) Run")
            console.log("C) Look for more goblins to fight")
            q1 = prompt()
            } while ((RunCount<4)&(q1=="b"|q1=="B"))
            if(GoblinCount>=5){
                end = 3
            }
            if(q1=="c"|q1=="C"){
                console.log("You look around the city a little until you find another goblin camp, you destroy it")
                console.log("+500 XP")
                GoblinCount++
                xp = xp + 500}
            else if (q1=="b"|q1=="B"){
                end = 2
            } 
            else if(q1=="a"|q1=="A"){
                console.log("You stalk the bandits taking ou one by one until you are face to face with the boss finally punting an end to their organization")
                console.log("+3154 XP")
                xp=xp+3154
            }  
            else {
                end = 1
            }
    }
    if(GoblinCount>=5){
        end=3}
    else if(q1=="a"|q1=="A"){
        console.log("You stalk the bandits taking ou one by one until you are face to face with the boss finally punting an end to their organization")
        console.log("+3154 XP")
        xp = xp + 3154}
    else if(q1=="c"|q1=="C"){
        console.log("You look around the city a little until you find another goblin camp, you destroy it")
        console.log("+500 XP")
            GoblinCount++
            xp = xp + 500}    
    else{
        end=1
    }
}    
    else if(xp>=5001&xp<=7000){// gold loop
    lvl = "Gold"
    console.log("After this battle you have "+xp+" XP and has become a "+lvl+" level hero")
    console.log("After partying with the city you continue your journey to the demon king castle")
    console.log("Blocking your way are some demon guards lead by a demon general. What do you do?")
    console.log("A) Fight")
    console.log("B) Run")
    console.log("C) Look for more goblins to fight")
    q1 = prompt()
    if(q1=="B"|q1=="b"){
        do {
            RunCount++
            console.log("After you enjoy a little more your life you come back to the guards locatiom. What do you do?")
            console.log("A) Fight")
            console.log("B) Run")
            console.log("C) Look for more goblins to fight")
            q1 = prompt()
            } while ((RunCount<4)&(q1=="b"|q1=="B"))
            if(GoblinCount>=5){
                end=3
            }
            if(q1=="c"|q1=="C"){
                console.log("You look around a little and find another goblin camp, you destroy it")
                console.log("+ 500 XP")
                GoblinCount++
                xp = xp + 500}
            else if (q1=="b"|q1=="B"){
                end = 2
            } 
            else if(q1=="a"|q1=="A"){
                console.log("You ask for a duel with the general and after you defeat it the other guards run away")
                console.log("+ 2231 XP")
                xp=xp+2231
            }  
            else {
                end = 1
            }
    }
    if(GoblinCount>=5){
        end=3
    }
    else if(q1=="a"|q1=="A"){
        console.log("You ask for a duel with the general and after you defeat it the other guards run away")
        console.log("+ 1998 XP")
        xp = xp + 1998}
    else if(q1=="c"|q1=="C"){
        console.log("You look around a little and find another goblin camp, you destroy it")
        console.log("+ 500 XP")
        GoblinCount++
        xp = xp + 500}    
    else{
        end=1
    }
}    
    else if(xp>=7001&xp<=8000){// platinum loop, here fighting goblins is not a option anymore
        lvl = "Platinum"
        console.log("After this battle you have "+xp+" XP and has become a "+lvl+" level hero")
        console.log("Following her defeat the demon general guides you to the demon king palace")
        console.log("Now you are face to face with thew demon king right arm man. What do you do?")
        console.log("A) Fight")
        console.log("B) Run")
        q1 = prompt()
        if(q1=="B"|q1=="b"){// chosing to run here gives the user the coward endig
            end = 2
        }
        else if(q1=="a"|q1=="A"){
            console.log("You defeat your foe by outsmarting then")
            console.log("+1000 XP")
            xp = xp + 1000}
        else{
            end=1
        }    
    }
    else if(xp>=8001&xp<=9000){// ascendant loop
        lvl = "Ascendant"
        console.log("After this battle you have "+xp+" XP and has become a "+lvl+" level hero")
        console.log("Advancing to the throne room you finaly encounter the Demon King. What do you do?")
        console.log("A) Fight")
        console.log("B) Run")
        q1 = prompt()
        if(q1=="B"|q1=="b"){// chosing to run here gives the user the coward endig
            end = 2
        }
        else if(q1=="a"|q1=="A"){
            console.log("It was the hardest battle of your life, but you managed to land a lucky strike ande defeat the Demon King")
            console.log("+1000 XP")
            xp = xp + 1000}
        else{
            end=1
        }    
    }
    
    else if(xp>=9001&xp<=10000){// immortal loop
        lvl = "Immortal"
        console.log("After this battle you have "+xp+" XP and has become a "+lvl+" level hero")
        console.log("Moments before you land the last hit you hear the Demon King asking forgviness to your Goddess, telling her he wasnt capable of stoping the human threat")
        console.log("What do you do with this new information")
        console.log("A) Try to talk with the demon kin")
        console.log("B) It's a trap, finish him and come back home")
        q1 = prompt()
        if(q1=="B"|q1=="b"){// choosing B gives the user the hero ending
        end = 4}
        else if(q1=="a"|q1=="A"){//chosing leads to the final fight and gives the radiant ending
            console.log("You join forces with the Demon King and confront the Gods manipulating the leaving realm just to create some entertaining for their eternal excistence")
            console.log("When the battle exploded you make a combined atack with the demon kig, his forces and the forces of humanity fanally putting an end to the manipulation of the gods")
            console.log("+1000 XP")
            xp = xp + 1000}
    }
    
    else{
    lvl = "Radiant"
    console.log("After this battle you have "+xp+" XP and has become a "+lvl+" level hero")
    end = 5
    }
}while(end == 0)
// choosing the ending
if(end==1){
    console.log("At the first crossroad you remember a crucial information")
    console.log("YOU CAN'T READ")
    console.log("So you go back home hire a private tutor")
}

else if(end==2){
    console.log("You can't take it anymore, beeing a hero was never your dream, all these fight just scares you so much.")
    console.log("You go back home to your peacefull life hoping someone more capable is going to take down the Demon King")
}

else if (end==3){
    console.log("After fighting this many goblins and watch all the destruction they cause, you realize the Demon king isn't the only threat to the world and even after his defeat the smaller pronblens arn't going to resolve thenselves ")
    console.log("So you devote your life to exterminate all the goblins in the world while someone else take the Demon King, and so bringing true peace to the world")
}

else if (end==4){
    console.log("You came back home as the hero who defeated the Demon King and lived the brst of lives")
    console.log("The time passes until you and the rest of humanity hear the call from the God once angain warning the Demon King has rised and is one more time threatening your spieces")
}
else{
    console.log("You defeated the Gods forging an aliance with the demon kind and now you two fight together for a world with equal chanses for all the sentient races ")
}
console.log("ENDING "+end)// showing the ending
console.log("The hero has ended the adventure as a " + lvl + " level hero")// Show wich endin the user got 
