import { _decorator, Component, Label, Node } from 'cc';
import { BattlePresenter } from '../Presenter/BattlePresenter';
const { ccclass, property } = _decorator;

@ccclass('BattleView')
export class BattleView extends Component {

    @property({ type: Node })
    private parentContent: Node

    @property({ type: Label })
    private quantityTroopTop: Label

    @property({ type: Label })
    private quantityTroopBottom: Label

    protected onLoad(): void {

    }

    public eventRedirectToHomeMap() {
        BattlePresenter.processingRedirectToHomeMap()
    }

    public eventStartBattle() {
        BattlePresenter.processingStartBattle()
    }

    public eventAutomaticPlacement() {
        BattlePresenter.processingAutomaticPlacement()
    }

    public renderItemTroops() {

    }

    public renderCharacters() {

    }
}