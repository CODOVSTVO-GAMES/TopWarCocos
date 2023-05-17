import { _decorator, Component, Label, Node } from 'cc';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
import { ConvertLargeNumber } from '../../../Other/ConvertLargeNumber';
import { ControllerCommandPostStorage } from '../../../Storage/Controllers/ControllerCommandPostStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalCommandPostInterface')
export class ModalCommandPostInterface extends Component {

    public static instance: ModalCommandPostInterface;

    @property({ type: Label })
    public level: Label;

    @property({ type: Label })
    public coins: Label;

    @property({ type: Label })
    public gems: Label;

    @property({ type: Label })
    public levelCommandPost: Label;
    @property({ type: Node })
    public warningCommandPost: Node;

    @property({ type: Label })
    public levelRepairShop: Label;
    @property({ type: Node })
    public warningRepairShop: Node;

    @property({ type: Label })
    public levelMergeGoldMine: Label;
    @property({ type: Node })
    public warningMergeGoldMine: Node;

    @property({ type: Label })
    public levelBuildGoldMine: Label;
    @property({ type: Node })
    public warningBuildGoldMine: Node;

    @property({ type: Label })
    public levelMergeTroopAir: Label;
    @property({ type: Node })
    public warningMergeTroopAir: Node;

    @property({ type: Label })
    public levelMergeBarracksAir: Label;
    @property({ type: Node })
    public warningMergeBarracksAir: Node;

    @property({ type: Label })
    public levelBuildBarracksAir: Label;
    @property({ type: Node })
    public warningBuildBarracksAir: Node;

    @property({ type: Label })
    public levelMergeTroopMarine: Label;
    @property({ type: Node })
    public warningMergeTroopMarine: Node;

    @property({ type: Label })
    public levelMergeBarracksMarine: Label;
    @property({ type: Node })
    public warningMergeBarracksMarine: Node;

    @property({ type: Label })
    public levelBuildBarracksMarine: Label;
    @property({ type: Node })
    public warningBuildBarracksMarine: Node;

    @property({ type: Label })
    public levelMergeTroopOverland: Label;
    @property({ type: Node })
    public warningMergeTroopOverland: Node;

    @property({ type: Label })
    public levelMergeBarracksOverland: Label;
    @property({ type: Node })
    public warningMergeBarracksOverland: Node;

    @property({ type: Label })
    public levelBuildBarracksOverland: Label;
    @property({ type: Node })
    public warningBuildBarracksOverland: Node;

    onLoad() {
        ModalCommandPostInterface.instance = this;
    }

    updateInterface() {
        this.level.string = "Ур. " + ControllerGameStorage.getLevel().toString();
        this.coins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins());
        this.gems.string = ConvertLargeNumber.convert(ControllerGameStorage.getGems());

        this.levelCommandPost.string = "Ур. " + ControllerCommandPostStorage.getLevelCommandPost().toString();
        this.levelRepairShop.string = "Ур. " + ControllerCommandPostStorage.getLevelRepairShop().toString();

        this.levelMergeGoldMine.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeGoldMine().toString();
        this.levelBuildGoldMine.string = "Ур. " + ControllerCommandPostStorage.getLevelBuildGoldMine().toString();

        this.levelMergeTroopAir.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeTroopAir().toString();
        this.levelMergeBarracksAir.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeBarracksAir().toString();
        this.levelBuildBarracksAir.string = ControllerCommandPostStorage.getLevelBuildBarracksAir().toString();

        this.levelMergeTroopMarine.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeTroopMarine().toString();
        this.levelMergeBarracksMarine.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeBarracksMarine().toString();
        this.levelBuildBarracksMarine.string = "Ур. " + ControllerCommandPostStorage.getLevelBuildBarracksMarine().toString();

        this.levelMergeTroopOverland.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeTroopOverland().toString();
        this.levelMergeBarracksOverland.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeBarracksOverland().toString();
        this.levelBuildBarracksOverland.string = "Ур. " + ControllerCommandPostStorage.getLevelBuildBarracksOverland().toString();
    }
}

