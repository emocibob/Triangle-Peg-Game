baseGame.myGame = function (game) {};

var btnPegTemp;
var activePegPos;
var firstPegRemoved;
var pegToRemove;
var numPegsLeft;
var txtPegsLeft;
var nextPositions;
var nextPosIdx;
var gameOverMsg;
var logging = false;

baseGame.myGame.prototype = {
    create: function () {
        var squareHeight = 90; // Basic unit of space on board
        
        var offsetX = 65;
        var offsetY = 65;
        gameOverMsg = null;
        
        // Number of pegs left on board
        txtPegsLeft = this.add.text(offsetX, offsetY, "", {
            font: "52px Arial",
            fill: "RGBA(167, 156, 133, 1.0)"
        });
        
        // Restart button
        btnRestart = this.add.sprite(offsetX, this.world.height - offsetY, "restartBtnImg");
        btnRestart.anchor.set(0, 1);
        btnRestart.inputEnabled = true;
        btnRestart.events.onInputDown.add(restartGame, this);
        
        // Quit button
        btnQuit = this.add.sprite(this.world.width - offsetX, this.world.height - offsetY, "quitBtnImg");
        btnQuit.anchor.set(1, 1);
        btnQuit.inputEnabled = true;
        btnQuit.events.onInputDown.add(quitGame, this);
        
        // Create pegs
        activePegPos = null;
        numPegsLeft = 15;
        var pegCounter = 0;
        firstPegRemoved = false;

        var numPegsInRow = 1;
        var xFirstPegInRow = this.world.centerX;
        var yFirstPegInRow = (this.world.height - 9 * squareHeight) / 2 + squareHeight/2;

        // Iterate over rows of pegs
        for (var i = 0; i < 5; i++) {
            // Iterate over pegs in current row
            for (var j = 0; j < numPegsInRow; j++) {
                pegPositions[pegCounter].btn = this.add.sprite(xFirstPegInRow + 2 * squareHeight * j, yFirstPegInRow, 'peg');
                pegPositions[pegCounter].btn.anchor.set(0.5, 0.5);
                pegPositions[pegCounter].btn.inputEnabled = true;
                pegPositions[pegCounter].btn.name = pegCounter.toString(); // Same as peg position id
                pegPositions[pegCounter].btn.events.onInputDown.add(updatePegs, this);
                
                pegCounter += 1;
            }
            numPegsInRow += 1; // Every next row has one peg more 
            yFirstPegInRow += squareHeight * 2;
            xFirstPegInRow -= squareHeight;
        }
    },
    
    update: function () {
        // Update number of pegs
        txtPegsLeft.text = "PEGS TO REMOVE: " + (numPegsLeft-1);
    }
};

function deactivatePeg(pegBtn) {
    pegBtn.frame = 0;
    return null;
}

function activatePeg(pegBtn) {
    pegBtn.frame = 1;
}

function removePeg(pegBtn, changeCounter) {
    pegBtn.frame = 2;
    if (changeCounter)
        numPegsLeft -= 1;
}

function movePeg(newPegPosBtn) {
    newPegPosBtn.frame = 0;
}

function decideJump(pegBtn, activePegPos, obj) {
    // Check if it is possible to "move" active peg to selected position
    selectedPegIdStr = selectedPegId.toString();
    possibleJumps = Object.keys(pegPositions[activePegPos].jumps);
    nextPosIdx = possibleJumps.indexOf(selectedPegIdStr);

    legalMove = false;

    if (nextPosIdx !== -1) {
        if (logging) console.log("Selected empty position (legal move) | Making jump (2 pegs removed, 1 peg moved)...");

        legalMove = true;
        // The peg that is "jumped over" will be removed
        pegToRemoveId = pegPositions[activePegPos].jumps[selectedPegIdStr];
        removePeg(pegPositions[pegToRemoveId].btn, false);
        // "Remove" the old peg
        removePeg(pegPositions[activePegPos].btn, true);
        // "Move" active peg to new postion and deactivate it
        movePeg(pegPositions[selectedPegId].btn);
        
        // Check if game won
        if (numPegsLeft === 1) {
            gameOverMsg = "CONGRATULATIONS, YOU WON!";
            obj.state.start("GameOver");
        }
    } else {
        if (logging) console.log("Selected empty position (ilegal move) | No changes...");
    }

    if (legalMove) {
        // Jump made, no active pegs
        return null;
    } else {
        // Don't change active peg
        return activePegPos;
    }
}

function updatePegs(btn) {
    selectedPegId = parseInt(btn.name);

    if (firstPegRemoved) {
        // Check if any peg is already active
        if (activePegPos !== null) {
            if (activePegPos === selectedPegId) {
                // Deactivate peg if selected a second time
                if (logging) console.log("Selected active peg | Deactivating peg...");
                activePegPos = deactivatePeg(btn);
            } else {
                // A peg is active, check if selected postion is empty
                if (btn.frame === 2) {
                    activePegPos = decideJump(btn, activePegPos, this);
                } else {
                    if (logging) console.log("Selected nonactive peg but other peg already active | No changes...");
                }
            }
        } else {
            // Check if selected peg is inactive (and not removed from the board)
            if (btn.frame === 0) {
                if (logging) console.log("Selected nonactive peg | Activating peg...");
                activatePeg(btn);
                activePegPos = selectedPegId;
            } else {
                // Selected empty position
                if (logging) console.log("Selected empty position | No changes...");
            }
        }
    } else {
        // "Remove" the first selected peg from board
        if (logging) console.log("Selected first peg | Removing peg...");
        removePeg(btn, true);
        firstPegRemoved = true;
    }

    return;
}

function quitGame() {
    this.state.start("GameOver");
}


function restartGame() {
    this.state.start("Game");
}