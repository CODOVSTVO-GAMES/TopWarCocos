import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { SpriteStorage } from '../../../../Storage/SpriteStorage';
import { TypesObjects } from '../../../../Static/TypesObjects';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
import { ControllerGameStorage } from '../../../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../../../Storage/Controllers/ControllerConfigStorage';
import { ConvertLargeNumber } from '../../../../Other/ConvertLargeNumber';
import { ControllerInventoryStorage } from '../../../../Storage/Controllers/ControllerInventoryStorage';
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
        this.mainTitle.string = "Простой командный пункт";
        this.actualLevelObject.string = "Ур. " + ControllerCommandPostStorage.getLevelCommandPost().toString();
        this.nextLevelObject.string = "Ур. " + (ControllerCommandPostStorage.getLevelCommandPost() + 1).toString();
        this.level.string = "Ур. " + ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost() + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost() + 1).toString();
        this.actualAttactBonus.string = ControllerConfigStorage.getAttackBonusMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()).toString();
        this.receivedAttactBonus.string = "+" + (ControllerConfigStorage.getAttackBonusMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost() + 1) - ControllerConfigStorage.getAttackBonusMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost())).toString();
        this.actualQuantityTroops.string = "0";
        this.nextQuantityTroops.string = "0";
        this.actualMarchingCampaign.string = "0";
        this.nextMarchingCampaign.string = "0";

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost() + 1));
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_COMMAND_POST) + "/" + (ControllerConfigStorage.getImprivementResourceNumberMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost() + 1));

        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.COMMAND_POST, ControllerCommandPostStorage.getLevelCommandPost());
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.COMMAND_POST, (ControllerCommandPostStorage.getLevelCommandPost() + 1));
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