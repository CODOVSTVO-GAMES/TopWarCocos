import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { CharactersStorage } from '../Storage/CharactersStorage';
const { ccclass, property } = _decorator;

@ccclass('RenderCharactersGrid')
export class RenderCharactersGrid extends Component {

    public static instance: RenderCharactersGrid;

    @property({ type: Sprite })
    public images: Sprite[] = [];

    @property({ type: Sprite })
    public typeTroop: Sprite[] = [];

    @property({ type: Label })
    public names: Label[] = [];

    @property({ type: Label })
    public levels: Label[] = [];

    onLoad() {
        RenderCharactersGrid.instance = this;
    }

    renderCharacters() {
        for (let i = 0; i < CharactersStorage.instance.characters.length; i++) {
            if (this.images[i] != null && this.names[i] != null && this.levels[i] != null && CharactersStorage.instance.characters[i] != null) {
                this.images[i].spriteFrame = SpriteStorage.instance.getSprite(CharactersStorage.instance.characters[i].codeName, CharactersStorage.instance.characters[i].level);
                this.typeTroop[i].spriteFrame = SpriteStorage.instance.getSprite(CharactersStorage.instance.characters[i].typeTroop, 0);
                this.names[i].string = CharactersStorage.instance.characters[i].codeName;
                this.levels[i].string = "Ур. " + CharactersStorage.instance.characters[i].level;
            }
        }
    }
}