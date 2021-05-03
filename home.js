var moves = 0;

function assignMove(id) {
    let boxState = document.getElementById(id);
    if (boxState.getAttribute('value') == "0") {
        const player = playerMove(moves);
        boxState.setAttribute('value', player[1]);
        boxState.style.backgroundColor = player[0];
        moves ++;
        if (moves >= 5) {
            let winState = checkWin();
            if (winState === 1) {
                let winCondition = document.getElementsByClassName("block"); 
                for (i = 0; i < winCondition.length; i++) {
                    endResult = document.getElementById(winCondition[i].id);
                    endResult.style.backgroundColor = player[0];
                    endResult.setAttribute('value', player[1])
                }
            } else {
                //pass;
            }
        }
    }    
}

function playerMove(steps) {
    if (steps%2 === 0){
        return ["red", "1"];
    } else {
        return ["blue", "2"];
    }
}

function newGame() {
    let winCondition = document.getElementsByClassName("block");
    moves = 0;
    for (i = 0; i < winCondition.length; i++) {
        endResult = document.getElementById(winCondition[i].id);
        endResult.style.backgroundColor = "white";
        endResult.setAttribute("value", "0");
    }
}

function checkWin() {
    let currentState = document.getElementsByClassName("block");
    
    if (
      currentState[0].getAttribute('value') === currentState[1].getAttribute('value') && 
      currentState[0].getAttribute('value') === currentState[2].getAttribute('value') &&
      currentState[0].getAttribute('value') !== "0"
    ) {
        return 1;
    } else if (
      currentState[3].getAttribute('value') === currentState[4].getAttribute('value') && 
      currentState[3].getAttribute('value') === currentState[5].getAttribute('value') &&
      currentState[3].getAttribute('value') !== "0"
    ) {
        return 1;
    } else if (
      currentState[6].getAttribute('value') === currentState[7].getAttribute('value') && 
      currentState[6].getAttribute('value') === currentState[8].getAttribute('value') &&
      currentState[6].getAttribute('value') !== "0"
    ) {
        return 1;
    } else if (
      currentState[0].getAttribute('value') === currentState[4].getAttribute('value') && 
      currentState[0].getAttribute('value') === currentState[8].getAttribute('value') &&
      currentState[0].getAttribute('value') !== "0"
    ) {
        return 1;
    } else if (
      currentState[2].getAttribute('value') === currentState[4].getAttribute('value') && 
      currentState[2].getAttribute('value') === currentState[6].getAttribute('value') &&
      currentState[2].getAttribute('value') !== "0"
    ) {
        return 1;
    } else if (
      currentState[0].getAttribute('value') === currentState[3].getAttribute('value') && 
      currentState[0].getAttribute('value') === currentState[6].getAttribute('value') &&
      currentState[0].getAttribute('value') !== "0"
    ) {
        return 1;
    } else if (
      currentState[1].getAttribute('value') === currentState[4].getAttribute('value') && 
      currentState[1].getAttribute('value') === currentState[7].getAttribute('value') &&
      currentState[1].getAttribute('value') !== "0"
    ) {
        return 1;
    } else if (
      currentState[2].getAttribute('value') == currentState[5].getAttribute('value') && 
      currentState[2].getAttribute('value') == currentState[8].getAttribute('value') &&
      currentState[2].getAttribute('value') !== "0"
    ) {
        return 1;
    } else {
        return 0;
    }

}