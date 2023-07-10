import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { Unit } from '../Structures/Unit';
import { BattlePresenter } from '../Presenter/BattlePresenter';
const { ccclass, property } = _decorator;

@ccclass('TroopBattleView')
export class TroopBattleView extends Component {

    @property({ type: Node })
    public nodeObject: Node

    @property({ type: Node })
    public bullet: Node

    @property({ type: Sprite })
    public spriteTroop: Sprite

    @property({ type: Sprite })
    public fillHpTroop: Sprite

    @property({ type: Label })
    public hpText: Label

    @property({ type: Animation })
    public anim: Animation

    public teamTroop: string
    public indexTroop: number
    public unitInfo: Unit

    protected onLoad(): void {

    }

    public eventClickOnTroop() {
        BattlePresenter.processingClickOnTroop(this.teamTroop, this.indexTroop)
    }

    public renderInterface() {

    }
}