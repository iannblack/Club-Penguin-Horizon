import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'


export const preload = {
    key: 'penguintalesthree-pack',
    url: 'assets/media/interface/books/penguintalesthree/penguintalesthree-pack.json',
    loadString: ['loading', 'Penguin Tales Volume 3']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class PenguinTalesThree extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0.34900255869139585, y ?? 0.14197775311840743);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(687, 474, 128, 128);
        rectangle_1.scaleX = 19.186366570118256;
        rectangle_1.scaleY = 8.807316563934844;
        this.add(rectangle_1);

        // page_1
        const page_1 = scene.add.container(791.7715418636799, 498.8033347427845);
        page_1.visible = false;
        this.add(page_1);

        // page21
        const page21 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookoutside", "talesthreepg21");
        page_1.add(page21);

        // backPageLeft
        const backPageLeft = scene.add.sprite(-204, 204, "threebookoutside", "backPageLeft");
        page_1.add(backPageLeft);

        // text_1
        const text_1 = scene.add.text(254, -460, "", {});
        text_1.text = "x";
        text_1.setStyle({ "color": "#000000ff", "fontFamily": "Helvetica", "fontSize": "48px", "fontStyle": "bold" });
        page_1.add(text_1);

        // page_20
        const page_20 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_20.visible = false;
        this.add(page_20);

        // page20
        const page20 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg20");
        page_20.add(page20);

        // page_19
        const page_19 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_19.visible = false;
        this.add(page_19);

        // page19
        const page19 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg19");
        page_19.add(page19);

        // page_18
        const page_18 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_18.visible = false;
        this.add(page_18);

        // page18
        const page18 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg18");
        page_18.add(page18);

        // page_17
        const page_17 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_17.visible = false;
        this.add(page_17);

        // page17
        const page17 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg17");
        page_17.add(page17);

        // page_16
        const page_16 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_16.visible = false;
        this.add(page_16);

        // page16
        const page16 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg16");
        page_16.add(page16);

        // page_15
        const page_15 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_15.visible = false;
        this.add(page_15);

        // page15
        const page15 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg15");
        page_15.add(page15);

        // page_14
        const page_14 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_14.visible = false;
        this.add(page_14);

        // page14
        const page14 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg14");
        page_14.add(page14);

        // page_13
        const page_13 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_13.visible = false;
        this.add(page_13);

        // page13
        const page13 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg13");
        page_13.add(page13);

        // page_12
        const page_12 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_12.visible = false;
        this.add(page_12);

        // page12
        const page12 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg12");
        page_12.add(page12);

        // page_11
        const page_11 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_11.visible = false;
        this.add(page_11);

        // page11
        const page11 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg11");
        page_11.add(page11);

        // page_10
        const page_10 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_10.visible = false;
        this.add(page_10);

        // page10
        const page10 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg10");
        page_10.add(page10);

        // page_9
        const page_9 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_9.visible = false;
        this.add(page_9);

        // page9
        const page9 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg09");
        page_9.add(page9);

        // page_8
        const page_8 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_8.visible = false;
        this.add(page_8);

        // page8
        const page8 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg08");
        page_8.add(page8);

        // page_7
        const page_7 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_7.visible = false;
        this.add(page_7);

        // page7
        const page7 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg07");
        page_7.add(page7);

        // page_6
        const page_6 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_6.visible = false;
        this.add(page_6);

        // page6
        const page6 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg06");
        page_6.add(page6);

        // page_5
        const page_5 = scene.add.container(792.8185267235533, 499.22924628614487);
        page_5.visible = false;
        this.add(page_5);

        // page5
        const page5 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg05");
        page_5.add(page5);

        // page4
        const page4 = scene.add.container(792.8185267235533, 499.22924628614487);
        page4.visible = false;
        this.add(page4);

        // page44
        const page44 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg04");
        page4.add(page44);

        // page3
        const page3 = scene.add.container(792.8185267235533, 499.22924628614487);
        page3.visible = false;
        this.add(page3);

        // page33
        const page33 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg03");
        page3.add(page33);

        // page2
        const page2 = scene.add.container(792.8185267235533, 499.22924628614487);
        page2.visible = false;
        this.add(page2);

        // page22
        const page22 = scene.add.image(-32.81854248046875, -19.229248046875, "threebookinside", "talesthreepg02");
        page2.add(page22);

        // igloo
        const igloo = scene.add.rectangle(274, 157, 500, 128);
        igloo.alpha = 1e-16;
        igloo.isFilled = true;
        page2.add(igloo);

        // wildlife
        const wildlife = scene.add.rectangle(287, 16, 500, 128);
        wildlife.alpha = 1e-12;
        wildlife.isFilled = true;
        page2.add(wildlife);

        // vikings
        const vikings = scene.add.rectangle(285, -132, 500, 128);
        vikings.alpha = 1e-13;
        vikings.isFilled = true;
        page2.add(vikings);

        // turnblue
        const turnblue = scene.add.rectangle(281, -270, 500, 128);
        turnblue.alpha = 0.00001;
        turnblue.isFilled = true;
        page2.add(turnblue);

        // page1
        const page1 = scene.add.container(792.4695399105549, 499.0872702896595);
        page1.visible = false;
        this.add(page1);

        // page
        const page = scene.add.image(-33, -19, "threebookoutside", "talesthreepg01");
        page1.add(page);

        // closeRightFront
        const closeRightFront = scene.add.sprite(214, -351, "threebookoutside", "closeRightFront");
        page1.add(closeRightFront);

        // frontPageRight
        const frontPageRight = scene.add.image(204, 202, "threebookoutside", "frontPageRight");
        page1.add(frontPageRight);

        // buttons
        const buttons = scene.add.container(780.0900074968481, 592.0151470567336);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.sprite(495, -425, "threebookoutside", "closeRight");
        buttons.add(closeRight);

        // pageLeft
        const pageLeft = scene.add.sprite(-477, 47, "threebookoutside", "pageLeft");
        buttons.add(pageLeft);

        // pageRight
        const pageRight = scene.add.sprite(454, 49, "threebookoutside", "pageRight");
        buttons.add(pageRight);

        // coins
        const coins = scene.add.text(-1276.7242431640625, -438.8574676513672, "", {});
        coins.visible = false;
        coins.text = "New text";
        buttons.add(coins);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(1209, -3, 50, 128);
        rectangle_3.visible = false;
        rectangle_3.isFilled = true;
        rectangle_3.fillColor = 16713736;
        this.add(rectangle_3);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(1434, 311, 128, 128);
        rectangle_2.visible = false;
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 16056320;
        this.add(rectangle_2);

        // lists
        const pages = [page1, page2, page3, page4, page_5, page_6, page_7, page_8, page_9, page_10, page_11, page_12, page_13, page_14, page_15, page_16, page_17, page_18, page_19, page_20, page_1];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // backPageLeft (components)
        const backPageLeftButton = new Button(backPageLeft);
        backPageLeftButton.spriteName = "backPageLeft";
        backPageLeftButton.callback = () => this.prevPage();;
        backPageLeftButton.activeFrame = true;

        // text_1 (components)
        const text_1SimpleButton = new SimpleButton(text_1);
        text_1SimpleButton.callback = () => this.close();

        // igloo (components)
        const iglooSimpleButton = new SimpleButton(igloo);
        iglooSimpleButton.callback = () => {this.showPage(14)};

        // wildlife (components)
        const wildlifeSimpleButton = new SimpleButton(wildlife);
        wildlifeSimpleButton.callback = () => {this.showPage(11)};

        // vikings (components)
        const vikingsSimpleButton = new SimpleButton(vikings);
        vikingsSimpleButton.callback = () => {this.showPage(7)};

        // turnblue (components)
        const turnblueSimpleButton = new SimpleButton(turnblue);
        turnblueSimpleButton.callback = () => {this.showPage(2)};

        // closeRightFront (components)
        const closeRightFrontButton = new Button(closeRightFront);
        closeRightFrontButton.spriteName = "closeRight";
        closeRightFrontButton.callback = () => this.close();
        closeRightFrontButton.pixelPerfect = true;

        // frontPageRight (components)
        const frontPageRightButton = new Button(frontPageRight);
        frontPageRightButton.spriteName = "frontPageRight";
        frontPageRightButton.callback = () => this.nextPage();;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "closeRight";
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "pageLeft";
        pageLeftButton.callback = () => this.prevPage();;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "pageRight";
        pageRightButton.callback = () => this.nextPage();;

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

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
