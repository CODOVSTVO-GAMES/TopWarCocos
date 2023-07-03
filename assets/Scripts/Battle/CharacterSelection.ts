import { _decorator, Component, Label, Sprite } from 'cc';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { BattleStorage } from '../Storage/BattleStorage';
import { CharactersModel } from '../Model/CharactersModel';
import { CharactersPresenter } from '../Presenter/CharactersPresenter';
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
        let characters = CharactersPresenter.getCharacters();
        let spriteCharacter = SpriteStorage.instance.getObjectSprite(characters[index].codeName, characters[index].level);
        characters[index] = CharactersModel.instance.getRandomCharacter();
        this.images[index].spriteFrame = spriteCharacter;
        this.texts[index].string = "Ур. " + characters[index].level;
        // Battle.instance.characterSelection();
    }
}