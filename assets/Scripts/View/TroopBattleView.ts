import { _decorator, Component, Node, Sprite, Label, SpriteFrame } from 'cc';
import { BattlePresenter } from '../Presenter/BattlePresenter';
import { TroopBattle } from '../Structures/TroopBattle';
import { SpriteModel } from '../Model/SpriteModel';
import { TypesTeam } from '../Static/TypesTeam';
const { ccclass, property } = _decorator;

@ccclass('TroopBattleView')
export class TroopBattleView extends Component {

    @property({ type: Node })
    public nodeObject: Node

    @property({ type: Node })
    public bullet: Node

    @property({ type: Label })
    public quantityTroop: Label

    @property({ type: Label })
    public activeHp: Label

    @property({ type: Sprite })
    public spriteTroop: Sprite

    @property({ type: Sprite })
    public fillHpTroop: Sprite

    @property({ type: Animation })
    public anim: Animation

    private troopBattle: TroopBattle

    public eventClickOnTroop() {
        BattlePresenter.processingClickOnTroop(this.troopBattle, this.nodeObject)
    }

    public renderInterface(troopBattle: TroopBattle) {
        this.troopBattle = troopBattle

        let spriteTroop: SpriteFrame
        if (this.troopBattle.teamTroop == TypesTeam.TEAM_OWN) {
            spriteTroop = SpriteModel.instance.getTroopSprite(this.troopBattle.typeTroop, "back", this.troopBattle.levelTroop)
        }
        else if (this.troopBattle.teamTroop == TypesTeam.TEAM_ENEMY) {
            spriteTroop = SpriteModel.instance.getTroopSprite(this.troopBattle.typeTroop, "face", this.troopBattle.levelTroop)
        }

        this.spriteTroop.spriteFrame = spriteTroop
    }
}