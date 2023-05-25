import { _decorator, Component, Node } from 'cc';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { HighlightHomeMap } from './HighlightHomeMap';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';
import { SpawnObjects } from '../SpawnObjects';
import { TypesStorages } from '../Static/TypesStorages';
import { DataStorageService } from '../Network/services/DataStorageService';
const { ccclass, property } = _decorator;

@ccclass('InitHomeMap')
export class InitHomeMap extends Component {

    @property({ type: Node })
    public parentSelectObject: Node;

    @property({ type: Node })
    public backgraund: Node;

    onLoad() {
        console.log("InitHomeMap OnLoad");
        this.fillParentObject();
        this.fillArrayCoords();
        SpawnObjects.spawnObjectsFromStorage();
    }

    fillParentObject() {
        HomeMapStorage.instance.parentSelectObject = this.parentSelectObject;
    }

    fillArrayCoords() {
        let name: number = 0;
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.coords[i] = this.backgraund.getChildByName(name.toString());
            name += 1;
        }
        HighlightHomeMap.initCellFree();
        HighlightHomeMap.initCellSelected();
        HighlightHomeMap.initCellBlock();
        HighlightHomeMap.initCellHint();
    }
}

