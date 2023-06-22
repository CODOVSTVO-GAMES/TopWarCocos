import { _decorator } from 'cc';
import { BarraksStorage } from '../../Storage/BarraksStorage';
import { BufferStorageController } from './BufferStorageController';
import { TypesStorages } from '../../Static/TypesStorages';
import { Barrack } from '../../Structures/Barrack';

export class BarracksStorageController {

    public static assignStartingValues() {
        BarraksStorage.instance.storage = new Array
    }

    public static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))

            BarraksStorage.instance.storage.push(new Barrack(json.index))
            BarraksStorage.instance.storage[i].queueSpawnObject = json.test
        }
        console.log(BarraksStorage.instance.storage)
    }

    public static saveStorage() {
        let obj: Object[] = []
        for (let i = 0; i < BarraksStorage.instance.storage.length; i++) {
            obj.push({
                index: BarraksStorage.instance.storage[i].indexBarrack,
                test: BarraksStorage.instance.storage[i].queueSpawnObject
            });
        }
        BufferStorageController.addItem(TypesStorages.BARRACKS_STORAGE, obj)
    }
}
