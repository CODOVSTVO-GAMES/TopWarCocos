import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import { CharacterInfo } from '../../../Structures/CharacterInfo';
import { SpriteModel } from '../../../Model/SpriteModel';
import { TypesCharacters } from '../../../Static/TypesCharacters';
import { CharactersModel } from '../../../Model/CharactersModel';
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

    /**
     * при открытии модалки со всеми персонажами рендерятся персонажи из СharacterStorage
     */

    renderCharacters() {
        this.sortedCharacters();
        for (let i = 0; i < this.charactersRendered.length; i++) {
            if (this.images[i] != null && this.names[i] != null && this.levels[i] != null && this.charactersRendered[i] != null) {
                let spriteImage = SpriteModel.instance.getObjectSprite(this.charactersRendered[i].codeName, this.charactersRendered[i].level);
                let spriteTypeTroop = SpriteModel.instance.getObjectSprite(this.charactersRendered[i].typeTroop, 0);
                this.images[i].spriteFrame = spriteImage;
                this.typeTroop[i].spriteFrame = spriteTypeTroop;
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
        let str = ''
        for (let i = 0; i < CharactersModel.instance.characters.length; i++) {
            str = str + CharactersModel.instance.characters[i].type + ','
        }

        let rCharacters = new Array<CharacterInfo>
        let srCharacters = new Array<CharacterInfo>
        let ssrCharacters = new Array<CharacterInfo>

        for (let l = 0; l < CharactersModel.instance.characters.length; l++) {
            if (CharactersModel.instance.characters[l].type == 'r') {
                rCharacters.push(CharactersModel.instance.characters[l])
            } else if (CharactersModel.instance.characters[l].type == 'sr') {
                srCharacters.push(CharactersModel.instance.characters[l])
            } else if (CharactersModel.instance.characters[l].type == 'ssr') {
                ssrCharacters.push(CharactersModel.instance.characters[l])
            }
        }

        rCharacters = this.sortArrayCharacterInfoByLevel(rCharacters)
        srCharacters = this.sortArrayCharacterInfoByLevel(srCharacters)
        ssrCharacters = this.sortArrayCharacterInfoByLevel(ssrCharacters)

        this.charactersRendered = ssrCharacters
        this.charactersRendered = this.charactersRendered.concat(srCharacters)
        this.charactersRendered = this.charactersRendered.concat(rCharacters)
        CharactersModel.instance.characters = this.charactersRendered;
    }

    private sortArrayCharacterInfoByLevel(arr: Array<CharacterInfo>): Array<CharacterInfo> {
        arr.sort((a, b) => {
            if (a.level > b.level) {
                return 1;
            }
            else {
                return -1;
            }
        })
        return arr
    }
}