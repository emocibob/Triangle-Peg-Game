baseGame.myHelp = function (game) {};

baseGame.myHelp.prototype = {
    create: function () {
        var headingTextSpace = 85;
        var headingFont = "55px Arial";
        var textFont = "45px Arial";
        var txtColor = "RGBA(167, 156, 133, 1)";
        var txtAlign = "left";
        var controlsText = "Tap/click a peg (filled circle) to activate it.\nTapping/clicking on it again gets it deactivated.\nOnce active, tap into an empty space to move it there.\nYou can't activate another peg while there's one already active.";
        var rulesText = "In the first move remove a peg of your choice.\nMove pegs into empty spaces by jumping over neighbor pegs.\nThe pegs that you jumped over are removed.\nTry to remove all pegs but one.";
        var rulesHeadingX = 425;
        var txtTemp;
        var offsetX = 65;
        var offsetY = 65;
        var txtWidth = this.world.width * 0.7;
        var pegsX = this.world.width * 0.85;
        var pegsOffsetY = 120;
        var pegDescSpace = 120;
        var pegDescAlign = "center";
        
        // Controls - heading
        txtTemp = this.add.text(offsetX, offsetY, "CONTROLS", {
            font: headingFont,
            fill: txtColor,
            align: txtAlign
        });
        
        // Controls - text
        txtTemp = this.add.text(offsetX, offsetY + headingTextSpace, controlsText, {
            font: textFont,
            fill: txtColor,
            align: txtAlign,
            wordWrap: true,
            wordWrapWidth: txtWidth
        });
        
        // Rules - heading
        txtTemp = this.add.text(offsetX, rulesHeadingX, "RULES", {
            font: headingFont,
            fill: txtColor,
            align: txtAlign
        });
        
        // Rules - text
        txtTemp = this.add.text(offsetX, rulesHeadingX + headingTextSpace, rulesText, {
            font: textFont,
            fill: txtColor,
            align: txtAlign,
            wordWrap: true,
            wordWrapWidth: txtWidth
        });
        
        // Return to the main menu button
        btnMainMenu = this.add.sprite(this.world.centerX, this.world.height - offsetY, "mainMenuSmallerBtnImg");
        btnMainMenu.anchor.set(0.5, 1);
        btnMainMenu.inputEnabled = true;
        btnMainMenu.events.onInputDown.add(goToMainMenu, this);
        
        // Activated peg - image
        pegImg = this.add.image(pegsX, pegsOffsetY, "pegAtivatedImg");
        pegImg.anchor.set(0.5, 0);
        
        // Activated peg - description
        txtTemp = this.add.text(pegsX, pegsOffsetY + pegDescSpace, "ACTIVE PEG", {
            font: textFont,
            fill: txtColor,
            align: pegDescAlign
        });
        txtTemp.anchor.set(0.5, 0);
        
        // Deactivated peg - image
        pegImg = this.add.image(pegsX, 3.15 * pegsOffsetY, "pegDeactivatedImg");
        pegImg.anchor.set(0.5, 0);
        
        // Deactivated peg - description
        txtTemp = this.add.text(pegsX, 3.15 * pegsOffsetY + pegDescSpace, "DEACTIVATED", {
            font: textFont,
            fill: txtColor,
            align: pegDescAlign
        });
        txtTemp.anchor.set(0.5, 0);
        
        // Empty space - image
        pegImg = this.add.image(pegsX, 5.3 * pegsOffsetY, "pegEmptySpaceImg");
        pegImg.anchor.set(0.5, 0);
        
        // Empty space - description
        txtTemp = this.add.text(pegsX, 5.3 * pegsOffsetY + pegDescSpace, "EMPTY SPACE", {
            font: textFont,
            fill: txtColor,
            align: pegDescAlign
        });
        txtTemp.anchor.set(0.5, 0);
    }
};

function goToMainMenu () {
    this.state.start("MainMenu");
}