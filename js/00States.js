var gameWidth = 1920;
var gameHeight = 1080;

window.onload = function() {
    var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, "");
    
    game.state.add("Init", baseGame.myInit);
    game.state.add("Loading", baseGame.myLoading);
    game.state.add("MainMenu", baseGame.mainMenu);
    game.state.add("Game", baseGame.myGame);
    game.state.add("GameOver", baseGame.gameOver);
    game.state.add("Help", baseGame.myHelp);
    
    game.state.start("Init");
}