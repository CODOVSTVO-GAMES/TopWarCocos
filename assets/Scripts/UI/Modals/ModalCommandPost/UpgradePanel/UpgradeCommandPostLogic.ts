import { _decorator, Component, Node } from 'cc';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
import { UpgradeCommandPostInerface } from './UpgradeCommandPostInerface';
import { ControllerGameStorage } from '../../../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../../../Storage/Controllers/ControllerConfigStorage';
const { ccclass, property } = _decorator;

@ccclass('UpgradeCommandPostLogic')
export class UpgradeCommandPostLogic extends Component {

    @property({ type: Node })
    public actualLevelObject: Node;

    @property({ type: Node })
    public actualLevelObjaect: Node;

    upgrateObject() {
        ControllerCommandPostStorage.addLevelCommandPost();
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()));
        UpgradeCommandPostInerface.instance.updateInterface();
    }

    getItems() {

    }
}
