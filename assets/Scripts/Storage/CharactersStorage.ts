import { _decorator, Component } from 'cc';
import { CharacterInfo } from '../Structures/CharacterInfo';
import { TypesObjects } from '../Static/TypesObjects';
import { ControllerConfigStorage } from './Controllers/ControllerConfigStorage';
import { TypesCharacters } from '../Static/TypesCharacters';
const { ccclass, property } = _decorator;

@ccclass('CharactersStorage')
export class CharactersStorage extends Component {

    public static instance: CharactersStorage;

    public characters: CharacterInfo[] = [];

    private storageTypes: string[] = [TypesCharacters.BLACK_WIDOW, TypesCharacters.CHARACTER_1, TypesCharacters.CHARACTER_2, TypesCharacters.CHARACTER_3, TypesCharacters.CHARACTER_4, TypesCharacters.CHARACTER_5, TypesCharacters.CHARACTER_6, TypesCharacters.CHARACTER_7];

    onLoad() {
        CharactersStorage.instance = this;
        // this.characters = new Array(68);
    }

    start() {
        for (let i = 0; i < this.storageTypes.length; i++) {
            let heroLevel = i;
            let heroStarStady = 5;
            let config = ControllerConfigStorage.getHeroConfigByCodeName(this.storageTypes[i]); // hp = 120 + (24 * heroLevel + 5 * heroStarStady)
            this.characters.push(new CharacterInfo(i, 0, 1, config.startDamage + (config.coefDamage * heroLevel + 5 * heroStarStady), config.startDefense + (config.coefDefense * heroLevel + 5 * heroStarStady), config.startLeader, config.type, config.codeName, TypesObjects.TROOP_OVERLAND));
        }
    }

    getRandomCharacter(): CharacterInfo {
        return this.characters[Math.floor(Math.random() * this.characters.length)];
    }
}