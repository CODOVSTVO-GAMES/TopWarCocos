import { _decorator, Component, Label, Sprite, SpriteFrame } from 'cc';
import { CharacterInfo } from '../Structures/CharacterInfo';
import { CharactersModel } from '../Model/CharactersModel';
import { SpriteModel } from '../Model/SpriteModel';
import { TypesCharacters } from '../Static/TypesCharacters';
const { ccclass, property } = _decorator;

@ccclass('CharactersView')
export class CharactersView extends Component {

    public static instance: CharactersView

    @property({ type: Sprite })
    public images: Sprite[] = []

    @property({ type: Sprite })
    public typeTroop: Sprite[] = []

    @property({ type: Sprite })
    public cardsSprite: Sprite[] = []

    @property({ type: SpriteFrame })
    public cardsBG: SpriteFrame[] = []

    @property({ type: Label })
    public names: Label[] = []

    @property({ type: Label })
    public levels: Label[] = []

    public charactersRendered: CharacterInfo[] = []

    renderCharacters() {
        this.sortedCharacters()
        for (let i = 0; i < this.charactersRendered.length; i++) {
            if (this.images[i] != null && this.names[i] != null && this.levels[i] != null && this.charactersRendered[i] != null) {
                let spriteImage = SpriteModel.instance.getObjectSprite(this.charactersRendered[i].codeName, this.charactersRendered[i].level)
                let spriteTypeTroop = SpriteModel.instance.getObjectSprite(this.charactersRendered[i].typeTroop, 0)

                this.images[i].spriteFrame = spriteImage
                this.typeTroop[i].spriteFrame = spriteTypeTroop
                this.names[i].string = this.charactersRendered[i].codeName
                this.levels[i].string = "Ур. " + this.charactersRendered[i].level

                if (this.charactersRendered[i].type == TypesCharacters.R) {
                    this.cardsSprite[i].spriteFrame = this.cardsBG[0]
                }
                else if (this.charactersRendered[i].type == TypesCharacters.SR) {
                    this.cardsSprite[i].spriteFrame = this.cardsBG[1]
                }
                else if (this.charactersRendered[i].type == TypesCharacters.SSR) {
                    this.cardsSprite[i].spriteFrame = this.cardsBG[2]
                }
            }
        }
    }

    sortedCharacters() {
        let str = ''
        for (let i = 0; i < CharactersModel.instance.characters.length; i++) {
            str = str + CharactersModel.instance.characters[i].type + ','
        }

        let rCharacters = []
        let srCharacters = []
        let ssrCharacters = []

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
        CharactersModel.instance.characters = this.charactersRendered
    }

    private sortArrayCharacterInfoByLevel(arr: CharacterInfo[]): CharacterInfo[] {
        arr.sort((a, b) => {
            if (a.level > b.level) {
                return 1
            }
            else {
                return -1
            }
        })
        return arr
    }
}