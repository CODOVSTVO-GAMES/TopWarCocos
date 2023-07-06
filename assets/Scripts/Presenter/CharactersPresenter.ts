import { ConfigPresenter } from "./ConfigPresenter";
import { CharactersModel } from "../Model/CharactersModel";
import { TypesCharacters } from "../Static/TypesCharacters";
import { TypesObjects } from "../Static/TypesObjects";
import { CharacterInfo } from "../Structures/CharacterInfo";

export class CharactersPresenter {

    private static storageTypes: string[] = [TypesCharacters.BLACK_WIDOW, TypesCharacters.CHARACTER_1, TypesCharacters.CHARACTER_2, TypesCharacters.CHARACTER_3, TypesCharacters.CHARACTER_4, TypesCharacters.CHARACTER_5, TypesCharacters.CHARACTER_6, TypesCharacters.CHARACTER_7];

    static assignStartingValues() {
        for (let i = 0; i < this.storageTypes.length; i++) {
            let heroLevel = 1;
            let config = ConfigPresenter.getHeroConfigByCodeName(this.storageTypes[i]); // hp = 120 + (24 * heroLevel + 5 * heroStarStady)
            CharactersModel.instance.characters.push(new CharacterInfo(heroLevel, 0, 5, config.startDamage + (config.coefDamage * heroLevel + 5), config.startDefense + (config.coefDefense * heroLevel + 5 * 1), config.startLeader, config.type, config.codeName, TypesObjects.TROOP_OVERLAND));
        }
    }

    static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]));
            let config = ConfigPresenter.getHeroConfigByCodeName(json.codeName);
            CharactersModel.instance.characters.push(new CharacterInfo(json.level, json.exp, json.stars, config.startDamage + (config.coefDamage * json.level + 5), config.startDefense + (config.coefDefense * json.level + 5 * 1), config.startLeader, config.type, config.codeName, json.type));
        }
    }

    static getRandomCharacter(): CharacterInfo {
        return CharactersModel.instance.characters[Math.floor(Math.random() * CharactersModel.instance.characters.length)];
    }

    static getCharacters(): CharacterInfo[] {
        return CharactersModel.instance.characters;
    }

    static equateProfessionPower(exp: number, level: number, stars: number, codeName: string) {
        let config = ConfigPresenter.getHeroConfigByCodeName(codeName);
        CharactersModel.instance.characters.push(new CharacterInfo(level, exp, stars, config.startDamage + (config.coefDamage * level + 5), config.startDefense + (config.coefDefense * level + 5 * 1), config.startLeader, config.type, config.codeName, TypesObjects.TROOP_OVERLAND));
    }

    static addExperience(value: number, index: number) {
        if (value == 0) return;
        CharactersModel.instance.characters[index].experience += value;
        let targetExperience = ConfigPresenter.getHeroLevelExpirienceByTypeAndLevel(CharactersModel.instance.characters[index].type, this.getLevel(index) + 1);
        while (this.getExperience(index) > targetExperience) {
            if (this.getExperience(index) > targetExperience) {
                CharactersModel.instance.characters[index].level++;
                CharactersModel.instance.characters[index].experience -= targetExperience;
                targetExperience = ConfigPresenter.getHeroLevelExpirienceByTypeAndLevel(CharactersModel.instance.characters[index].type, this.getLevel(index) + 1);
            }
        }
        CharactersModel.instance.recalculationCharacter(index);
        // ModalCharacterInfoIntarface.instance.renderCharacter(index);
        // ModalCharacterPumpingInterface.instance.renderModalPumpingLevel();
    }

    static getExperience(index: number): number {
        return CharactersModel.instance.characters[index].experience;
    }

    static getLevel(index: number) {
        return CharactersModel.instance.characters[index].level;
    }
}