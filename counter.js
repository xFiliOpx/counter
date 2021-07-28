let p1Name = "Player 1";
let p2Name = "Player 2";

let p1Points = 0;
let p2Points = 0;

let points2win = 11;
let pointsPerServe = 2;

let p1First = true;

function update(){
    if(document.getElementById('player1NameInput').value == null){p1Name = "Player 1";}
    else{p1Name = document.getElementById('player1NameInput').value;}

    if(document.getElementById('player2NameInput').value == null){p2Name = "Player 2";}
    else{p2Name = document.getElementById('player2NameInput').value;}

    document.getElementById('player1Name').innerHTML = p1Name;
    document.getElementById('player2Name').innerHTML = p2Name;

    document.getElementById('player1Points').innerHTML = p1Points;
    document.getElementById('player2Points').innerHTML = p2Points;

    if(document.getElementById('points2Win').value == null){points2win = document.getElementById('points2Win').value;}
    else{points2win = 11;}

    if(document.getElementById('pointsPerServe').value == null){pointsPerServe = document.getElementById('pointsPerServe').value;}
    else{pointsPerServe = 2;}

    if(document.getElementById('p1First').checked || document.getElementById('p1First').checked == null){p1First = true;}
    else{p1First = false;}
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
    let sum = p1Points + p2Points;

    if((sum % pointsPerServe) == 0){
        if((sum % 2 == 0 && p1First) || (sum % 2 == 1 && !p1First)){
            document.getElementById('nowServing').innerHTML = "now serving " + p1Name;
        }
        else{
            document.getElementById('nowServing').innerHTML = "now serving " + p2Name;
        }

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

function resetPoints(){
    p1Points = 0;
    p2Points = 0;
    checkWinner();
    update();
}

function settingsBtn(){
    let moda = document.getElementById('set-modal');
    moda.style.display = "block";
}

function modalClose(){
    document.getElementById('modalContent').className = "modalClose";
    setTimeout(()=>{
        document.getElementById('set-modal').style.display = "none";
        document.getElementById('modalContent').className = "modal-content";
    },400);
}