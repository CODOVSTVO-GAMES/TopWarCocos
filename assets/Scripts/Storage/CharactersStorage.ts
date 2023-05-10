import { _decorator, Component, Node } from 'cc';
import { CharacterInfo } from '../Structures/CharacterInfo';
import { ConfigStorage } from './ConfigStorage';
import { TypesObjects } from '../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('CharactersStorage')
export class CharactersStorage extends Component {

    public static instance: CharactersStorage;

    public characters: CharacterInfo[] = [];

    onLoad() {
        CharactersStorage.instance = this;
        this.characters = new Array(68);
    }

    start() {
        let config = ConfigStorage.instance.getHeroConfigByCodeName("blackWidow");
        this.characters[0] = new CharacterInfo(1, 0, 1, config.type, config.codeName, TypesObjects.TROOP_OVERLAND);
    }
}