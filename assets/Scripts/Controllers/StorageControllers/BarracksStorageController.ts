import { _decorator } from 'cc';
import { BarraksStorage } from '../../Storage/BarraksStorage';
import { BufferStorageController } from './BufferStorageController';
import { TypesStorages } from '../../Static/TypesStorages';
import { Barrack } from '../../Structures/Barrack';

export class BarracksStorageController {

    public static assignStartingValues() {
        BarraksStorage.instance.arrayBarracks = new Array
    }

    public static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))

            BarraksStorage.instance.arrayBarracks.push(new Barrack(json.indexBarrack))
            BarraksStorage.instance.arrayBarracks[i].queueSpawnObject = json.queueSpawnObject
        }
    }

    public static saveStorage() {
        let obj: Object[] = []
        for (let i = 0; i < BarraksStorage.instance.arrayBarracks.length; i++) {
            obj.push({
                indexBarrack: BarraksStorage.instance.arrayBarracks[i].indexBarrack,
                queueSpawnObject: BarraksStorage.instance.arrayBarracks[i].queueSpawnObject
            })
        }
        BufferStorageController.addItem(TypesStorages.BARRACKS_STORAGE, obj)
    }
}
