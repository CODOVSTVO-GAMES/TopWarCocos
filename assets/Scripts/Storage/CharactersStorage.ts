import { _decorator, Component, Node } from 'cc';
import { CharacterInfo } from '../Structures/CharacterInfo';
import { TypesObjects } from '../Static/TypesObjects';
import { ControllerConfigStorage } from './Controllers/ControllerConfigStorage';
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
        let config = ControllerConfigStorage.getHeroConfigByCodeName("blackWidow");
        this.characters[0] = new CharacterInfo(1, 0, 1, config.type, config.codeName, TypesObjects.TROOP_OVERLAND);
    }
}