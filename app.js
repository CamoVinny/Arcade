const board = document.getElementById("gameArea");
const startButton = document.getElementById("startButton");
const currentScore = document.getElementById("currentScore")
const highScore = document.getElementById("highScore")
const difficulty = document.getElementById("Difficulty")
const popUp = document.getElementById("loserPopUp")
const popUpButton = document.getElementById("popUpButton")
let resetSnake = ["4,5","3,5","2,5","1,5","0,5"];
let playerCurrScore = 0
let bestScore = 0
let globalSnake = ["4,5","3,5","2,5","1,5","0,5"];
let snakeDirection = "down";
let interval
let intervalNum = 500
let gameRunning = false
startButton.addEventListener("click", function(){   
    if(gameRunning === false){
        interval = setInterval(tick, intervalNum);
    }      
    gameRunning = true
});
//function below creates row with 40 cells in each row and assigns cells with IDs
function makeRow(rowIndex){   
    let row = document.createElement("TR");
        for (let i = 0; i < 40; i++){
            let addCell = document.createElement("TD");
            addCell.setAttribute("id", rowIndex.toString() + "," + i.toString());
            row.appendChild(addCell);       
        }       
    board.appendChild(row);        
}
//function below creates 40 rows forming the playing grid    
function createGrid() {
    for (let i = 0; i < 40; i++){
        makeRow(i);
    }       
}
createGrid();
//listener below is attached to the difficulty list witch changes game areas..
difficulty.addEventListener("change", function(){
    if(difficulty.value === "EASY"){
        document.getElementById("6,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("7,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("8,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("9,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("10,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("11,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("12,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("6,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("7,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("8,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("9,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("10,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("11,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("12,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("29,7").style.backgroundColor = "darkSlateGrey"
        document.getElementById("31,8").style.backgroundColor = "darkSlateGrey"
        document.getElementById("33,10").style.backgroundColor = "darkSlateGrey"
        document.getElementById("35,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("36,15").style.backgroundColor = "darkSlateGrey"
        document.getElementById("37,19").style.backgroundColor = "darkSlateGrey"
        document.getElementById("36,23").style.backgroundColor = "darkSlateGrey"
        document.getElementById("35,26").style.backgroundColor = "darkSlateGrey"
        document.getElementById("33,28").style.backgroundColor = "darkSlateGrey"
        document.getElementById("31,30").style.backgroundColor = "darkSlateGrey"
        document.getElementById("29,31").style.backgroundColor = "darkSlateGrey"
        document.getElementById("0,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("1,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("2,13").style.backgroundColor = "darkSlateGrey"
        document.getElementById("3,14").style.backgroundColor = "darkSlateGrey"
        document.getElementById("4,15").style.backgroundColor = "darkSlateGrey"
        document.getElementById("0,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("1,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("2,26").style.backgroundColor = "darkSlateGrey"
        document.getElementById("3,25").style.backgroundColor = "darkSlateGrey"
        document.getElementById("4,24").style.backgroundColor = "darkSlateGrey"
        document.getElementById("16,20").style.backgroundColor = "darkSlateGrey"
        document.getElementById("17,19").style.backgroundColor = "darkSlateGrey"
        document.getElementById("18,18").style.backgroundColor = "darkSlateGrey"
        document.getElementById("19,17").style.backgroundColor = "darkSlateGrey"
        document.getElementById("20,17").style.backgroundColor = "darkSlateGrey"
        document.getElementById("21,17").style.backgroundColor = "darkSlateGrey"
        document.getElementById("21,18").style.backgroundColor = "darkSlateGrey"
        document.getElementById("21,19").style.backgroundColor = "darkSlateGrey"
        document.getElementById("21,20").style.backgroundColor = "darkSlateGrey"
        document.getElementById("13,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("14,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("13,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("14,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("30,7").style.backgroundColor = "darkSlateGrey"
        document.getElementById("32,9").style.backgroundColor = "darkSlateGrey"
        document.getElementById("34,11").style.backgroundColor = "darkSlateGrey"
        document.getElementById("35,13").style.backgroundColor = "darkSlateGrey"
        document.getElementById("36,14").style.backgroundColor = "darkSlateGrey"
        document.getElementById("36,16").style.backgroundColor = "darkSlateGrey"
        document.getElementById("37,17").style.backgroundColor = "darkSlateGrey"
        document.getElementById("37,18").style.backgroundColor = "darkSlateGrey"
        document.getElementById("37,20").style.backgroundColor = "darkSlateGrey"
        document.getElementById("37,21").style.backgroundColor = "darkSlateGrey"
        document.getElementById("36,22").style.backgroundColor = "darkSlateGrey"
        document.getElementById("36,24").style.backgroundColor = "darkSlateGrey"
        document.getElementById("35,25").style.backgroundColor = "darkSlateGrey"
        document.getElementById("34,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("32,29").style.backgroundColor = "darkSlateGrey"
        document.getElementById("30,31").style.backgroundColor = "darkSlateGrey"
        document.getElementById("Difficulty").style.backgroundColor = "yellowGreen"
    }
    if(difficulty.value === "MEDIUM"){
        document.getElementById("6,12").style.backgroundColor = "black"
        document.getElementById("7,12").style.backgroundColor = "black"
        document.getElementById("8,12").style.backgroundColor = "black"
        document.getElementById("9,12").style.backgroundColor = "black"
        document.getElementById("10,12").style.backgroundColor = "black"
        document.getElementById("11,12").style.backgroundColor = "black"
        document.getElementById("12,12").style.backgroundColor = "black"
        document.getElementById("6,27").style.backgroundColor = "black"
        document.getElementById("7,27").style.backgroundColor = "black"
        document.getElementById("8,27").style.backgroundColor = "black"
        document.getElementById("9,27").style.backgroundColor = "black"
        document.getElementById("10,27").style.backgroundColor = "black"
        document.getElementById("11,27").style.backgroundColor = "black"
        document.getElementById("12,27").style.backgroundColor = "black"
        document.getElementById("29,7").style.backgroundColor = "black"
        document.getElementById("31,8").style.backgroundColor = "black"
        document.getElementById("33,10").style.backgroundColor = "black"
        document.getElementById("35,12").style.backgroundColor = "black"
        document.getElementById("36,15").style.backgroundColor = "black"
        document.getElementById("37,19").style.backgroundColor = "black"
        document.getElementById("36,23").style.backgroundColor = "black"
        document.getElementById("35,26").style.backgroundColor = "black"
        document.getElementById("33,28").style.backgroundColor = "black"
        document.getElementById("31,30").style.backgroundColor = "black"
        document.getElementById("29,31").style.backgroundColor = "black"
        document.getElementById("0,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("1,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("2,13").style.backgroundColor = "darkSlateGrey"
        document.getElementById("3,14").style.backgroundColor = "darkSlateGrey"
        document.getElementById("4,15").style.backgroundColor = "darkSlateGrey"
        document.getElementById("0,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("1,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("2,26").style.backgroundColor = "darkSlateGrey"
        document.getElementById("3,25").style.backgroundColor = "darkSlateGrey"
        document.getElementById("4,24").style.backgroundColor = "darkSlateGrey"
        document.getElementById("16,20").style.backgroundColor = "darkSlateGrey"
        document.getElementById("17,19").style.backgroundColor = "darkSlateGrey"
        document.getElementById("18,18").style.backgroundColor = "darkSlateGrey"
        document.getElementById("19,17").style.backgroundColor = "darkSlateGrey"
        document.getElementById("20,17").style.backgroundColor = "darkSlateGrey"
        document.getElementById("21,17").style.backgroundColor = "darkSlateGrey"
        document.getElementById("21,18").style.backgroundColor = "darkSlateGrey"
        document.getElementById("21,19").style.backgroundColor = "darkSlateGrey"
        document.getElementById("21,20").style.backgroundColor = "darkSlateGrey"
        document.getElementById("13,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("14,12").style.backgroundColor = "darkSlateGrey"
        document.getElementById("13,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("14,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("30,7").style.backgroundColor = "darkSlateGrey"
        document.getElementById("32,9").style.backgroundColor = "darkSlateGrey"
        document.getElementById("34,11").style.backgroundColor = "darkSlateGrey"
        document.getElementById("35,13").style.backgroundColor = "darkSlateGrey"
        document.getElementById("36,14").style.backgroundColor = "darkSlateGrey"
        document.getElementById("36,16").style.backgroundColor = "darkSlateGrey"
        document.getElementById("37,17").style.backgroundColor = "darkSlateGrey"
        document.getElementById("37,18").style.backgroundColor = "darkSlateGrey"
        document.getElementById("37,20").style.backgroundColor = "darkSlateGrey"
        document.getElementById("37,21").style.backgroundColor = "darkSlateGrey"
        document.getElementById("36,22").style.backgroundColor = "darkSlateGrey"
        document.getElementById("36,24").style.backgroundColor = "darkSlateGrey"
        document.getElementById("35,25").style.backgroundColor = "darkSlateGrey"
        document.getElementById("34,27").style.backgroundColor = "darkSlateGrey"
        document.getElementById("32,29").style.backgroundColor = "darkSlateGrey"
        document.getElementById("30,31").style.backgroundColor = "darkSlateGrey" 
        document.getElementById("Difficulty").style.backgroundColor = "orange"
    } else if(difficulty.value === "HARD"){
        document.getElementById("6,12").style.backgroundColor = "black"
        document.getElementById("7,12").style.backgroundColor = "black"
        document.getElementById("8,12").style.backgroundColor = "black"
        document.getElementById("9,12").style.backgroundColor = "black"
        document.getElementById("10,12").style.backgroundColor = "black"
        document.getElementById("11,12").style.backgroundColor = "black"
        document.getElementById("12,12").style.backgroundColor = "black"
        document.getElementById("6,27").style.backgroundColor = "black"
        document.getElementById("7,27").style.backgroundColor = "black"
        document.getElementById("8,27").style.backgroundColor = "black"
        document.getElementById("9,27").style.backgroundColor = "black"
        document.getElementById("10,27").style.backgroundColor = "black"
        document.getElementById("11,27").style.backgroundColor = "black"
        document.getElementById("12,27").style.backgroundColor = "black"
        document.getElementById("29,7").style.backgroundColor = "black"
        document.getElementById("31,8").style.backgroundColor = "black"
        document.getElementById("33,10").style.backgroundColor = "black"
        document.getElementById("35,12").style.backgroundColor = "black"
        document.getElementById("36,15").style.backgroundColor = "black"
        document.getElementById("37,19").style.backgroundColor = "black"
        document.getElementById("36,23").style.backgroundColor = "black"
        document.getElementById("35,26").style.backgroundColor = "black"
        document.getElementById("33,28").style.backgroundColor = "black"
        document.getElementById("31,30").style.backgroundColor = "black"
        document.getElementById("29,31").style.backgroundColor = "black"
        document.getElementById("0,12").style.backgroundColor = "black"
        document.getElementById("1,12").style.backgroundColor = "black"
        document.getElementById("2,13").style.backgroundColor = "black"
        document.getElementById("3,14").style.backgroundColor = "black"
        document.getElementById("4,15").style.backgroundColor = "black"
        document.getElementById("0,27").style.backgroundColor = "black"
        document.getElementById("1,27").style.backgroundColor = "black"
        document.getElementById("2,26").style.backgroundColor = "black"
        document.getElementById("3,25").style.backgroundColor = "black"
        document.getElementById("4,24").style.backgroundColor = "black"
        document.getElementById("16,20").style.backgroundColor = "black"
        document.getElementById("17,19").style.backgroundColor = "black"
        document.getElementById("18,18").style.backgroundColor = "black"
        document.getElementById("19,17").style.backgroundColor = "black"
        document.getElementById("20,17").style.backgroundColor = "black"
        document.getElementById("21,17").style.backgroundColor = "black"
        document.getElementById("21,18").style.backgroundColor = "black"
        document.getElementById("21,19").style.backgroundColor = "black"
        document.getElementById("21,20").style.backgroundColor = "black"
        document.getElementById("13,12").style.backgroundColor = "black"
        document.getElementById("14,12").style.backgroundColor = "black"
        document.getElementById("13,27").style.backgroundColor = "black"
        document.getElementById("14,27").style.backgroundColor = "black"
        document.getElementById("30,7").style.backgroundColor = "black"
        document.getElementById("32,9").style.backgroundColor = "black"
        document.getElementById("34,11").style.backgroundColor = "black"
        document.getElementById("35,13").style.backgroundColor = "black"
        document.getElementById("36,14").style.backgroundColor = "black"
        document.getElementById("36,16").style.backgroundColor = "black"
        document.getElementById("37,17").style.backgroundColor = "black"
        document.getElementById("37,18").style.backgroundColor = "black"
        document.getElementById("37,20").style.backgroundColor = "black"
        document.getElementById("37,21").style.backgroundColor = "black"
        document.getElementById("36,22").style.backgroundColor = "black"
        document.getElementById("36,24").style.backgroundColor = "black"
        document.getElementById("35,25").style.backgroundColor = "black"
        document.getElementById("34,27").style.backgroundColor = "black"
        document.getElementById("32,29").style.backgroundColor = "black"
        document.getElementById("30,31").style.backgroundColor = "black"
        document.getElementById("Difficulty").style.backgroundColor = "orangered"  
    }
})
//function below checks and changes snake to green
function startingSnake(globalSnake){   
    for (let i = 0; i < globalSnake.length; i++) {
        document.getElementById(globalSnake[i]).style.backgroundColor = "yellowgreen"        
    }
}
startingSnake(globalSnake);
//this listener checks for key presses
document.addEventListener('keydown', basicControls);
//this function reads key presses and set global snakedirection based on said key...
function basicControls(arrow) {
    if (arrow.key === "ArrowUp" && snakeDirection != "down"){
       snakeDirection = "up"
    }
    if (arrow.key === "ArrowDown" && snakeDirection != "up"){
       snakeDirection = "down"                     
    }1
    if (arrow.key === "ArrowLeft" && snakeDirection != "right"){
       snakeDirection = "left"
    }
    if (arrow.key === "ArrowRight" && snakeDirection != "left"){
       snakeDirection = "right"
    }        
}
//function below creates random apples in game area...
function appleCreater(){
    let rowIndex = Math.floor(Math.random() * 39);
    let columnIndex = Math.floor(Math.random() * 39);
    let appleCell = rowIndex.toString() + "," + columnIndex.toString()
    // if apple generated lands on "black cell" then recall
    if(document.getElementById(appleCell).style.backgroundColor === "black"){
        appleCreater();
    }
    // if apple generated lands on snake then recall
    if(document.getElementById(appleCell).style.backgroundColor === "yellowgreen") {
        appleCreater();
        
  } else {
    document.getElementById(appleCell).style.backgroundColor = "red"
  }
}
//function below triples apples on gamearea at given time
function appleCreaterExtension(){
    for (let i = 0; i <= 2; i++) {
        appleCreater();        
    }
}
//fuction below is bread and butter of game...
function snakeMovement(){
    //here it takes incoming cell IDs and converts to numbers...
    let splitter = globalSnake[0].split(",");
    let rowCord = parseInt(splitter[0]);
    let columnCord = parseInt(splitter[1]);
    //here it reads global snake direction and makes changes to numbers given..,
    if(snakeDirection === "up"){
        rowCord--
    }
    if(snakeDirection === "down"){
        rowCord++
    }
    if(snakeDirection === "left"){
        columnCord--
    }
    if(snakeDirection === "right"){
        columnCord++
    }
    //here its checking to see if snake hit walls and calling function if so...
    if(columnCord <= -1 || rowCord <= -1 || columnCord >= 40 || rowCord >= 40){       
        clearInterval(interval);
        restartGame();
    } 
    //here takes numbers and throws them back into string
    let snaky = rowCord.toString() + "," + columnCord.toString();
    //here checks to see if snake hit itself and calls functions if so...
    if(document.getElementById(snaky).style.backgroundColor === "yellowgreen"){       
        clearInterval(interval);
        restartGame();
        return;
    } 
    //here checks if snake hit obstacales and calls function if so...
    if(document.getElementById(snaky).style.backgroundColor === "black"){       
        clearInterval(interval)
        restartGame();        
    }
    //here checks if snake hit apple and if so increases size of snake
    //and increases speed of snake...
    if (document.getElementById(snaky).style.backgroundColor === "red") {
        appleCreater();        
        clearInterval(interval)
        let speedy = intervalNum - 10
        let num = intervalNum - 5                  
         if(speedy <= 100){
             interval = setInterval(tick, num)
             intervalNum = num
         } else {
             interval = setInterval(tick, speedy)
             intervalNum = speedy
         }
        playerCurrScore++;       
    } 
    else{
        document.getElementById(globalSnake[globalSnake.length - 1]).style.backgroundColor = "darkSlateGrey";
        globalSnake.pop();
    }   
    globalSnake.unshift(rowCord.toString() + "," + columnCord.toString());
}
//function below is called on interval
function tick() {   
    snakeMovement();    
    startingSnake(globalSnake);
    currentScore.innerHTML = playerCurrScore;
    if(playerCurrScore >= bestScore){
        highScore.innerHTML = bestScore++;
    }
  }
appleCreaterExtension()
//function below is shows loser popup
function loserPopUp(){
    popUp.style.display = "block";
}
popUpButton.addEventListener("click", function(){
    popUp.style.display = "none"
})
//function below is called only when game is over... and resets certaion conditions.
function restartGame(){    
    for (let i = 0; i < globalSnake.length; i++) {
        document.getElementById(globalSnake[i]).style.backgroundColor = "darkSlateGrey"
    }
    globalSnake = [...resetSnake]
    startingSnake(resetSnake);
    playerCurrScore = 0
    intervalNum = 500
    gameRunning = false
    snakeDirection = "down"
    loserPopUp();
}