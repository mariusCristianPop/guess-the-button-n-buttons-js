
var userInsertedNr;
// create the 3 buttons and append them to body
function createButtons() {
    document.getElementById("inputField").style.visibility = "hidden"; 
    var myDiv = document.getElementById("buttonsList");
    userInsertedNr = document.getElementById("buttonsNr").value;
    drawWinner(userInsertedNr);
    for (let i = 0; i < userInsertedNr; ++i) {
        var button = document.createElement('button');
        button.innerHTML = "Button " + (i + 1);
        button.id = i;
        button.type = "submit"
        button.setAttribute("onclick", `checkWinner(${i})`);
        myDiv.appendChild(button);
    }
}
// Decide wich ID won the game
var winner = -1;
function drawWinner(userInsertedNr) {
    winner = Math.floor(Math.random() * userInsertedNr) + 1;
    console.log("The winner is " + winner); // left here on purpose for debugging reasons
}

// Check if the user clicked on the winning button
function checkWinner(x) {
    if (x == winner) {
       showResult("You clicked the lucky button!");
    } else {
        showResult("You missed! Refresh the page and try again!");
    }
}

function showResult(parameter) {
    var divElem = document.createElement('p');
    divElem.setAttribute('style', 'text-align:center;');
    divElem.setAttribute('name', 'resultDiv');
    var textNode = document.createTextNode(parameter);
    hideButtons(); 
    divElem.appendChild(textNode);
    document.body.appendChild(divElem);
         
}

function hideButtons() {
    for (let i = 0; i < userInsertedNr; ++i) {
        document.getElementById(i).style.visibility = "hidden"; 
    }
}