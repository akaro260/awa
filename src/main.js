import Phaser from 'phaser'

import MathFighterScene from './scenes/MathFighterScene.js'
import GameOverScene from "./scenes/GameOverScene";

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 480,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 200 }, // Include both x and y
        },
    },
    scene: [MathFighterScene, GameOverScene],
	scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
	},
	debug: true,
};


export default new Phaser.Game(config)
