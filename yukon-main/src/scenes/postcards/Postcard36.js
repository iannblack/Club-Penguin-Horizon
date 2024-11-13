/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard36 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.name;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/36", "36");
        bg.setOrigin(0, 0);
        this.add(bg);

        // name
        const name = scene.add.text(151, 591, "", {});
        name.text = "penguin88888888";
        name.setStyle({ "color": "#330067", "fixedWidth":448,"fontFamily": "CCFaceFront", "fontSize": "40px" });
        name.setPadding({"left":5,"right":5});
        this.add(name);

        this.name = name;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
