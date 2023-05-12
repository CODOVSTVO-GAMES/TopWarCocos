import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { CharacterInfo } from '../../../Structures/CharacterInfo';
import { SpriteStorage } from '../../../Storage/SpriteStorage';
import { CharactersStorage } from '../../../Storage/CharactersStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterGridInterface')
export class ModalCharacterGridInterface extends Component {

    public static instance: ModalCharacterGridInterface;

    @property({ type: Sprite })
    public images: Sprite[] = [];

    @property({ type: Sprite })
    public typeTroop: Sprite[] = [];

    @property({ type: Label })
    public names: Label[] = [];

    @property({ type: Label })
    public levels: Label[] = [];

    public charactersRendered: CharacterInfo[] = [];

    onLoad() {
        ModalCharacterGridInterface.instance = this;
    }

    renderCharacters() {
        this.sortedCharacters();
        for (let i = 0; i < this.charactersRendered.length; i++) {
            if (this.images[i] != null && this.names[i] != null && this.levels[i] != null && this.charactersRendered[i] != null) {
                this.images[i].spriteFrame = SpriteStorage.instance.getSprite(this.charactersRendered[i].codeName, this.charactersRendered[i].level);
                this.typeTroop[i].spriteFrame = SpriteStorage.instance.getSprite(this.charactersRendered[i].typeTroop, 0);
                this.names[i].string = this.charactersRendered[i].codeName;
                this.levels[i].string = "Ур. " + this.charactersRendered[i].level;
            }
        }
    }

    sortedCharacters() {
        this.charactersRendered = CharactersStorage.instance.characters;
        this.charactersRendered.sort((a, b) => {
            if (a.level > b.level) {
                return 1;
            }
            else {
                return -1;
            }
            return 0;
        });
    }
}