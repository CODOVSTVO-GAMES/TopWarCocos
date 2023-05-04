import { _decorator, Component, instantiate, Vec3 } from 'cc';
import { Prefabs } from './Prefabs';
import { ObjectParameters } from './ObjectParameters';
import { MapController } from './BaseMap/MapController';
import { TypesObjects } from './Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('SpawnObjects')
export class SpawnObjects extends Component {

    public static instance: SpawnObjects;

    onLoad() {
        SpawnObjects.instance = this;
    }

    start() {
        this.spawnObjectsPos(TypesObjects.WALL, 1, 20);
        this.spawnObjectsPos(TypesObjects.WALL, 1, 42);
        this.spawnObjectsPos(TypesObjects.TOWN_HALL, 1, 63);
    }

    spawnObjectsPos(type: string, level: number, index: number) {
        let object = instantiate(Prefabs.instance.getPrefab(type));
        MapController.setParent(object, index);
        object.getComponent(ObjectParameters).type = type;
        object.getComponent(ObjectParameters).level = level;
        object.getComponent(ObjectParameters).index = index;
        MapController.setObjectParameter(object.getComponent(ObjectParameters), type, index);
    }

    spawnObjectsNearby(type: string, level: number, index: number) {
        let minDistance: number = 100000;
        let indexSpawnObject: number = 0;
        let isSpawnObject: boolean = false;
        for (let i = 0; i < MapController.getMapSize(); i++) {
            let currentDistance: number = Vec3.distance(MapController.getCoordPosition(index), MapController.getCoordPosition(i));
            if (currentDistance < minDistance) {
                let arrayIndexs: number[] = MapController.getArrayIndexs(type);
                let check: boolean = false;
                for (let j = 0; j < arrayIndexs.length; j++) {
                    if (MapController.getObjectParameter(i - arrayIndexs[j]) != null) {
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
            SpawnObjects.instance.spawnObjectsPos(type, level, indexSpawnObject);
        }
        else {
            console.log("error: there is no free space.");
        }
    }

    spawnObjectsRandom(type: string, level: number) {
        let indexObject = 0;
        let iterationsCount = 0;
        while (true) {
            indexObject = Math.floor(Math.random() * MapController.getMapSize());
            iterationsCount += 1;
            if (MapController.getObjectParameter(indexObject) == null) {
                this.spawnObjectsPos(type, level, indexObject);
                break;
            }
            if (MapController.getMapSize() <= iterationsCount) {
                console.log("error");
                break;
            }
        }
    }

    spawnObjectsMerge(type: string, level: number, index: number) {
        this.spawnObjectsPos(type, level + 1, index);
    }
}