import { Button, MoveTo, ShowHint } from '@components/components'

import SeatPoint from '@scenes/shared_prefabs/seat/SeatPoint'
// You can write more code here

/* START OF COMPILED CODE */

export default class TreasureTable6 extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.game;
        /** @type {SeatPoint} */
        this.seat2;
        /** @type {SeatPoint} */
        this.seat1;


        // game
        const game = scene.add.image(0, 0, "shipquarters", "animations/box/6");
        game.setOrigin(0.5, 0.20218853122526168);
        this.add(game);

        // done1
        const done1 = new SeatPoint(scene, -49, -33);
        this.add(done1);

        // done2
        const done2 = new SeatPoint(scene, 41, -36);
        this.add(done2);

        // seat2
        const seat2 = new SeatPoint(scene, 65, 17);
        this.add(seat2);

        // seat1
        const seat1 = new SeatPoint(scene, -53, 17);
        this.add(seat1);

        // game (components)
        const gameButton = new Button(game);
        gameButton.spriteName = "animations/box/6";
        const gameMoveTo = new MoveTo(game);
        gameMoveTo.x = this.x;
        gameMoveTo.y = this.y + 15;
        const gameShowHint = new ShowHint(game);
        gameShowHint.text = "treasurehunt_hint";

        // seat2 (prefab fields)
        seat2.sitFrame = 18;
        seat2.donePoint = done2;

        // seat1 (prefab fields)
        seat1.sitFrame = 24;
        seat1.donePoint = done1;

        this.game = game;
        this.seat2 = seat2;
        this.seat1 = seat1;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
