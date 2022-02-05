const board = document.getElementById("gameArea");
const startButton = document.getElementById("startButton");
const currentScore = document.getElementById("currentScore")
const highScore = document.getElementById("highScore")
const difficulty = document.getElementById("Difficulty")
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





function makeRow(rowIndex){   
    let row = document.createElement("TR");
        for (let i = 0; i < 40; i++){
            let addCell = document.createElement("TD");
            addCell.setAttribute("id", rowIndex.toString() + "," + i.toString());
            row.appendChild(addCell);       
        }       
    board.appendChild(row);        
}
    
function createGrid() {
    for (let i = 0; i < 40; i++){
        makeRow(i);
    }       
}
createGrid();


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
    }
})




function startingSnake(globalSnake){   
    for (let i = 0; i < globalSnake.length; i++) {
        document.getElementById(globalSnake[i]).style.backgroundColor = "yellowgreen"        
    }
}
startingSnake(globalSnake);
/////////////////////////////////////////////////////////////////
document.addEventListener('keydown', basicControls);

function basicControls(arrow) {
    //if this pressed decrease row number by 1
    if (arrow.key === "ArrowUp" && snakeDirection != "down"){
       snakeDirection = "up"
    }
    //if this pressed increase row number by 1
    if (arrow.key === "ArrowDown" && snakeDirection != "up"){
       snakeDirection = "down"                                  //functioning as expected
    }
    //if this pressed decrease column number by 1
    if (arrow.key === "ArrowLeft" && snakeDirection != "right"){
       snakeDirection = "left"
    }
    //if this pressed increase column number by 1
    if (arrow.key === "ArrowRight" && snakeDirection != "left"){
       snakeDirection = "right"
    }        
}
////////////////////////////////////////////////////////////////
function appleCreater(){
    let rowIndex = Math.floor(Math.random() * 39);
    let columnIndex = Math.floor(Math.random() * 39);
    let appleCell = rowIndex.toString() + "," + columnIndex.toString()
    if(document.getElementById(appleCell).style.backgroundColor === "black"){
        appleCreater();
    }
    if(document.getElementById(appleCell).style.backgroundColor === "yellowgreen") {
        appleCreater();
        
  } else {
    document.getElementById(appleCell).style.backgroundColor = "red"
  }
}
function appleCreaterExtension(){
    for (let i = 0; i <= 2; i++) {
        appleCreater();        
    }
}

let snakeHead = document.getElementById("0,5")



function snakeMovement(){
    
    let splitter = globalSnake[0].split(",");
    let rowCord = parseInt(splitter[0]);
    let columnCord = parseInt(splitter[1]);
    
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

    //////////////////////////////////// bottem IFs need to be finished!!
    if(columnCord <= -1 || rowCord <= -1 || columnCord >= 40 || rowCord >= 40){
        // needs to restart game somehow
        clearInterval(interval);
        restartGame();
    } 
    let snaky = rowCord.toString() + "," + columnCord.toString();
    if(document.getElementById(snaky).style.backgroundColor === "yellowgreen"){
        // needs to restart game somehow        
        clearInterval(interval);
        restartGame();
        return;
    } 
    if(document.getElementById(snaky).style.backgroundColor === "black"){
        // needs to restart game somehow
        clearInterval(interval)
        restartGame();
        
    }
    if (document.getElementById(snaky).style.backgroundColor === "red") {
        appleCreater();
        //needs to increase speed
        clearInterval(interval)
        let speedy = intervalNum - 10
         interval = setInterval(tick, speedy)
        playerCurrScore++;
        console.log(speedy)
        intervalNum = speedy
    } else{
        document.getElementById(globalSnake[globalSnake.length - 1]).style.backgroundColor = "darkSlateGrey";
        globalSnake.pop();
    }   
    globalSnake.unshift(rowCord.toString() + "," + columnCord.toString());      
        
    console.log(globalSnake);
    
}

function tick() {    
    // this is an incremental change that happens to the state every time you update...
    snakeMovement();    
    startingSnake(globalSnake);
    currentScore.innerHTML = playerCurrScore;
    if(playerCurrScore >= bestScore){
        highScore.innerHTML = bestScore++;
    }
  }

appleCreaterExtension()

function restartGame(){
    
    for (let i = 0; i < globalSnake.length; i++) {
        document.getElementById(globalSnake[i]).style.backgroundColor = "darkSlateGrey"
    }
    globalSnake = [...resetSnake]
    startingSnake(resetSnake);
    console.log(globalSnake);
    console.log(resetSnake)
    playerCurrScore = 0
    intervalNum = 500
    gameRunning = false
    snakeDirection = "down"
}