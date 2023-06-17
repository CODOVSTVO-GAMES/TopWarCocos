import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { SpriteStorage } from '../../../../Storage/SpriteStorage';
import { TypesObjects } from '../../../../Static/TypesObjects';
import { CommandPostStorageController } from '../../../../Controllers/CommandPostStorageController';
import { GameStorageController } from '../../../../Controllers/StorageControllers/GameStorageController';
import { ConfigStorageController } from '../../../../Controllers/ConfigStorageController';
import { ConvertLargeNumber } from '../../../../Other/ConvertLargeNumber';
import { InventoryStorageController } from '../../../../Controllers/InventoryStorageController';
import { TypesItems } from '../../../../Static/TypesItems';
const { ccclass, property } = _decorator;

@ccclass('UpgradeCommandPostInerface')
export class UpgradeCommandPostInerface extends Component {

    public static instance: UpgradeCommandPostInerface;

    @property({ type: Label })
    public mainTitle: Label;

    @property({ type: Label })
    public actualLevelObject: Label;

    @property({ type: Label })
    public nextLevelObject: Label;

    @property({ type: Label })
    public level: Label;

    @property({ type: Label })
    public receivedExperience: Label;

    @property({ type: Label })
    public actualPower: Label;

    @property({ type: Label })
    public receivedPower: Label;

    @property({ type: Label })
    public actualAttactBonus: Label;

    @property({ type: Label })
    public receivedAttactBonus: Label;

    @property({ type: Label })
    public actualQuantityTroops: Label;

    @property({ type: Label })
    public nextQuantityTroops: Label;

    @property({ type: Label })
    public actualMarchingCampaign: Label;

    @property({ type: Label })
    public nextMarchingCampaign: Label;

    @property({ type: Label })
    public requirementCoins: Label;

    @property({ type: Label })
    public requirementItems: Label;

    @property({ type: Sprite })
    public actualSpriteObject: Sprite;

    @property({ type: Sprite })
    public nextSpriteObject: Sprite;

    @property({ type: Node })
    public btnUpgrade: Node;

    @property({ type: Node })
    public btnGetItems: Node;

    onLoad() {
        UpgradeCommandPostInerface.instance = this;
    }

    updateInterface() {
        let mainTitle = "Простой командный пункт";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelCommandPost();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelCommandPost() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost() + 1).toString();
        let actualAttactBonus = ConfigStorageController.getAttackBonusMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost()).toString();
        let receivedAttactBonus = "+" + (ConfigStorageController.getAttackBonusMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost() + 1) - ConfigStorageController.getAttackBonusMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost())).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_COMMAND_POST) + "/" + (ConfigStorageController.getImprivementResourceNumberMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.COMMAND_POST, CommandPostStorageController.getLevelCommandPost());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.COMMAND_POST, (CommandPostStorageController.getLevelCommandPost() + 1));


        this.mainTitle.string = mainTitle;
        this.actualLevelObject.string = actualLevel;
        this.nextLevelObject.string = nextLevelObject;
        this.level.string = level;
        this.receivedExperience.string = receivedExperience;
        this.actualPower.string = actualPower;
        this.receivedPower.string = receivedPower;
        this.actualAttactBonus.string = actualAttactBonus
        this.receivedAttactBonus.string = receivedAttactBonus
        this.actualQuantityTroops.string = "0";
        this.nextQuantityTroops.string = "0";
        this.actualMarchingCampaign.string = "0";
        this.nextMarchingCampaign.string = "0";

        this.requirementCoins.string = requirementCoins
        this.requirementItems.string = requirementItems;

        this.actualSpriteObject.spriteFrame = actualSpriteObject;
        this.nextSpriteObject.spriteFrame = nextSpriteObject;
    }

    openUpgrade() {
        this.btnUpgrade.active = true;
        this.btnGetItems.active = false;
    }

    openGetItems() {
        this.btnUpgrade.active = false;
        this.btnGetItems.active = true;
    }
}