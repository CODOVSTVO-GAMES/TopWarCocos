import { _decorator, Component, Node } from 'cc';
import { MapController } from './HomeBase/MapController';
import { MapStorage } from './Storage/MapStorage';
import { HighlightHomeMap } from './HomeBase/HighlightHomeMap';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {

    @property({ type: Node })
    public alo: Node;

    protected start(): void {

        let name: number = 0;

        for (let i = 0; i < MapController.getMapSize(); i++) {
            MapStorage.instance.coords[i] = this.alo.getChildByName(name.toString());
            name += 1;
        }
        HighlightHomeMap.initCellFree();
        HighlightHomeMap.initCellSelected();
        HighlightHomeMap.initCellBlock();
    }
}

