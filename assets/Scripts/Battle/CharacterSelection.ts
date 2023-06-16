import { _decorator, Component, Label, Sprite } from 'cc';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { Battle } from './Battle';
import { CharactersStorage } from '../Storage/CharactersStorage';
import { ControllerCharactrerStorage } from '../Storage/Controllers/ControllerCharactrerStorage';
import { BattleStorage } from '../Storage/BattleStorage';
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
        // this.saveRenderCharacter(0);
        // this.saveRenderCharacter(1);
    }

    randomCharacter(event, customEventData) {
        if (BattleStorage.instance.isBattle == false) {
            this.saveRenderCharacter(customEventData);
            Battle.instance.ownRender();
        }
    }

    saveRenderCharacter(index: number) {
        let characters = ControllerCharactrerStorage.getCharacters();
        let spriteCharacter = SpriteStorage.instance.getObjectSprite(characters[index].codeName, characters[index].level);
        characters[index] = CharactersStorage.instance.getRandomCharacter();
        this.images[index].spriteFrame = spriteCharacter;
        this.texts[index].string = "Ур. " + characters[index].level;
        Battle.instance.characterSelection();
    }
}