import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { SpriteStorage } from '../../../../Storage/SpriteStorage';
import { TypesObjects } from '../../../../Static/TypesObjects';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
import { ControllerGameStorage } from '../../../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../../../Storage/Controllers/ControllerConfigStorage';
import { ConvertLargeNumber } from '../../../../Other/ConvertLargeNumber';
const { ccclass, property } = _decorator;

@ccclass('UpgradeCommandPostInerface')
export class UpgradeCommandPostInerface extends Component {

    public static instance: UpgradeCommandPostInerface;

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

    @property({ type: Sprite })
    public actualSpriteObject: Sprite;

    @property({ type: Sprite })
    public nextSpriteObject: Sprite;

    onLoad() {
        UpgradeCommandPostInerface.instance = this;
    }

    updateInterface() {
        this.actualLevelObject.string = ControllerCommandPostStorage.getLevelCommandPost().toString();
        this.nextLevelObject.string = (ControllerCommandPostStorage.getLevelCommandPost() + 1).toString();
        this.level.string = "Ур." + ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()).toString();
        this.actualAttactBonus.string = ControllerConfigStorage.getAttackBonusMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()).toString();
        this.receivedAttactBonus.string = ControllerConfigStorage.getAttackBonusMainBuildingByLevel(ControllerCommandPostStorage.getLevelCommandPost()).toString();
        this.actualQuantityTroops.string = "0";
        this.nextQuantityTroops.string = "0";
        this.actualMarchingCampaign.string = "0";
        this.nextMarchingCampaign.string = "0";

        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.COMMAND_POST, 1);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.COMMAND_POST, 1);
    }
}



