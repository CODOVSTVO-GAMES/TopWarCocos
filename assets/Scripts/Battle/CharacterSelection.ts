import { _decorator, Component, Label, Sprite } from 'cc';
import { SpriteModel } from '../Model/SpriteModel';
import { CharactersModel } from '../Model/CharactersModel';
import { CharactersPresenter } from '../Presenter/CharactersPresenter';
import { BattleModel } from '../Model/BattleModel';
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
        if (BattleModel.instance.isBattle == false) {
            this.saveRenderCharacter(customEventData);
            // Battle.instance.ownRender();
        }
    }

    saveRenderCharacter(index: number) {
        let characters = CharactersPresenter.getCharacters();
        let spriteCharacter = SpriteModel.instance.getObjectSprite(characters[index].codeName, characters[index].level);
        characters[index] = CharactersModel.instance.getRandomCharacter();
        this.images[index].spriteFrame = spriteCharacter;
        this.texts[index].string = "Ур. " + characters[index].level;
        // Battle.instance.characterSelection();
    }
}