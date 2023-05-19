import { _decorator, Component, Node } from 'cc';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';
const { ccclass, property } = _decorator;

@ccclass('ControllerRadarStorage')
export class ControllerRadarStorage {

    // =================================================================

    static assignStartingValues() {
        // for (let i = 0; i < this.storageTypes.length; i++) {
        //     let heroLevel = 1;
        //     let config = ControllerConfigStorage.getHeroConfigByCodeName(this.storageTypes[i]); // hp = 120 + (24 * heroLevel + 5 * heroStarStady)
        //     CharactersStorage.instance.characters.push(new CharacterInfo(heroLevel, 0, 5, config.startDamage + (config.coefDamage * heroLevel + 5), config.startDefense + (config.coefDefense * heroLevel + 5 * 1), config.startLeader, config.type, config.codeName, TypesObjects.TROOP_OVERLAND));
        // }
        this.updateRadarStorage();
    }

    static assigningSaveValues(obj: Object) {
        let json = JSON.parse(JSON.stringify(obj));

    }

    static updateRadarStorage() {
        let obj: Object[] = [];
        // for (let i = 0; i < CharactersStorage.instance.characters.length; i++) {
        //     obj.push({
        //         level: CharactersStorage.instance.characters[i].level,
        //         exp: CharactersStorage.instance.characters[i].experience,
        //         stars: CharactersStorage.instance.characters[i].stars,
        //         codeName: CharactersStorage.instance.characters[i].codeName
        //     });
        // }
        ControllerBufferStorage.addItem(TypesStorages.RADAR_STORAGE, obj);
    }
}