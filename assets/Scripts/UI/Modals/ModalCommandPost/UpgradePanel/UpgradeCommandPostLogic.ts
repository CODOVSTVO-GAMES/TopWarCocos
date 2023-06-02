import { _decorator, Component } from 'cc';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
import { UpgradeCommandPostInerface } from './UpgradeCommandPostInerface';
import { ControllerGameStorage } from '../../../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../../../Storage/Controllers/ControllerConfigStorage';
import { ControllerInventoryStorage } from '../../../../Storage/Controllers/ControllerInventoryStorage';
import { TypesItems } from '../../../../Static/TypesItems';
import { ControllerHomeMapStorage } from '../../../../Storage/Controllers/ControllerHomeMapStorage';
import { TypesObjects } from '../../../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('UpgradeCommandPostLogic')
export class UpgradeCommandPostLogic extends Component {

    static checkBtnModal() {
        // if () {

        // }
    }

    upgrateObject() {
        ControllerCommandPostStorage.addLevelCommandPost();
        ControllerGameStorage.reduceCoins(ControllerConfigStorage.getPriceUpdateMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()));
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_MAINBUILDING, ControllerConfigStorage.getImprivementResourceNumberMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()));
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()));
        ControllerHomeMapStorage.upgradeLevelObject(ControllerHomeMapStorage.getObjectParametersByType(TypesObjects.COMMAND_POST).index);
        UpgradeCommandPostInerface.instance.updateInterface();
    }

    getItems() {

    }
}
