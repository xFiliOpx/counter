let p1Name = "Player 1";
let p2Name = "Player 2";

//document.getElementById('ale').innerHTML = "p1Name";nie

function update(){
    document.getElementById('player1Name').innerHTML = p1Name;
    document.getElementById('player2Name').innerHTML = p2Name;
}

function cos(){
    p1Name = document.getElementById('player1NameInput').value;
    document.getElementById('player1Name').innerHTML = p1Name;
}

function displayAlert(){
    alert("alerteryrye");
}