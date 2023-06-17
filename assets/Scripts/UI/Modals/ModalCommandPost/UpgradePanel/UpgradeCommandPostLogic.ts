import { _decorator, Component } from 'cc';
import { CommandPostStorageController } from '../../../../Controllers/CommandPostStorageController';
import { UpgradeCommandPostInerface } from './UpgradeCommandPostInerface';
import { GameStorageController } from '../../../../Controllers/GameStorageController';
import { ConfigStorageController } from '../../../../Controllers/ConfigStorageController';
import { InventoryStorageController } from '../../../../Controllers/InventoryStorageController';
import { TypesItems } from '../../../../Static/TypesItems';
import { HomeMapStorageController } from '../../../../Controllers/HomeMapStorageController';
import { TypesObjects } from '../../../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('UpgradeCommandPostLogic')
export class UpgradeCommandPostLogic extends Component {

    upgrateObject() {
        CommandPostStorageController.addLevelCommandPost();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_COMMAND_POST, ConfigStorageController.getImprivementResourceNumberMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost()));
        GameStorageController.addExperience(ConfigStorageController.getExpMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost()));
        HomeMapStorageController.upgradeLevelObject(HomeMapStorageController.getObjectParametersByType(TypesObjects.COMMAND_POST).index);
        UpgradeCommandPostInerface.instance.updateInterface();
    }
}
