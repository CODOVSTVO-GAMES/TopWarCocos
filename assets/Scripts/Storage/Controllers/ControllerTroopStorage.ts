import { _decorator } from 'cc';
import { TroopStorage } from '../TroopStorage';
import { MapController } from '../../HomeBase/MapController';
import { TypesObjects } from '../../Static/TypesObjects';


export class ControllerTroopStorage {

    static setTroopStorage() {
        TroopStorage.instance.sizeTroopAir = new Array(TroopStorage.instance.sizeTroopStorage);
        TroopStorage.instance.sizeTroopMarine = new Array(TroopStorage.instance.sizeTroopStorage);
        TroopStorage.instance.sizeTroopOverland = new Array(TroopStorage.instance.sizeTroopStorage);

        for (let i = 0; i < MapController.getMapSize(); i++) {
            if (MapController.getObjectParameter(i) != null) {
                if (MapController.getObjectParameter(i).type == TypesObjects.TROOP_AIR) {
                    TroopStorage.instance.sizeTroopAir[MapController.getObjectParameter(i).level - 1] += 1;
                }
                else if (MapController.getObjectParameter(i).type == TypesObjects.TROOP_MARINE) {
                    TroopStorage.instance.sizeTroopMarine[MapController.getObjectParameter(i).level - 1] += 1;
                }
                else if (MapController.getObjectParameter(i).type == TypesObjects.TROOP_OVERLAND) {
                    TroopStorage.instance.sizeTroopOverland[MapController.getObjectParameter(i).level - 1] += 1;
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
