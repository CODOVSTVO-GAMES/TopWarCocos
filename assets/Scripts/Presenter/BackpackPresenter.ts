import { BackpackModel } from "../Model/BackpackModel"
import { TypesItems } from "../Static/TypesItems"
import { TypesModals } from "../Static/TypesModals"
import { QuantityItem } from "../Structures/QuantityItem"
import { SecondaryInterface } from "../UI/SecondaryInterface"
import { BackpackView } from "../View/BackpackView"
import { CommandPostUpgradeMainView } from "../View/CommandPostUpgradeMainView"
import { CommandPostUpgradeOtherView } from "../View/CommandPostUpgradeOtherView"
import { TasksGamePresenter } from "./TasksGamePresenter"

export class BackpackPresenter {

    public static processingDeleteItem() {
        if (this.getQuantityItemByType(BackpackModel.instance.typeSelectItem) == BackpackModel.instance.usageQuantitySelectItem) {
            this.reduceItemBackpack(BackpackModel.instance.typeSelectItem, BackpackModel.instance.usageQuantitySelectItem)
            if (BackpackModel.instance.backpack.length > 0) {
                BackpackModel.instance.typeSelectItem = this.getTypeByIndex(0)
                BackpackModel.instance.quantitySelectItem = this.getQuantityItemByType(BackpackModel.instance.typeSelectItem)
                BackpackModel.instance.usageQuantitySelectItem = this.getQuantityItemByType(BackpackModel.instance.typeSelectItem)
                BackpackView.instance.renderUsageQuantitySelectItem()
            }
            else {
                BackpackModel.instance.typeSelectItem = ""
                BackpackModel.instance.quantitySelectItem = 0
                BackpackModel.instance.usageQuantitySelectItem = 0
                BackpackView.instance.renderItemsBackpack()
                BackpackView.instance.renderTitleSelectItem()
                BackpackView.instance.renderUsageQuantitySelectItem()
            }
        }
        else {
            this.reduceItemBackpack(BackpackModel.instance.typeSelectItem, BackpackModel.instance.usageQuantitySelectItem)
            BackpackModel.instance.quantitySelectItem = this.getQuantityItemByType(BackpackModel.instance.typeSelectItem)
            BackpackModel.instance.usageQuantitySelectItem = this.getQuantityItemByType(BackpackModel.instance.typeSelectItem)
            BackpackView.instance.renderUsageQuantitySelectItem()
        }
    }

    public static processingAddQuantitySelectItem() {
        if (BackpackModel.instance.quantitySelectItem > BackpackModel.instance.usageQuantitySelectItem) {
            BackpackModel.instance.usageQuantitySelectItem += 1
        }
        BackpackView.instance.renderTitleSelectItem()
    }

    public static processingReduceQuantitySelectItem() {
        if (BackpackModel.instance.usageQuantitySelectItem > 0) {
            BackpackModel.instance.usageQuantitySelectItem -= 1
        }
        BackpackView.instance.renderTitleSelectItem()
    }

    public static processingSelectItem(typeItem: string) {
        let typeActiveFirstLayoutModal = SecondaryInterface.instance.getTypeActiveFirstLayoutModal()

        if (typeActiveFirstLayoutModal == TypesModals.BACKPACK) {
            BackpackModel.instance.typeSelectItem = typeItem
            BackpackModel.instance.quantitySelectItem = this.getQuantityItemByType(typeItem)
            BackpackModel.instance.usageQuantitySelectItem = this.getQuantityItemByType(typeItem)
            BackpackView.instance.renderTitleSelectItem()
        }
    }

    public static processingApplyItem() {
        let typeSelectItem = BackpackModel.instance.typeSelectItem

        if (typeSelectItem == TypesItems.PLAN_COMMAND_POST) {
            let typeModal = TypesModals.UPGRATE_COMMAND_POST

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeMainView.instance.renderInterface()
        }
        else if (typeSelectItem == TypesItems.PLAN_MERGE_TROOP_AIR) {
            let typeModal = TypesModals.UPGRATE_MERGE_TROOP_AIR

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceMergeTroopAir()
        }
        else if (typeSelectItem == TypesItems.PLAN_MERGE_TROOP_MARINE) {
            let typeModal = TypesModals.UPGRATE_MERGE_TROOP_MARINE

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceMergeTroopMarine()
        }
        else if (typeSelectItem == TypesItems.PLAN_MERGE_TROOP_OVERLAND) {
            let typeModal = TypesModals.UPGRATE_MERGE_TROOP_OVERLAND

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceMergeTroopOverland()
        }
        else if (typeSelectItem == TypesItems.PLAN_MERGE_GOLD_MINE) {
            let typeModal = TypesModals.UPGRATE_MERGE_GOLD_MINE

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceMergeGoldMine()
        }
        else if (typeSelectItem == TypesItems.PLAN_MERGE_BARRACK_AIR) {
            let typeModal = TypesModals.UPGRATE_MERGE_BARRACK_AIR

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceMergeBarracksAir()
        }
        else if (typeSelectItem == TypesItems.PLAN_MERGE_BARRACK_MARINE) {
            let typeModal = TypesModals.UPGRATE_MERGE_BARRACK_MARINE

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceMergeBarracksMarine()
        }
        else if (typeSelectItem == TypesItems.PLAN_MERGE_BARRACK_OVERLAND) {
            let typeModal = TypesModals.UPGRATE_MERGE_BARRACK_OVERLAND

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceMergeBarracksOverland()
        }
        else if (typeSelectItem == TypesItems.PLAN_BUILD_GOLD_MINE) {
            let typeModal = TypesModals.UPGRATE_BUILD_GOLD_MINE

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceBuildGoldMine()
        }
        else if (typeSelectItem == TypesItems.PLAN_BUILD_BARRACK_AIR) {
            let typeModal = TypesModals.UPGRATE_BUILD_BARRACK_AIR

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceBuildBarracksAir()
        }
        else if (typeSelectItem == TypesItems.PLAN_BUILD_BARRACK_MARINE) {
            let typeModal = TypesModals.UPGRATE_BUILD_BARRACK_MARINE

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceBuildBarracksMarine()
        }
        else if (typeSelectItem == TypesItems.PLAN_BUILD_BARRACK_OVERLAND) {
            let typeModal = TypesModals.UPGRATE_BUILD_BARRACK_OVERLAND

            SecondaryInterface.instance.openSecondModal(typeModal)
            CommandPostUpgradeOtherView.instance.renderInterfaceBuildBarracksOverland()
        }
        else {
            SecondaryInterface.instance.closeFirstLayoutModal()
        }
    }

    public static addItemBackpack(typeItem: string, quantityItem: number) {
        if (quantityItem == 0) return
        for (let i = 0; i < BackpackModel.instance.backpack.length; i++) {
            if (BackpackModel.instance.backpack[i].type == typeItem) {
                BackpackModel.instance.backpack[i].quantity += quantityItem
                TasksGamePresenter.preCheckTask(typeItem)
                return
            }
        }
        BackpackModel.instance.backpack.push(new QuantityItem(typeItem, quantityItem))
        TasksGamePresenter.preCheckTask(typeItem)
    }

    public static reduceItemBackpack(typeItem: string, quantityItem: number) {
        if (quantityItem == 0) return
        for (let i = 0; i < BackpackModel.instance.backpack.length; i++) {
            if (BackpackModel.instance.backpack[i].type == typeItem) {
                BackpackModel.instance.backpack[i].quantity -= quantityItem
                if (BackpackModel.instance.backpack[i].quantity == 0) {
                    BackpackModel.instance.backpack.splice(i, 1)
                }
                return
            }
        }
    }

    public static getTypeByIndex(index: number): string {
        return BackpackModel.instance.backpack[index].type
    }

    public static getQuantityItemByType(typeItem: string): number {
        for (let i = 0; i < BackpackModel.instance.backpack.length; i++) {
            if (BackpackModel.instance.backpack[i].type == typeItem) {
                return BackpackModel.instance.backpack[i].quantity
            }
        }
        return 0
    }
}