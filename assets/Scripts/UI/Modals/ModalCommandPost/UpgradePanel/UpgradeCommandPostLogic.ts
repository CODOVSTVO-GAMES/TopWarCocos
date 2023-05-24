import { _decorator, Component } from 'cc';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
import { UpgradeCommandPostInerface } from './UpgradeCommandPostInerface';
import { ControllerGameStorage } from '../../../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../../../Storage/Controllers/ControllerConfigStorage';
import { ControllerInventoryStorage } from '../../../../Storage/Controllers/ControllerInventoryStorage';
import { TypesItems } from '../../../../Static/TypesItems';
const { ccclass, property } = _decorator;

@ccclass('UpgradeCommandPostLogic')
export class UpgradeCommandPostLogic extends Component {

    static checkBtnModal() {
        // if () {

        // }
    }

    upgrateObject() {
        ControllerCommandPostStorage.addLevelCommandPost();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_MAINBUILDING, 1);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()));
        UpgradeCommandPostInerface.instance.updateInterface();
    }

    getItems() {

    }
}
