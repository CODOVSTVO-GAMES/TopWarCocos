import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { CharactersStorage } from '../Storage/CharactersStorage';
const { ccclass, property } = _decorator;

@ccclass('RenderCharactersGrid')
export class RenderCharactersGrid extends Component {

    @property({ type: Sprite })
    public images: Sprite[] = [];

    @property({ type: Sprite })
    public typeTroop: Sprite[] = [];

    @property({ type: Label })
    public names: Label[] = [];

    start() {

    }

    renderCharacters() {
        for (let i = 0; i < this.images.length; i++) {
            this.images[i].spriteFrame = SpriteStorage.instance.getSprite(CharactersStorage.instance.characters[i].codeName, CharactersStorage.instance.characters[i].level);
        }
    }
}