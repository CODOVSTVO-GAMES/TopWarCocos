import { _decorator, Component, Node } from 'cc';
import { MapController } from './MapController';
import { MapStorage } from '../Storage/MapStorage';
import { HighlightHomeMap } from './HighlightHomeMap';
const { ccclass, property } = _decorator;

@ccclass('InitHomeMap')
export class InitHomeMap extends Component {

    @property({ type: Node })
    public parentSelectObject: Node;

    @property({ type: Node })
    public backgraund: Node;

    start() {
        this.fillParentObject();
        this.fillArrayCoords();
    }

    fillParentObject() {
        MapStorage.instance.parentSelectObject = this.parentSelectObject;
    }

    fillArrayCoords() {
        let name: number = 0;
        for (let i = 0; i < MapController.getMapSize(); i++) {
            MapStorage.instance.coords[i] = this.backgraund.getChildByName(name.toString());
            name += 1;
        }
        HighlightHomeMap.initCellFree();
        HighlightHomeMap.initCellSelected();
        HighlightHomeMap.initCellBlock();
    }
}

