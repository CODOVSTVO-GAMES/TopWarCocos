import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import { CharacterInfo } from '../../../Structures/CharacterInfo';
import { SpriteStorage } from '../../../Storage/SpriteStorage';
import { CharactersStorage } from '../../../Storage/CharactersStorage';
import { TypesCharacters } from '../../../Static/TypesCharacters';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterGridInterface')
export class ModalCharacterGridInterface extends Component {

    public static instance: ModalCharacterGridInterface;

    @property({ type: Sprite })
    public images: Sprite[] = [];

    @property({ type: Sprite })
    public typeTroop: Sprite[] = [];

    @property({ type: Sprite })
    public cardsSprite: Sprite[] = [];

    @property({ type: SpriteFrame })
    public cardsBG: SpriteFrame[] = [];

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
                this.images[i].spriteFrame = SpriteStorage.instance.getObjectSprite(this.charactersRendered[i].codeName, this.charactersRendered[i].level);
                this.typeTroop[i].spriteFrame = SpriteStorage.instance.getObjectSprite(this.charactersRendered[i].typeTroop, 0);
                this.names[i].string = this.charactersRendered[i].codeName;
                this.levels[i].string = "Ур. " + this.charactersRendered[i].level;
                switch (this.charactersRendered[i].type) {
                    case TypesCharacters.R:
                        this.cardsSprite[i].spriteFrame = this.cardsBG[0];
                        break;
                    case TypesCharacters.SR:
                        this.cardsSprite[i].spriteFrame = this.cardsBG[1];
                        break;
                    case TypesCharacters.SSR:
                        this.cardsSprite[i].spriteFrame = this.cardsBG[2];
                        break;
                }
            }
        }
    }

    sortedCharacters() {
        // this.charactersRendered = CharactersStorage.instance.characters;

        let str = ''
        for (let i = 0; i < CharactersStorage.instance.characters.length; i++) {
            str = str + CharactersStorage.instance.characters[i].type + ','
        }
        console.log('1+' + str)

        let rCharacters = new Array<CharacterInfo>
        let srCharacters = new Array<CharacterInfo>
        let ssrCharacters = new Array<CharacterInfo>

        for (let l = 0; l < CharactersStorage.instance.characters.length; l++) {
            if (CharactersStorage.instance.characters[l].type == 'r') {
                rCharacters.push(CharactersStorage.instance.characters[l])
            } else if (CharactersStorage.instance.characters[l].type == 'sr') {
                srCharacters.push(CharactersStorage.instance.characters[l])
            } else if (CharactersStorage.instance.characters[l].type == 'ssr') {
                ssrCharacters.push(CharactersStorage.instance.characters[l])
            }
        }

        rCharacters = this.sortArrayCharacterInfoByLevel(rCharacters)
        srCharacters = this.sortArrayCharacterInfoByLevel(srCharacters)
        ssrCharacters = this.sortArrayCharacterInfoByLevel(ssrCharacters)

        this.charactersRendered = ssrCharacters
        this.charactersRendered = this.charactersRendered.concat(srCharacters)
        this.charactersRendered = this.charactersRendered.concat(rCharacters)
        CharactersStorage.instance.characters = this.charactersRendered;
    }

    private sortArrayCharacterInfoByLevel(arr: Array<CharacterInfo>): Array<CharacterInfo> {
        arr.sort((a, b) => {
            if (a.level > b.level) {
                return 1;
            }
            else {
                return -1;
            }
            return 0;
        })
        return arr
    }
}