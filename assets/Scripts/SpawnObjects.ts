import { _decorator, Component, instantiate, Vec3 } from 'cc';
import { Prefabs } from './Prefabs';
import { ObjectParameters } from './ObjectParameters';
import { MapController } from './MapController';
import { TypesObjects } from './Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('SpawnObjects')
export class SpawnObjects extends Component {

    public static instance: SpawnObjects;

    onLoad() {
        SpawnObjects.instance = this;
    }

    start() {
        // this.spawnObjectsPos(TypesObjects.TOWN_HALL, 1, 4);
    }

    spawnObjectsPos(type: string, level: number, index: number) {
        let object = instantiate(Prefabs.instance.getPrefab(type));
        if (type == TypesObjects.BARRACKS_OVERLAND || type == TypesObjects.GOLD_MINE) {
            let arrayIndexs = [1, 5, 6];
            // object.getComponent(ObjectParameters).childrenObject = new Array(3);
            for (let i = 0; i < 3; i++) {
                let blockObject = instantiate(Prefabs.instance.getPrefab(TypesObjects.BLOCK_OBJECT));
                MapController.setParent(blockObject, index - arrayIndexs[i]);
                // object.getComponent(ObjectParameters).childrenObject[i] = blockObject.getComponent(ObjectParameters);
                blockObject.getComponent(ObjectParameters).type = type;
                blockObject.getComponent(ObjectParameters).index = level;
                blockObject.getComponent(ObjectParameters).index = index - arrayIndexs[i];
                blockObject.getComponent(ObjectParameters).blockObject = true;
                // blockObject.getComponent(ObjectParameters).parentObject = object.getComponent(ObjectParameters);
                MapController.setObjectParameter(blockObject.getComponent(ObjectParameters), index - arrayIndexs[i]);
            }
        }
        MapController.setParent(object, index);
        object.getComponent(ObjectParameters).type = type;
        object.getComponent(ObjectParameters).level = level;
        object.getComponent(ObjectParameters).index = index;
        MapController.setObjectParameter(object.getComponent(ObjectParameters), index);
    }

    spawnObjectsNearby(type: string, level: number, index: number, count: number) {
        for (let i = 0; i < count; i++) {
            let minDistance = 100000;
            let indexObject = 0;
            for (let j = 0; j < MapController.getMapSize(); j++) {
                let currentDistance = Vec3.distance(MapController.getCoordPosition(index), MapController.getCoordPosition(j));
                if (currentDistance < minDistance) {
                    if (MapController.getObjectParameter(j) == null) {
                        minDistance = currentDistance;
                        indexObject = j;
                    }
                }
            }
            SpawnObjects.instance.spawnObjectsPos(type, level, indexObject);
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