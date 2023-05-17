import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { SpriteStorage } from '../../../../Storage/SpriteStorage';
import { TypesObjects } from '../../../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('UpgradeOtherInterface')
export class UpgradeOtherInterface extends Component {

    public static instance: UpgradeOtherInterface;

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

    @property({ type: Sprite })
    public actualSpriteObject: Sprite;

    @property({ type: Sprite })
    public nextSpriteObject: Sprite;

    onLoad() {
        UpgradeOtherInterface.instance = this;
    }

    updateInterface() {
        this.actualLevelObject.string = "0";
        this.nextLevelObject.string = "0";
        this.receivedExperience.string = "0";
        this.actualPower.string = "0";
        this.receivedPower.string = "0";

        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.COMMAND_POST, 1);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.COMMAND_POST, 2);
    }
}