import { _decorator } from 'cc';
import { CharactersStorage } from '../../Storage/CharactersStorage';
import { BufferStorageController } from './BufferStorageController';
import { TypesStorages } from '../../Static/TypesStorages';
import { CharacterInfo } from '../../Structures/CharacterInfo';
import { ConfigStorageController } from './ConfigStorageController';
import { ModalCharacterInfoIntarface } from '../../UI/Modals/Characters/ModalCharacterInfo/ModalCharacterInfoInterface';
import { ModalCharacterPumpingInterface } from '../../UI/Modals/Characters/ModalCharacterPumping/ModalCharacterPumpingInterface';
import { TypesCharacters } from '../../Static/TypesCharacters';
import { TypesObjects } from '../../Static/TypesObjects';

export class CharactrerStorageController {

    private static storageTypes: string[] = [TypesCharacters.BLACK_WIDOW, TypesCharacters.CHARACTER_1, TypesCharacters.CHARACTER_2, TypesCharacters.CHARACTER_3, TypesCharacters.CHARACTER_4, TypesCharacters.CHARACTER_5, TypesCharacters.CHARACTER_6, TypesCharacters.CHARACTER_7];

    // =================================================================

    static assignStartingValues() {
        for (let i = 0; i < this.storageTypes.length; i++) {
            let heroLevel = 1;
            let config = ConfigStorageController.getHeroConfigByCodeName(this.storageTypes[i]); // hp = 120 + (24 * heroLevel + 5 * heroStarStady)
            CharactersStorage.instance.characters.push(new CharacterInfo(heroLevel, 0, 5, config.startDamage + (config.coefDamage * heroLevel + 5), config.startDefense + (config.coefDefense * heroLevel + 5 * 1), config.startLeader, config.type, config.codeName, TypesObjects.TROOP_OVERLAND));
        }
        this.saveStorage();
    }

    static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]));
            let config = ConfigStorageController.getHeroConfigByCodeName(json.codeName);
            CharactersStorage.instance.characters.push(new CharacterInfo(json.level, json.exp, json.stars, config.startDamage + (config.coefDamage * json.level + 5), config.startDefense + (config.coefDefense * json.level + 5 * 1), config.startLeader, config.type, config.codeName, json.type));
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
        let config = ConfigStorageController.getHeroConfigByCodeName(codeName);
        CharactersStorage.instance.characters.push(new CharacterInfo(level, exp, stars, config.startDamage + (config.coefDamage * level + 5), config.startDefense + (config.coefDefense * level + 5 * 1), config.startLeader, config.type, config.codeName, TypesObjects.TROOP_OVERLAND));
    }

    // =================================================================

    static addExperience(value: number, index: number) {
        if (value == 0) return;
        CharactersStorage.instance.characters[index].experience += value;
        let targetExperience = ConfigStorageController.getHeroLevelExpirienceByTypeAndLevel(CharactersStorage.instance.characters[index].type, this.getLevel(index) + 1);
        while (this.getExperience(index) > targetExperience) {
            if (this.getExperience(index) > targetExperience) {
                CharactersStorage.instance.characters[index].level++;
                CharactersStorage.instance.characters[index].experience -= targetExperience;
                targetExperience = ConfigStorageController.getHeroLevelExpirienceByTypeAndLevel(CharactersStorage.instance.characters[index].type, this.getLevel(index) + 1);
            }
        }
        CharactersStorage.instance.recalculationCharacter(index);
        ModalCharacterInfoIntarface.instance.renderCharacter(index);
        ModalCharacterPumpingInterface.instance.renderModalPumpingLevel();
        this.saveStorage();
    }

    static getExperience(index: number): number {
        return CharactersStorage.instance.characters[index].experience;
    }

    // =================================================================

    static getLevel(index: number) {
        return CharactersStorage.instance.characters[index].level;
    }

    // =================================================================

    static saveStorage() {
        let obj: Object[] = [];
        for (let i = 0; i < CharactersStorage.instance.characters.length; i++) {
            obj.push({
                level: CharactersStorage.instance.characters[i].level,
                exp: CharactersStorage.instance.characters[i].experience,
                stars: CharactersStorage.instance.characters[i].stars,
                codeName: CharactersStorage.instance.characters[i].codeName
            });
        }
        BufferStorageController.addItem(TypesStorages.CHARACTER_STORAGE, obj);
    }
}