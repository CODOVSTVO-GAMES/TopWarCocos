import { _decorator, Component, Node, Label, instantiate } from 'cc';
import { BattlePresenter } from '../Presenter/BattlePresenter';
import { BattleModel } from '../Model/BattleModel';
import { PrefabsModel } from '../Model/PrefabsModel';
import { ItemMyAvailableTroopView } from './ItemMyAvailableTroopView';
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
        this.renderMyAvailableTroops()
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

    public renderMyAvailableTroops() {
        for (let i = 0; i < BattleModel.instance.myAvailableTroops.length; i++) {
            let object = instantiate(PrefabsModel.instance.getItemMyAvailableTroop())
            let { typeTroop, levelTroop, quantityTroop, activeHp } = BattleModel.instance.myAvailableTroops[i]
            object.parent = this.parentContent
            object.getComponent(ItemMyAvailableTroopView).renderInterface(typeTroop, levelTroop, quantityTroop, activeHp)
            BattleModel.instance.itemsMyAvailableTroops.push(object)
        }
    }

    public renderCharacters() {

    }
}