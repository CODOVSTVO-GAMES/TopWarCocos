import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { TypesModalPumping } from '../../../../Static/TypesModalPumping';
import { CharactersStorage } from '../../../../Storage/CharactersStorage';
import { ModalCharacterPumpingLogic } from './ModalCharacterPumpingLogic';
import { ConfigStorageController } from '../../../../Controllers/StorageControllers/ConfigStorageController';
import { InventoryStorageController } from '../../../../Controllers/StorageControllers/InventoryStorageController';
import { TypesItems } from '../../../../Static/TypesItems';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterPumpingInterface')
export class ModalCharacterPumpingInterface extends Component {

    public static instance: ModalCharacterPumpingInterface;

    @property({ type: Node })
    public tabs: Node[] = [];

    @property({ type: Label })
    public level: Label;

    @property({ type: Label })
    public experience: Label;

    @property({ type: Label })
    public starTitle: Label;

    @property({ type: Sprite })
    public slider: Sprite;

    @property({ type: Sprite })
    public sliderStars: Sprite;

    @property({ type: Node })
    public stars: Node[] = [];

    @property({ type: Label })
    public quantity: Label[] = [];

    @property({ type: Sprite })
    public flags: Sprite[] = [];

    onLoad() {
        ModalCharacterPumpingInterface.instance = this;
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].active = false;
        }
    }

    /**
     * рендер вкладок в модалке
     * далее рендер полей в самой вкладке
     */

    pushButtonTab(event, customEventData) {// по идее это должно быть в ModalCharacterPumpingLogic эта штука переключает вкладки в модалке
        switch (customEventData) {
            case "0":
                this.renderModalPumping(TypesModalPumping.PARAMETERS);
                break;
            case "1":
                this.renderModalPumping(TypesModalPumping.PUMPING_LEVEL);
                break;
            case "2":
                this.renderModalPumping(TypesModalPumping.PUMPING_STARS);
                break;
        }
    }

    renderModalPumping(tab: string) {
        switch (tab) {
            case TypesModalPumping.PARAMETERS:
                this.tabs[0].active = true;
                this.tabs[1].active = false;
                this.tabs[2].active = false;
                break;
            case TypesModalPumping.PUMPING_LEVEL:
                this.tabs[0].active = false;
                this.tabs[1].active = true;
                this.tabs[2].active = false;
                this.renderModalPumpingLevel();
                break;
            case TypesModalPumping.PUMPING_STARS:
                this.tabs[0].active = false;
                this.tabs[1].active = false;
                this.tabs[2].active = true;
                this.renderModalPumpingStars();
                break;
        }

    }

    renderModalPumpingLevel() {
        let character = CharactersStorage.instance.characters[ModalCharacterPumpingLogic.instance.characterIndex];
        if (character != null) {
            let targetExp = ConfigStorageController.getHeroLevelExpirienceByTypeAndLevel(character.type, character.level + 1);
            this.level.string = "Ур. " + character.level;
            this.experience.string = character.experience + "/" + targetExp;
            this.slider.fillRange = character.experience / targetExp;
            for (let i = 0; i < this.quantity.length; i++) {
                let inventoryQuantity = InventoryStorageController.getQuantityByType(TypesItems.BOOKS[i])
                this.quantity[i].string = "x" + inventoryQuantity;
            }
        }
    }

    renderModalPumpingStars() {
        let character = CharactersStorage.instance.characters[ModalCharacterPumpingLogic.instance.characterIndex];
        if (character != null) {
            let inventoryQuantity = InventoryStorageController.getQuantityByType(ModalCharacterPumpingLogic.instance.getTypeFragment(character));
            this.starTitle.string = "Фрагменты для след. этапа: " + inventoryQuantity + "/4";
            this.sliderStars.fillRange = character.stars % 5 / 5;
            for (let i = 0; i < this.stars.length; i++) {
                let starActive = character.stars / 5 >= i;
                this.stars[i].active = starActive;
            }
        }
    }
}