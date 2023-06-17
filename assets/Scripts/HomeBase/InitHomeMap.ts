import { _decorator, Component, Node, Prefab, Sprite, Vec3 } from 'cc';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { HomeMapStorageController } from '../Controllers/StorageControllers/HomeMapStorageController';
import { SpawnObjectsOnHomeMap } from '../Logic/SpawnObjectsOnHomeMap';
const { ccclass, property } = _decorator;

@ccclass('InitHomeMap')
export class InitHomeMap extends Component {

    @property({ type: Node })
    public parentSelectObject: Node;

    @property({ type: Node })
    public backgraund: Node;

    @property({ type: Prefab })
    public coord: Prefab;

    onLoad() {
        this.fillParentObject();
        this.fillArrayCoords();
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapFromStorage();
    }

    fillParentObject() {
        HomeMapStorage.instance.parentSelectObject = this.parentSelectObject;
    }

    fillArrayCoords() {
        let name = 0;
        let pos = new Vec3(-100, 2000, 0);
        let x = -100;
        let y = 2000;
        let count = 0;
        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            HomeMapStorageController.setCoord(this.backgraund.getChildByName(name.toString()), i, pos);
            name += 1;
            pos.x += 70;
            pos.y -= 50;
            count += 1;
            if (count == 50) {
                x -= 70;
                y -= 50;
                pos = new Vec3(x, y, 0);
                count = 0;
            }
        }
        this.fillArraySpriteCoords();
    }

    fillArraySpriteCoords() {
        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            HomeMapStorageController.setSpriteCoord(HomeMapStorageController.getCoord(i).getComponent(Sprite), i);
        }
    }
}

