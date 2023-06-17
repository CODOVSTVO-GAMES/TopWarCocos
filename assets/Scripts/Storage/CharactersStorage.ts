import { _decorator, Component } from 'cc';
import { CharacterInfo } from '../Structures/CharacterInfo';
import { ConfigStorageController } from '../Controllers/StorageControllers/ConfigStorageController';
const { ccclass } = _decorator;

@ccclass('CharactersStorage')
export class CharactersStorage extends Component {

    public static instance: CharactersStorage

    public characters: Array<CharacterInfo> = []

    public characterIndex: number

    public onLoad() {
        CharactersStorage.instance = this
    }

    public getRandomCharacter(): CharacterInfo {
        return this.characters[Math.floor(Math.random() * this.characters.length)]
    }

    public recalculationCharacter(index: number) {
        let config = ConfigStorageController.getHeroConfigByCodeName(this.characters[index].codeName)
        this.characters[index].damage = config.startDamage + (config.coefDamage * this.characters[index].level + this.characters[index].stars)
        this.characters[index].defense = config.startDefense + (config.coefDefense * this.characters[index].level + this.characters[index].stars)
    }
}