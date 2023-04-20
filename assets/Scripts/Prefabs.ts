import { _decorator, Component, Prefab } from 'cc';
import { TypesObjects } from './Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('Prefabs')
export class Prefabs extends Component {

    public static instance: Prefabs;

    @property({ type: Prefab })
    private item_0: Prefab;

    @property({ type: Prefab })
    private item_1: Prefab;

    @property({ type: Prefab })
    private item_2: Prefab;

    onLoad() {
        Prefabs.instance = this;
    }

    getPrefab(type: string): Prefab {
        if (type == TypesObjects.BUILD_0) return this.item_0;
        else if (type == TypesObjects.BUILD_1) return this.item_1;
        else if (type == TypesObjects.BUILD_2) return this.item_2;
    }
}

