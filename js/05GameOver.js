baseGame.gameOver = function (game) {};

baseGame.gameOver.prototype = {
    create: function () {
        if (gameOverMsg === null) {
            gameOverMsg = "UNREMOVED PEGS: " + String(numPegsLeft - 1);
        }
        
        // Score for the last game played
        txtLastResult = this.add.text(this.world.centerX, 225, gameOverMsg, {
            font: "110px Arial",
            fill: "RGBA(167, 156, 133, 1)",
            align: "center"
        });
        txtLastResult.anchor.setTo(0.5, 0.0);
        
        // Return to the main menu button
        btnMainMenu = this.add.sprite(this.world.centerX, 520, "mainMenuBtnImg");
        btnMainMenu.anchor.set(0.5, 0.0);
        btnMainMenu.inputEnabled = true;
        btnMainMenu.events.onInputDown.add(goToMainMenu, this);
    }
};

function goToMainMenu () {
    this.state.start("MainMenu");
}