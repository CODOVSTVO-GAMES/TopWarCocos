import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { SpriteStorage } from '../../../../Storage/SpriteStorage';
import { TypesObjects } from '../../../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('UpgradeCommandPostInerface')
export class UpgradeCommandPostInerface extends Component {

    public static instance: UpgradeCommandPostInerface;

    @property({ type: Label })
    public actualLevelObject: Label;

    @property({ type: Label })
    public nextLevelObject: Label;

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
        this.actualLevelObject.string = "0";
        this.nextLevelObject.string = "0";
        this.receivedExperience.string = "0";
        this.actualPower.string = "0";
        this.receivedPower.string = "0";
        this.actualAttactBonus.string = "0";
        this.receivedAttactBonus.string = "0";
        this.actualQuantityTroops.string = "0";
        this.nextQuantityTroops.string = "0";
        this.actualMarchingCampaign.string = "0";
        this.nextMarchingCampaign.string = "0";

        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.COMMAND_POST, 1);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.COMMAND_POST, 2);
    }
}
