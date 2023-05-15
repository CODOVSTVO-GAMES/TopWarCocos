import { _decorator, Component, instantiate, Vec3 } from 'cc';
import { PrefabsStorage } from './Storage/PrefabsStorage';
import { ObjectParameters } from './ObjectParameters';
import { TypesObjects } from './Static/TypesObjects';
import { ControllerHomeMapStorage } from './Storage/Controllers/ControllerHomeMapStorage';
const { ccclass } = _decorator;

@ccclass('SpawnObjects')
export class SpawnObjects extends Component {

    public static instance: SpawnObjects;

    onLoad() {
        SpawnObjects.instance = this;
    }

    start() {
        setTimeout(() => {
            this.spawnObjectsPos(TypesObjects.WALL, 1, 20);
            this.spawnObjectsPos(TypesObjects.WALL, 1, 42);
            this.spawnObjectsPos(TypesObjects.COMMAND_POST, 1, 63);
        }, 500);
    }

    spawnObjectsPos(type: string, level: number, index: number): ObjectParameters {
        let object = instantiate(PrefabsStorage.instance.getPrefab(type));
        ControllerHomeMapStorage.setParent(object, index);
        object.getComponent(ObjectParameters).type = type;
        object.getComponent(ObjectParameters).level = level;
        object.getComponent(ObjectParameters).index = index;
        ControllerHomeMapStorage.setObjectParameter(object.getComponent(ObjectParameters), type, index);
        return object.getComponent(ObjectParameters);
    }

    spawnObjectsNearby(type: string, level: number, index: number) {
        let minDistance: number = 100000;
        let indexSpawnObject: number = 0;
        let isSpawnObject: boolean = false;
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            let currentDistance: number = Vec3.distance(ControllerHomeMapStorage.getCoordPosition(index), ControllerHomeMapStorage.getCoordPosition(i));
            if (currentDistance < minDistance) {
                let arrayIndexs: number[] = ControllerHomeMapStorage.getArrayIndexs(type);
                let check: boolean = false;
                for (let j = 0; j < arrayIndexs.length; j++) {
                    if (ControllerHomeMapStorage.getObjectParameter(i - arrayIndexs[j]) != null) {
                        check = true;
                        break;
                    }
                }
                if (check == false) {
                    minDistance = currentDistance;
                    indexSpawnObject = i;
                    isSpawnObject = true;
                }
            }
        }
        if (isSpawnObject) {
            return SpawnObjects.instance.spawnObjectsPos(type, level, indexSpawnObject);
        }
        else {
            console.log("error: there is no free space.");
        }
    }

    spawnObjectsRandom(type: string, level: number) {
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

    spawnObjectsMerge(type: string, level: number, index: number) {
        this.spawnObjectsPos(type, level + 1, index);
    }
}