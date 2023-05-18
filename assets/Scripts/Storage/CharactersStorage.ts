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


    onLoad() {
        CharactersStorage.instance = this;
        // this.characters = new Array(68);
        // setInterval(() => console.log(this.characters), 1000)
    }

    start() {
        
    }

    getRandomCharacter(): CharacterInfo {
        return this.characters[Math.floor(Math.random() * this.characters.length)];
    }

    recalculationCharacter(index: number) {
        let config = ControllerConfigStorage.getHeroConfigByCodeName(this.characters[index].codeName);
        this.characters[index].damage = config.startDamage + (config.coefDamage * this.characters[index].level + this.characters[index].stars);
        this.characters[index].defense = config.startDefense + (config.coefDefense * this.characters[index].level + this.characters[index].stars);
    }
}