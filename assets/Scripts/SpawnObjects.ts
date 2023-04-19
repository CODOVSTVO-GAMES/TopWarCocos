import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { MapStorage } from './MapStorage';
import { ObjectParameters } from './ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('SpawnObjects')
export class SpawnObjects extends Component {

    public static instance: SpawnObjects;

    @property({type: Prefab})
    private prefab: Prefab;

    start() {
        SpawnObjects.instance = this;
        setTimeout(() => { this.spawnObjects(1); }, 1000);
    }

    spawnObjects(coord: number) {
        console.log("success");
        let object = instantiate(this.prefab);
        object.parent = MapStorage.instance.coords[coord];
        MapStorage.instance.arrayObjectParameters[coord] = object.getComponent(ObjectParameters);
    }
}