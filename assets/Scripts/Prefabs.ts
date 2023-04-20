import { _decorator, Component, Prefab } from 'cc';
import { TypesObject } from './Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('Prefabs')
export class Prefabs extends Component {

    public static instance: Prefabs;

    @property({ type: Prefab })
    private prefab: Prefab;

    onLoad() {
        Prefabs.instance = this;
    }

    getPrefab(type: string): Prefab {
        if (type == TypesObject.BUILD_0) return this.prefab;
        else if (type == TypesObject.BUILD_1) return this.prefab;
        else if (type == TypesObject.BUILD_2) return this.prefab;
    }
}

