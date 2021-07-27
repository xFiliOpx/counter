let p1Name = "Player 1";
let p2Name = "Player 2";

let p1Points = 0;
let p2Points = 0;

let points2win = 12;

function update(){
    p1Name = document.getElementById('player1NameInput').value;
    p2Name = document.getElementById('player2NameInput').value;

    if(document.getElementById('player1NameInput').value == ""){document.getElementById('player1Name').innerHTML = "Player 1";}
    else {document.getElementById('player1Name').innerHTML = p1Name;}
    if(document.getElementById('player2NameInput').value == ""){document.getElementById('player2Name').innerHTML = "Player 2";}
    else {document.getElementById('player2Name').innerHTML = p2Name;}

    document.getElementById('player1Points').innerHTML = p1Points;
    document.getElementById('player2Points').innerHTML = p2Points;
}

function checkWinner(){
    if((p1Points >= points2win || p2Points >= points2win) && Math.abs(p1Points - p2Points) >= 2){
        document.getElementById("cialo").style.backgroundColor = "green";
        setTimeout(()=>{document.getElementById("cialo").style.backgroundColor = "black"},1000);
    }
    else {
        checkServ();
    }
}
function checkServ(){
    if(((p1Points + p2Points) % 3) == 0){
        document.getElementById("cialo").style.backgroundColor = "red";
        setTimeout(()=>{document.getElementById("cialo").style.backgroundColor = "black"},1000);
    }
}

function increaseP1(){
    p1Points++;
    checkWinner();
    update();
}
function decreaseP1(){
    p1Points--;
    if(p1Points<0){
        p1Points++;
    }
    checkWinner();
    update();
}
function increaseP2(){
    p2Points++;
    checkWinner();
    update();
}
function decreaseP2(){
    p2Points--;
    if(p2Points<0){
        p2Points++;
    }
    checkWinner();
    update();
}

