import { _decorator, Component, Node } from 'cc';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
const { ccclass, property } = _decorator;

@ccclass('UpgradeCommandPostLogic')
export class UpgradeCommandPostLogic extends Component {

    @property({ type: Node })
    public actualLevelObject: Node;

    @property({ type: Node })
    public actualLevelObjaect: Node;

    upgrateObject() {
        ControllerCommandPostStorage.addLevelCommandPost();
    }   

    getItems() {

    }
}
