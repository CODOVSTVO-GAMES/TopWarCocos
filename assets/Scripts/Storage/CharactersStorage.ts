import { _decorator, Component } from 'cc';
import { CharacterInfo } from '../Structures/CharacterInfo';
import { TypesObjects } from '../Static/TypesObjects';
import { ControllerConfigStorage } from './Controllers/ControllerConfigStorage';
import { TypesCharacters } from '../Static/TypesCharacters';
const { ccclass } = _decorator;

@ccclass('CharactersStorage')
export class CharactersStorage extends Component {

    public static instance: CharactersStorage;

    public characters: Array<CharacterInfo> = [];

    private storageTypes: string[] = [TypesCharacters.BLACK_WIDOW, TypesCharacters.CHARACTER_1, TypesCharacters.CHARACTER_2, TypesCharacters.CHARACTER_3, TypesCharacters.CHARACTER_4, TypesCharacters.CHARACTER_5, TypesCharacters.CHARACTER_6, TypesCharacters.CHARACTER_7];

    onLoad() {
        CharactersStorage.instance = this;
        // this.characters = new Array(68);
        setInterval(() => console.log(this.characters), 1000)
    }

    start() {
        for (let i = 0; i < this.storageTypes.length; i++) {
            let heroLevel = 1;
            let config = ControllerConfigStorage.getHeroConfigByCodeName(this.storageTypes[i]); // hp = 120 + (24 * heroLevel + 5 * heroStarStady)
            this.characters.push(new CharacterInfo(heroLevel, 0, 1, config.startDamage + (config.coefDamage * heroLevel + 5 * 1), config.startDefense + (config.coefDefense * heroLevel + 5 * 1), config.startLeader, config.type, config.codeName, TypesObjects.TROOP_OVERLAND));
        }
    }

    getRandomCharacter(): CharacterInfo {
        return this.characters[Math.floor(Math.random() * this.characters.length)];
    }

    recalculationCharacter(index: number) {
        let config = ControllerConfigStorage.getHeroConfigByCodeName(this.characters[index].codeName);
        this.characters[index].damage = config.startDamage + (config.coefDamage * this.characters[index].level + 5 * this.characters[index].stars);
        this.characters[index].defense = config.startDefense + (config.coefDefense * this.characters[index].level + 5 * this.characters[index].stars);
    }
}