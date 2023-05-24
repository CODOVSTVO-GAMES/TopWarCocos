import { _decorator } from 'cc';
import { CharactersStorage } from '../CharactersStorage';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';
import { CharacterInfo } from '../../Structures/CharacterInfo';
import { ControllerConfigStorage } from './ControllerConfigStorage';
import { ModalCharacterInfoIntarface } from '../../UI/Modals/Characters/ModalCharacterInfo/ModalCharacterInfoInterface';
import { ModalCharacterPumpingInterface } from '../../UI/Modals/Characters/ModalCharacterPumping/ModalCharacterPumpingInterface';
import { TypesCharacters } from '../../Static/TypesCharacters';
import { TypesObjects } from '../../Static/TypesObjects';

export class ControllerCharactrerStorage {

    private static storageTypes: string[] = [TypesCharacters.BLACK_WIDOW, TypesCharacters.CHARACTER_1, TypesCharacters.CHARACTER_2, TypesCharacters.CHARACTER_3, TypesCharacters.CHARACTER_4, TypesCharacters.CHARACTER_5, TypesCharacters.CHARACTER_6, TypesCharacters.CHARACTER_7];

    // =================================================================

    static assignStartingValues() {
        for (let i = 0; i < this.storageTypes.length; i++) {
            let heroLevel = 1;
            let config = ControllerConfigStorage.getHeroConfigByCodeName(this.storageTypes[i]); // hp = 120 + (24 * heroLevel + 5 * heroStarStady)
            CharactersStorage.instance.characters.push(new CharacterInfo(heroLevel, 0, 5, config.startDamage + (config.coefDamage * heroLevel + 5), config.startDefense + (config.coefDefense * heroLevel + 5 * 1), config.startLeader, config.type, config.codeName, TypesObjects.TROOP_OVERLAND));
        }
        this.updateCharactrerStorage();
    }

    static assigningSaveValues(obj: Object[]) {
        let json = JSON.parse(JSON.stringify(obj));
        for (let i = 0; i < obj.length; i++) {
            let config = ControllerConfigStorage.getHeroConfigByCodeName(json[i].codeName);
            CharactersStorage.instance.characters.push(new CharacterInfo(json.level, json.experience, json.stars, config.startDamage + (config.coefDamage * json.level + 5), config.startDefense + (config.coefDefense * json.level + 5 * 1), config.startLeader, config.type, config.codeName, json.type));
        }
    }

    // =================================================================

    static getRandomCharacter(): CharacterInfo {
        return CharactersStorage.instance.characters[Math.floor(Math.random() * CharactersStorage.instance.characters.length)];
    }

    static getCharacters(): CharacterInfo[] {
        return CharactersStorage.instance.characters;
    }

    static equateProfessionPower(exp: number, level: number, stars: number, codeName: string) {
        let config = ControllerConfigStorage.getHeroConfigByCodeName(codeName);
        CharactersStorage.instance.characters.push(new CharacterInfo(level, exp, stars, config.startDamage + (config.coefDamage * level + 5), config.startDefense + (config.coefDefense * level + 5 * 1), config.startLeader, config.type, config.codeName, TypesObjects.TROOP_OVERLAND));
    }

    // =================================================================

    static addExperience(value: number, index: number) {
        if (value == 0) return;
        CharactersStorage.instance.characters[index].experience += value;
        let targetExperience = ControllerConfigStorage.getHeroLevelExpirienceByTypeAndLevel(CharactersStorage.instance.characters[index].type, this.getLevel(index) + 1);
        while (this.getExperience(index) > targetExperience) {
            if (this.getExperience(index) > targetExperience) {
                CharactersStorage.instance.characters[index].level++;
                CharactersStorage.instance.characters[index].experience -= targetExperience;
                targetExperience = ControllerConfigStorage.getHeroLevelExpirienceByTypeAndLevel(CharactersStorage.instance.characters[index].type, this.getLevel(index) + 1);
            }
        }
        CharactersStorage.instance.recalculationCharacter(index);
        ModalCharacterInfoIntarface.instance.renderCharacter(index);
        ModalCharacterPumpingInterface.instance.renderModalPumpingLevel();
        this.updateCharactrerStorage();
    }

    static getExperience(index: number): number {
        return CharactersStorage.instance.characters[index].experience;
    }

    // =================================================================

    static getLevel(index: number) {
        return CharactersStorage.instance.characters[index].level;
    }

    // =================================================================

    static updateCharactrerStorage() {
        let obj: Object[] = [];
        for (let i = 0; i < CharactersStorage.instance.characters.length; i++) {
            obj.push({
                level: CharactersStorage.instance.characters[i].level,
                exp: CharactersStorage.instance.characters[i].experience,
                stars: CharactersStorage.instance.characters[i].stars,
                codeName: CharactersStorage.instance.characters[i].codeName
            });
        }
        ControllerBufferStorage.addItem(TypesStorages.CHARACTER_STORAGE, obj);
    }
}