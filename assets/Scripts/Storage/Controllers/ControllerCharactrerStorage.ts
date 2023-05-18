import { _decorator } from 'cc';
import { CharactersStorage } from '../CharactersStorage';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';
import { CharacterInfo } from '../../Structures/CharacterInfo';
import { ControllerConfigStorage } from './ControllerConfigStorage';
import { ModalCharacterInfoIntarface } from '../../UI/Modals/Characters/ModalCharacterInfo/ModalCharacterInfoInterface';
import { ModalCharacterPumpingInterface } from '../../UI/Modals/Characters/ModalCharacterPumping/ModalCharacterPumpingInterface';

export class ControllerCharactrerStorage {

    static getRandomCharacter(): CharacterInfo {
        return CharactersStorage.instance.characters[Math.floor(Math.random() * CharactersStorage.instance.characters.length)];
    }

    static getCharacters(): CharacterInfo[] {
        return CharactersStorage.instance.characters;
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
                stars: CharactersStorage.instance.characters[i].stars
            });
        }
        ControllerBufferStorage.addItem(TypesStorages.CHARACTER_STORAGE, obj);
    }
}

