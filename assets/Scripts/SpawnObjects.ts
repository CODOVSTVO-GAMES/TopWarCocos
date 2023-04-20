import { _decorator, Component, instantiate } from 'cc';
import { MapStorage } from './Storage/MapStorage';
import { Prefabs } from './Prefabs';
import { ObjectParameters } from './ObjectParameters';
import { TypesObjects } from './Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('SpawnObjects')
export class SpawnObjects extends Component {

    public static instance: SpawnObjects;

    onLoad() {
        SpawnObjects.instance = this;
    }

    start() {
        setTimeout(() => { this.spawnObjects(1); }, 1000);
    }

    spawnObjects(coord: number) {
        let object = instantiate(Prefabs.instance.getPrefab(TypesObjects.BUILD_0));
        object.parent = MapStorage.instance.coords[coord];
        MapStorage.instance.arrayObjectParameters[coord] = object.getComponent(ObjectParameters);
    }

    spawnObjectsPos(coord: number) {

    }

    spawnObjectsNearby(coord: number) {

    }

    spawnObjectsNearbyRandom(type: string) {
        console.log("q");
    }

    spawnObjectsMerge(coord: number) {

    }
}