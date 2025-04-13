import Phaser from "phaser";
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("over-scene");
  }
  init(data) {
    this.replayButton = undefined;
    this.score = data.score;
  }
  preload() {
    this.load.image("background", "public/images/bg_layer1.png");
    this.load.image("gameover-bg", "public/images/gameover.png");
    this.load.image("replay-button", "public/images/replay.png");
  }
  create() {
    /*............(b).............*/
    // Background
    this.add.image(240, 320, "background");
    const gameover_bg = this.add.image(240, 160, "gameover-bg");

    // Replay Button
    let replay_button = this.add
      .image(this.gameHalfWidth, this.gameHalfHeight + 181, "replay-button")
      .setInteractive();

    this.add.text(100, 300, "Score: " + this.score, {
      fontSize: "32px",
      fill: "black",
    });
    this.replayButton = this.add
      .image(200, 400, "replay-button")
      .setInteractive()
      .setScale(0.5);
    this.replayButton.once(
      "pointerup",
      () => {
        this.scene.start("math-fighter-scene");
      },
      this
    );
  }
}
