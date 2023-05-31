import { _decorator, instantiate, Vec3 } from 'cc';
import { PrefabsStorage } from './Storage/PrefabsStorage';
import { ObjectParameters } from './ObjectParameters';
import { ControllerHomeMapStorage } from './Storage/Controllers/ControllerHomeMapStorage';
const { ccclass } = _decorator;

@ccclass('SpawnObjects')
export class SpawnObjects {

    static spawnObjectsFromStorage() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i) == null) continue;
            if (ControllerHomeMapStorage.getObjectParameter(i).index != i) continue;
            this.spawnObjectsPos(ControllerHomeMapStorage.getObjectParameter(i).type, ControllerHomeMapStorage.getObjectParameter(i).level, ControllerHomeMapStorage.getObjectParameter(i).index);
        }
    }

    static spawnObjectsPos(type: string, level: number, index: number): ObjectParameters {
        let object = instantiate(PrefabsStorage.instance.getObjectPrefab(type));
        ControllerHomeMapStorage.setParent(object, index);
        object.getComponent(ObjectParameters).type = type;
        object.getComponent(ObjectParameters).level = level;
        object.getComponent(ObjectParameters).index = index;
        ControllerHomeMapStorage.setObjectParameter(object.getComponent(ObjectParameters), type, index);
        return object.getComponent(ObjectParameters);
    }

    static spawnObjectsNearby(type: string, level: number, index: number) {
        let minDistance: number = 100000;
        let indexeSpawnObject: number = 0;
        let isSpawnObject: boolean = false;
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            let currentDistance: number = Vec3.distance(ControllerHomeMapStorage.getCoordPosition(index), ControllerHomeMapStorage.getCoordPosition(i));
            if (currentDistance < minDistance) {
                let arrayIndexes: number[] = ControllerHomeMapStorage.getArrayObject(type);
                let check: boolean = false;
                for (let j = 0; j < arrayIndexes.length; j++) {
                    if (ControllerHomeMapStorage.getObjectParameter(i - arrayIndexes[j]) != null) {
                        check = true;
                        break;
                    }
                }
                if (check == false) {
                    minDistance = currentDistance;
                    indexeSpawnObject = i;
                    isSpawnObject = true;
                }
            }
        }
        if (isSpawnObject) {
            return this.spawnObjectsPos(type, level, indexeSpawnObject);
        }
        else {
            console.log("error: there is no free space.");
        }
    }

    static spawnObjectsRandom(type: string, level: number) {
        let indexObject = 0;
        let iterationsCount = 0;
        while (true) {
            indexObject = Math.floor(Math.random() * ControllerHomeMapStorage.getMapSize());
            iterationsCount += 1;
            if (ControllerHomeMapStorage.getObjectParameter(indexObject) == null) {
                this.spawnObjectsPos(type, level, indexObject);
                break;
            }
            if (ControllerHomeMapStorage.getMapSize() <= iterationsCount) {
                console.log("error");
                break;
            }
        }
    }

    static spawnObjectsMerge(type: string, level: number, index: number) {
        this.spawnObjectsPos(type, level + 1, index);
    }
}