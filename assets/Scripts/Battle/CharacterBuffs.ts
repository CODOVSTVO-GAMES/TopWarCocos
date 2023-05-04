import { _decorator, Component, Node } from 'cc';
import { ConfigurationCharacters } from '../Structures/ConfigurationCharacters';
const { ccclass, property } = _decorator;

@ccclass('CharacterBuffs')
export class CharacterBuffs extends Component {

    public static instance: CharacterBuffs;
    private configCharacter: ConfigurationCharacters[] = []

    onLoad() {
        CharacterBuffs.instance = this;
        this.initOwerland();
    }

    initOwerland() {
        this.configCharacter.push(new ConfigurationCharacters(0, 0, 0, 300, "character_0"));
        this.configCharacter.push(new ConfigurationCharacters(1, 1, 1, 300, "character_1"));
        this.configCharacter.push(new ConfigurationCharacters(2, 1, 1, 300, "character_2"));
        this.configCharacter.push(new ConfigurationCharacters(3, 1, 1, 300, "character_3"));
        this.configCharacter.push(new ConfigurationCharacters(4, 1, 1, 300, "character_4"));
        this.configCharacter.push(new ConfigurationCharacters(5, 1, 1, 300, "character_5"));
        this.configCharacter.push(new ConfigurationCharacters(6, 1, 1, 300, "character_6"));
    }

    getConfigByType(type: string) {
        for (let x = 0; x < this.configCharacter.length; x++) {
            if (this.configCharacter[x].type == type) {
                return this.configCharacter[x];
            }
        }
        throw "Не существует такого персонажа"
    }

    getRandomCharacter(): ConfigurationCharacters {
        return this.configCharacter[Math.floor(Math.random() * this.configCharacter.length)];
    }
}