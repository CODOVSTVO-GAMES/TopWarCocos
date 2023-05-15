import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { TypesModalPumping } from '../../../../Static/TypesModalPumping';
import { CharactersStorage } from '../../../../Storage/CharactersStorage';
import { ModalCharacterPumpingLogic } from './ModalCharacterPumpingLogic';
import { ControllerConfigStorage } from '../../../../Storage/Controllers/ControllerConfigStorage';
import { ControllerInventoryStorage } from '../../../../Storage/Controllers/ControllerInventoryStorage';
import { TypesInventory } from '../../../../Static/TypesInventory';
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

    @property({ type: Sprite })
    public slider: Sprite;

    @property({ type: Label })
    public quantity: Label[] = [];

    @property({ type: Sprite })
    public flags: Sprite[] = [];

    private books: string[] = [TypesInventory.WHITE_BOOK_EXPERIENCE, TypesInventory.GREEN_BOOK_EXPERIENCE, TypesInventory.BLUE_BOOK_EXPERIENCE, TypesInventory.PURPLE_BOOK_EXPERIENCE, TypesInventory.ORANGE_BOOK_EXPERIENCE];

    onLoad() {
        ModalCharacterPumpingInterface.instance = this;
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].active = false;
        }
    }

    pushButtonTab(event, customEventData) {
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
                break;
            case TypesModalPumping.PUMPING_STARS:
                this.tabs[0].active = false;
                this.tabs[1].active = false;
                this.tabs[2].active = true;
                break;
        }
        this.renderModalTexts();
    }

    renderModalTexts() {
        let character = CharactersStorage.instance.characters[ModalCharacterPumpingLogic.instance.characterIndex];
        if (character != null) {
            let targerExp = ControllerConfigStorage.getHeroLevelExpirienceByTypeAndLevel(character.type, character.level);
            this.level.string = "Ур. " + character.level;
            this.experience.string = character.experience + "/" + targerExp;
            this.slider.fillRange = character.experience / targerExp;
            for (let i = 0; i < this.quantity.length; i++) {
                this.quantity[i].string = "x" + ControllerInventoryStorage.getQuantityByType(this.books[i]);
            }
        }
    }
}