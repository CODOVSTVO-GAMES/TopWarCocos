import { _decorator, Component, instantiate, Vec3 } from 'cc';
import { MapStorage } from './Storage/MapStorage';
import { Prefabs } from './Prefabs';
import { ObjectParameters } from './ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('SpawnObjects')
export class SpawnObjects extends Component {

    public static instance: SpawnObjects;

    onLoad() {
        SpawnObjects.instance = this;
    }

    spawnObjectsPos(type: string, level: number, index: number) {
        let object = instantiate(Prefabs.instance.getPrefab(type));
        object.parent = MapStorage.instance.coords[index];
        object.getComponent(ObjectParameters).type = type;
        object.getComponent(ObjectParameters).level = level;
        object.getComponent(ObjectParameters).index = index;
        MapStorage.instance.arrayObjectParameters[index] = object.getComponent(ObjectParameters);
    }

    spawnObjectsNearby(type: string, level: number, index: number, count: number) {
        for (let i = 0; i < count; i++) {
            let minDistance = 100000;
            let indexObject = 0;
            for (let j = 0; j < MapStorage.instance.mapSize; j++) {
                let currentDistance = Vec3.distance(MapStorage.instance.coords[index].position, MapStorage.instance.coords[j].position);
                if (currentDistance < minDistance) {
                    if (MapStorage.instance.arrayObjectParameters[j] == null) {
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
            indexObject = Math.floor(Math.random() * MapStorage.instance.mapSize);
            iterationsCount += 1;
            if (MapStorage.instance.arrayObjectParameters[indexObject] == null) {
                this.spawnObjectsPos(type, level, indexObject);
                break;
            }
            if (MapStorage.instance.mapSize <= iterationsCount) {
                console.log("error");
                break;
            }
        }
    }

    spawnObjectsMerge(type: string, level: number, index: number) {
        this.spawnObjectsPos(type, level + 1, index);
    }
}