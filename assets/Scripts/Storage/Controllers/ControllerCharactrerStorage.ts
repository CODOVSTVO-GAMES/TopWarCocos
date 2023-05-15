import { _decorator } from 'cc';
import { CharactersStorage } from '../CharactersStorage';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';
import { CharacterInfo } from '../../Structures/CharacterInfo';
import { ControllerConfigStorage } from './ControllerConfigStorage';
import { ModalCharacterInfoIntarface } from '../../UI/Modals/Characters/ModalCharacterInfo/ModalCharacterInfoInterface';

export class ControllerCharactrerStorage {

    static getRandomCharacter(): CharacterInfo {
        return CharactersStorage.instance.characters[Math.floor(Math.random() * CharactersStorage.instance.characters.length)];
    }

    // =================================================================

    static addExperience(value: number, index: number) {
        if (value == 0) return;
        CharactersStorage.instance.characters[index].experience += value;
        if (this.getExperience(index) > ControllerConfigStorage.getHeroLevelExpirienceByTypeAndLevel(CharactersStorage.instance.characters[index].type, this.getLevel(index))) {
            CharactersStorage.instance.characters[index].level = this.getLevel(index) + 1;
            ModalCharacterInfoIntarface.instance.renderCharacter(index);
        }
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
                damage: CharactersStorage.instance.characters[i].damage,
                defense: CharactersStorage.instance.characters[i].defense,
                leadership: CharactersStorage.instance.characters[i].leadership,
                type: CharactersStorage.instance.characters[i].type,
                codeName: CharactersStorage.instance.characters[i].codeName,
                typeTroop: CharactersStorage.instance.characters[i].typeTroop,
            });
        }
        ControllerBufferStorage.addItem(TypesStorages.CHARACTER_STORAGE, obj);
        console.log("updateCharactrerStorage");
    }
}

