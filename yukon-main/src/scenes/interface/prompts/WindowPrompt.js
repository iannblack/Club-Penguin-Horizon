import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice } from '@components/components'

import DualButtons from './buttons/DualButtons'
import SingleButton from './buttons/SingleButton'
import Spinner from '@scenes/interface/menus/load/Spinner'

/* START OF COMPILED CODE */

export default class WindowPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {SingleButton} */
        this.single;
        /** @type {DualButtons} */
        this.dual;
        /** @type {Spinner} */
        this.spinner;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.nineslice(0, -95, "prompt", "window", 708, 324, 44, 39, 40, 41);
        this.add(bg);

        // text
        const text = scene.add.text(0, -161, "", {});
        text.setOrigin(0.5, 0.5);
        text.visible = false;
        text.text = "Message goes here\nMessage goes here";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":628,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // single
        const single = new SingleButton(scene, 0, -35);
        single.visible = false;
        this.add(single);

        // dual
        const dual = new DualButtons(scene, 0, -36);
        dual.visible = false;
        this.add(dual);

        // spinner
        const spinner = new Spinner(scene, 0, -104);
        this.add(spinner);

        // block (components)
        new Interactive(block);

        this.bg = bg;
        this.text = text;
        this.single = single;
        this.dual = dual;
        this.spinner = spinner;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(text, buttonLayout, callback, noCallback) {

        // Display correct button layout
        this.dual.visible = false
        this.single.visible = false
        this.interface.main.events.emit('hide_main_inputs')
        if(buttonLayout == 'loading') {
            this.spinner.start()
            this.text.visible = false
            this.visible = true
            return
        }
        this.spinner.stop()
        this.text.visible = true
        this.text.text = text
        this[buttonLayout].visible = true

        // Callback on yes button
        this.callback = () => {
            this.interface.main.events.emit('show_main_inputs')
            callback()
        }
        // Callback on no button
        this.noCallback = () => {
            this.interface.main.events.emit('show_main_inputs')
            noCallback()
        }

        this.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
