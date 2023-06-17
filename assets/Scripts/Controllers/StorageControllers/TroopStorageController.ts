import { _decorator } from 'cc';
import { TroopStorage } from '../../Storage/TroopStorage';
import { TypesObjects } from '../../Static/TypesObjects';
import { HomeMapStorageController } from './HomeMapStorageController';

export class TroopStorageController {

    static setTroopStorage() {
        TroopStorage.instance.sizeTroopAir = new Array(TroopStorage.instance.sizeTroopStorage).fill(0);
        TroopStorage.instance.sizeTroopMarine = new Array(TroopStorage.instance.sizeTroopStorage).fill(0);
        TroopStorage.instance.sizeTroopOverland = new Array(TroopStorage.instance.sizeTroopStorage).fill(0);

        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            if (HomeMapStorageController.getObjectParameter(i) == null) continue;
            if (HomeMapStorageController.getObjectParameter(i).index != i) continue;
            if (HomeMapStorageController.getObjectParameter(i).type == TypesObjects.TROOP_AIR) {
                TroopStorage.instance.sizeTroopAir[HomeMapStorageController.getObjectParameter(i).level - 1] += 1;
            }
            else if (HomeMapStorageController.getObjectParameter(i).type == TypesObjects.TROOP_MARINE) {
                TroopStorage.instance.sizeTroopMarine[HomeMapStorageController.getObjectParameter(i).level - 1] += 1;
            }
            else if (HomeMapStorageController.getObjectParameter(i).type == TypesObjects.TROOP_OVERLAND) {
                TroopStorage.instance.sizeTroopOverland[HomeMapStorageController.getObjectParameter(i).level - 1] += 1;
            }
        }
    }

    static getSizeTroopAir(): number[] {
        return TroopStorage.instance.sizeTroopAir;
    }

    static getSizeTroopMarine(): number[] {
        return TroopStorage.instance.sizeTroopMarine;
    }

    static getSizeTroopOverland(): number[] {
        return TroopStorage.instance.sizeTroopOverland;
    }
}
