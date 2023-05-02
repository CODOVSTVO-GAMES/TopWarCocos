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
        this.configCharacter.push(new ConfigurationCharacters("blackVdova", 2, 2, 200))
    }

    getConfigByType(type: string) {
        for (let x = 0; x < this.configCharacter.length; x++) {
            if (this.configCharacter[x].type == type) {
                return this.configCharacter[x]
            }
        }
        throw "Не существует такого персонажа"
    }
}