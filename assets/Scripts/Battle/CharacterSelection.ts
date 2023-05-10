import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { CharacterBuffs } from './CharacterBuffs';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { Battle } from './Battle';
const { ccclass, property } = _decorator;

@ccclass('CharacterSelection')
export class CharacterSelection extends Component {

    public static instance: CharacterSelection;

    @property({ type: Sprite })
    public images: Sprite[] = [];

    @property({ type: Label })
    public texts: Label[] = [];

    onLoad() {
        CharacterSelection.instance = this;
    }

    start() {
        this.saveRenderCharacter(0);
        this.saveRenderCharacter(1);
    }

    randomCharacter(event, customEventData) {
        if (Battle.instance.isBattle == false) {
            this.saveRenderCharacter(customEventData);
        }
    }

    saveRenderCharacter(index: number) {
        Battle.instance.characters[index] = CharacterBuffs.instance.getRandomCharacter();
        this.images[index].spriteFrame = SpriteStorage.instance.getSprite(Battle.instance.characters[index].type, Battle.instance.characters[index].level);
        this.texts[index].string = "Ур. " + Battle.instance.characters[index].level;
        Battle.instance.characterSelection();
    }
}