import { _decorator } from 'cc';
import { ControllerGameStorage } from './Storage/Controllers/ControllerGameStorage';

export class Test {

    static convertJsonToObject(str: string) {
        let obj = JSON.parse(str);
        if (obj.name == "GameStorage") {
            ControllerGameStorage.equateCoins(obj.value.coins);
            ControllerGameStorage.equateGems(obj.value.coinsInTime);
            ControllerGameStorage.equateGems(obj.value.gems);
            ControllerGameStorage.equateEnergy(obj.value.energy);
            ControllerGameStorage.equateExperience(obj.value.experience);
            ControllerGameStorage.equateMaxPower(obj.value.maxPower);
            ControllerGameStorage.equateTerritoryPower(obj.value.territoryPower);
            ControllerGameStorage.equateTechnoPower(obj.value.technoPower);
            ControllerGameStorage.equateHeroPower(obj.value.heroPower);
            ControllerGameStorage.equateArsenalPower(obj.value.arsenalPower);
            ControllerGameStorage.equateProfessionPower(obj.value.professionPower);
        }
    }
}

