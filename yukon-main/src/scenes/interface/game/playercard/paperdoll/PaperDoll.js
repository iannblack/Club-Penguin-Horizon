import BaseContainer from '@scenes/base/BaseContainer';

import PaperDollLoader from '@engine/loaders/PaperDollLoader';
import TintedImage from '@engine/utils/tint/TintedImage';
import PaperDollPuffleLoader from '@engine/loaders/PaperDollPuffleLoader';

/* START OF COMPILED CODE */

export default class PaperDoll extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.paperdoll;
        /** @type {boolean} */
        this.fadeIn = true;

        // paperdoll
        const paperdoll = scene.add.image(0, 0, 'main', 'paperdoll/paperdoll');
        this.add(paperdoll);

        this.paperdoll = paperdoll;

        /* START-USER-CTR-CODE */

        // Tinted body
        this.body = new TintedImage(scene, 0, 0, 'main', 'paperdoll/body');
        this.body.tint = this.crumbs.colors[0];

        scene.add.existing(this.body);
        this.addAt(this.body, 0);

        this.body.depth = 1;
        this.paperdoll.depth = 2;

        // Slots ordered by depth
        this.slots = [
            'photo',
            'color',
            'feet',
            'body',
            'neck',
            'face',
            'head',
            'hand',
            'flag',
        ];

        this.items = this.setItems();

        this.paperDollLoader = new PaperDollLoader(scene, this);
        this.paperDollPuffleLoader = new PaperDollPuffleLoader(scene, this);
        this.isInputEnabled = false;

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    setItems() {
        let items = {};

        for (let slot of this.slots) {
            if (!slot) {
                continue;
            }

            items[slot] = {
                id: 0,
                depth: this.slots.indexOf(slot) + 100,
            };
        }

        return items;
    }

    loadDoll(penguin, isInputEnabled = false, noPin = false, noPhoto = false) {
        // Clear items for next penguin
        this.removeItems();

        this.isInputEnabled = isInputEnabled;

        if (isInputEnabled) {
            this.enableInput();
        } else {
            this.disableInput();
        }

        this.paperDollLoader.loadItems(penguin,noPin,noPhoto);

        // Puffles

        if (penguin.walkingPuffleType != null && penguin.walking != 0) {
            let colour = this.crumbs.puffles[penguin.walkingPuffleType].name;

            // stupid fix for making it work in game & on main menu

            this.paperDollPuffleLoader.loadPuffle(colour);
            return;
        }

        if (penguin.puffle != null && penguin.puffle.color != null) {
            // localplayer
            this.paperDollPuffleLoader.loadPuffle(penguin.puffle.color);
        }
    }

    /**
     * Enables input on body and paperdoll sprites,
     * does not include clothing items.
     */
    enableInput() {
        this.body.setInteractive({ pixelPerfect: true });
        this.paperdoll.setInteractive({ pixelPerfect: true });
    }

    /**
     * Disables input on body and paperdoll sprites,
     * does not include clothing items.
     */
    disableInput() {
        this.body.removeInteractive();
        this.paperdoll.removeInteractive();
    }

    removeItems() {
        for (let item of Object.values(this.items)) {
            this.removeItem(item);
        }
    }

    removeItem(item) {
        item.id = 0;

        if (item.sprite) {
            this.destroySprite(item);
        }

        if (item.back) {
            this.destroyBack(item);
        }
    }

    destroySprite(item) {
        item.sprite.destroy();
        item.sprite = null;
    }

    destroyBack(item) {
        item.back.destroy();
        item.back = null;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
