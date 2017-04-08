var baseGame = {};
baseGame.myInit = function (game) {};

baseGame.myInit.prototype = {
    init: function () {
        // Window size options
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = gameWidth/4;
        this.scale.minHeight = gameHeight/4;
        this.scale.maxWidth = gameWidth;
        this.scale.maxHeight = gameHeight;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);
    },
    
    preload: function () {
        this.load.image("loadingBar", "imgs/bar.png"); 
    },
    
    create: function () {
        this.stage.disableVisibilityChange = false;
        this.input.maxPointers = 1;
        this.state.start("Loading"); 
    }
};