import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { CharacterBuffs } from './CharacterBuffs';
import { SpriteStorage } from '../SpriteStorage';
const { ccclass, property } = _decorator;

@ccclass('CharacterSelection')
export class CharacterSelection extends Component {

    @property({ type: Sprite })
    public images: Sprite[] = [];

    @property({ type: Label })
    public texts: Label[] = [];

    start() {

    }

    randomCharacter(event, customEventData) {
        let character = CharacterBuffs.instance.getRandomCharacter();
        // this.images[customEventData].spriteFrame = SpriteStorage.instance.getSprite(character.type);
        this.texts[customEventData].string = character.level.toString();
    }
}