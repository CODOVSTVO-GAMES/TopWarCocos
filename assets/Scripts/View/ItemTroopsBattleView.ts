import { _decorator, Component, Label, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ItemTroopsBattleView')
export class ItemTroopsBattleView extends Component {

    @property({ type: Label })
    private levelTroop: Label

    @property({ type: Label })
    private hpTroop: Label

    @property({ type: Label })
    private quantityTroop: Label

    @property({ type: Sprite })
    private spriteTroop: Sprite

    protected onLoad(): void {

    }
}