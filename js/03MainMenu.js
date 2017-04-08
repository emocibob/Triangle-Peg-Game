baseGame.mainMenu = function (game) {};

baseGame.mainMenu.prototype = {
    create: function () {
        var centerOffsetX = 270;
        var btnOffsetY = 520;
        
        // Background color (this and all following screens)
        this.stage.backgroundColor = 0xf8ecc9;
        
        // Game title
        txtTitle = this.add.text(this.world.centerX, 225, "TRIANGLE PEG GAME", {
            font: "110px Arial",
            fill: "RGBA(167, 156, 133, 1)",
            align: "center"
        });
        txtTitle.anchor.setTo(0.5, 0.0);
        
        // Start
        btnStartGame = this.add.sprite(this.world.centerX - centerOffsetX, btnOffsetY, "startBtnImg");
        btnStartGame.anchor.set(0.5, 0.0);
        btnStartGame.inputEnabled = true;
        btnStartGame.events.onInputDown.add(startGame, this);
        
        // Help button
        btnHelp = this.add.sprite(this.world.centerX + centerOffsetX, btnOffsetY, "helpBtnImg");
        btnHelp.anchor.set(0.5, 0.0);
        btnHelp.inputEnabled = true;
        btnHelp.events.onInputDown.add(goToHelp, this);
    }
};

function startGame () {
    this.state.start("Game");
}

function goToHelp () {
    this.state.start("Help");
}