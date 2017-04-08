baseGame.myLoading = function (game) {};

baseGame.myLoading.prototype = {
    preload: function () {
        // Loading progress
        txtLoaded = this.add.text(this.world.centerX, 225, "0" + "%", {
            font: "80px Arial",
            fill: "#f8ecc9"
        });
        txtLoaded.anchor.setTo(0.5, 0.0);
        var loadingBar = this.add.sprite(this.world.centerX, 520, "loadingBar");
        loadingBar.anchor.setTo(0.5, 0.0);
        this.load.setPreloadSprite(loadingBar);
        
        // Load images
        this.load.image("startBtnImg", "imgs/start.png");
        this.load.image("mainMenuBtnImg", "imgs/main_menu.png");
        this.load.image("mainMenuSmallerBtnImg", "imgs/main_menu_smaller.png");
        this.load.image("helpBtnImg", "imgs/help.png");
        this.load.image("quitBtnImg", "imgs/quit.png");
        this.load.image("restartBtnImg", "imgs/restart.png");
        this.load.image("pegDeactivatedImg", "imgs/peg_f0.png");
        this.load.image("pegAtivatedImg", "imgs/peg_f1.png");
        this.load.image("pegEmptySpaceImg", "imgs/peg_f2.png");
        this.load.spritesheet("peg", "imgs/peg.png", 90, 90);
    },
    
    loadUpdate: function() {
        txtLoaded.setText(this.load.progress);
    },
    
     create: function() {
        // Go to the main menu screen
        this.state.start("MainMenu");
    }
};