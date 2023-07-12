import { _decorator, Component, Node, Label, instantiate } from 'cc';
import { BattlePresenter } from '../Presenter/BattlePresenter';
import { BattleModel } from '../Model/BattleModel';
import { PrefabsModel } from '../Model/PrefabsModel';
import { ItemMyAvailableTroopView } from './ItemMyAvailableTroopView';
import { TroopBattleView } from './TroopBattleView';
const { ccclass, property } = _decorator;

@ccclass('BattleView')
export class BattleView extends Component {

    public static instance: BattleView

    @property({ type: Node })
    private parentContent: Node

    @property({ type: Node })
    private exitBackButton: Node

    @property({ type: Node })
    private myCoords: Node[] = []

    @property({ type: Node })
    private enemyCoords: Node[] = []

    @property({ type: Label })
    private quantityTroopTop: Label

    @property({ type: Label })
    private quantityTroopBottom: Label

    @property({ type: Label })
    private quantityTroopsOnCoords: Label[] = []

    protected onLoad(): void {
        BattleView.instance = this

        this.renderInterface()
        this.renderItemMyAvailableTroops()
        this.renderMyCoords()
        this.renderEnemyTroopsBattle()
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

    public renderInterface() {
        if (BattleModel.instance.isBattle) {

        }
    }

    public renderItemMyAvailableTroops() {
        for (let i = 0; i < BattleModel.instance.itemsMyAvailableTroops.length; i++) {
            BattleModel.instance.itemsMyAvailableTroops[i].destroy()
        }
        BattleModel.instance.itemsMyAvailableTroops = []
        for (let i = 0; i < BattleModel.instance.myAvailableTroops.length; i++) {
            let object = instantiate(PrefabsModel.instance.getItemMyAvailableTroop())
            object.parent = this.parentContent
            object.getComponent(ItemMyAvailableTroopView).renderInterface(BattleModel.instance.myAvailableTroops[i])
            BattleModel.instance.itemsMyAvailableTroops.push(object)
        }
    }

    public renderMyTroopsBattle() {
        for (let i = 0; i < BattleModel.instance.myTroopsBattleOnMap.length; i++) {
            BattleModel.instance.myTroopsBattleOnMap[i].destroy()
        }
        BattleModel.instance.myTroopsBattleOnMap = []
        for (let i = 0; i < BattleModel.instance.myTroopsBattle.length; i++) {
            if (BattleModel.instance.myTroopsBattle[i] == null) continue
            let object = instantiate(PrefabsModel.instance.getTroopBattle())
            object.parent = this.myCoords[i]
            object.getComponent(TroopBattleView).renderInterface(BattleModel.instance.myTroopsBattle[i])
            BattleModel.instance.myTroopsBattleOnMap.push(object)
        }
    }

    public renderEnemyTroopsBattle() {
        for (let i = 0; i < BattleModel.instance.enemyTroopsBattleOnMap.length; i++) {
            BattleModel.instance.enemyTroopsBattleOnMap[i].destroy()
        }
        BattleModel.instance.enemyTroopsBattleOnMap = []
        for (let i = 0; i < BattleModel.instance.enemyTroopsBattle.length; i++) {
            let object = instantiate(PrefabsModel.instance.getTroopBattle())
            object.parent = this.enemyCoords[i]
            object.getComponent(TroopBattleView).renderInterface(BattleModel.instance.enemyTroopsBattle[i])
            BattleModel.instance.enemyTroopsBattleOnMap.push(object)
        }
    }

    public renderMyCoords() {
        let totalQuantityFreeCoords = BattleModel.instance.totalQuantityFreeCoords

        for (let i = 0; i < this.myCoords.length; i++) {
            this.myCoords[i].active = false
        }
        for (let i = 0; i < totalQuantityFreeCoords; i++) {
            let activeQuantityTroopsOnCoords = BattleModel.instance.activeQuantityTroopsOnCoords[i]
            let maximumQuantityTroopsOnCoords = BattleModel.instance.maximumQuantityTroopsOnCoords[i]
            let quantityTroopsOnCoords = activeQuantityTroopsOnCoords + "/" + maximumQuantityTroopsOnCoords

            this.myCoords[i].active = true
            this.quantityTroopsOnCoords[i].string = quantityTroopsOnCoords
        }
        if (totalQuantityFreeCoords < 9) {
            this.myCoords[totalQuantityFreeCoords].active = true
            this.quantityTroopsOnCoords[totalQuantityFreeCoords].string = "-"
        }
    }
}