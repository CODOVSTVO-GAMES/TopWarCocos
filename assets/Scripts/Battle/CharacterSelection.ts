import { _decorator, Component, Label, Sprite } from 'cc';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { Battle } from './Battle';
import { CharactersStorage } from '../Storage/CharactersStorage';
import { CharactrerStorageController } from '../Controllers/StorageControllers/CharactrerStorageController';
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

    randomCharacter(event, customEventData) {
        if (BattleStorage.instance.isBattle == false) {
            this.saveRenderCharacter(customEventData);
            // Battle.instance.ownRender();
        }
    }

    saveRenderCharacter(index: number) {
        let characters = CharactrerStorageController.getCharacters();
        let spriteCharacter = SpriteStorage.instance.getObjectSprite(characters[index].codeName, characters[index].level);
        characters[index] = CharactersStorage.instance.getRandomCharacter();
        this.images[index].spriteFrame = spriteCharacter;
        this.texts[index].string = "Ур. " + characters[index].level;
        // Battle.instance.characterSelection();
    }
}