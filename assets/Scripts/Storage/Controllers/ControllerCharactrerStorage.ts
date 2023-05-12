import { _decorator } from 'cc';
import { CharactersStorage } from '../CharactersStorage';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';
import { CharacterInfo } from '../../Structures/CharacterInfo';

export class ControllerCharactrerStorage {

    static getRandomCharacter(): CharacterInfo {
        return CharactersStorage.instance.characters[Math.floor(Math.random() * CharactersStorage.instance.characters.length)];
    }

    static updateCharactrerStorage() {
        let obj: Object[] = [];
        for (let i = 0; i < CharactersStorage.instance.characters.length; i++) {
            obj.push({
                level: CharactersStorage.instance.characters[i].level,
                exp: CharactersStorage.instance.characters[i].exp,
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

