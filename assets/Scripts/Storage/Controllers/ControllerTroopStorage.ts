import { _decorator } from 'cc';
import { TroopStorage } from '../TroopStorage';
import { TypesObjects } from '../../Static/TypesObjects';
import { ControllerHomeMapStorage } from './ControllerHomeMapStorage';

export class ControllerTroopStorage {

    static setTroopStorage() {
        TroopStorage.instance.sizeTroopAir = new Array(TroopStorage.instance.sizeTroopStorage);
        TroopStorage.instance.sizeTroopMarine = new Array(TroopStorage.instance.sizeTroopStorage);
        TroopStorage.instance.sizeTroopOverland = new Array(TroopStorage.instance.sizeTroopStorage);

        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i) != null) {
                if (ControllerHomeMapStorage.getObjectParameter(i).type == TypesObjects.TROOP_AIR) {
                    TroopStorage.instance.sizeTroopAir[ControllerHomeMapStorage.getObjectParameter(i).level - 1] += 1;
                }
                else if (ControllerHomeMapStorage.getObjectParameter(i).type == TypesObjects.TROOP_MARINE) {
                    TroopStorage.instance.sizeTroopMarine[ControllerHomeMapStorage.getObjectParameter(i).level - 1] += 1;
                }
                else if (ControllerHomeMapStorage.getObjectParameter(i).type == TypesObjects.TROOP_OVERLAND) {
                    TroopStorage.instance.sizeTroopOverland[ControllerHomeMapStorage.getObjectParameter(i).level - 1] += 1;
                }
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
