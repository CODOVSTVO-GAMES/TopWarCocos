import { _decorator, Component, instantiate, Node, Prefab, Vec3 } from 'cc';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { HighlightHomeMap } from './HighlightHomeMap';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';
import { SpawnObjects } from '../SpawnObjects';
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
        SpawnObjects.spawnObjectsFromStorage();
    }

    fillParentObject() {
        HomeMapStorage.instance.parentSelectObject = this.parentSelectObject;
    }

    fillArrayCoords() {
        let name: number = 0;
        let pos = new Vec3(-1000, 3000, 0);
        let x = -1000;
        let y = 3000;
        let count = 0;
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.coords[i] = this.backgraund.getChildByName(name.toString());
            HomeMapStorage.instance.coords[i].position = pos;
            name += 1;
            pos.x += 70;
            pos.y -= 50;
            count += 1;
            if (count == 80) {
                x -= 70;
                y -= 50;
                pos = new Vec3(x, y, 0);
                count = 0;
            }
        }
        HighlightHomeMap.initCellFree();
        HighlightHomeMap.initCellSelected();
        HighlightHomeMap.initCellBlock();
        HighlightHomeMap.initCellHint();
    }
}

