import { _decorator, Component, Label } from 'cc';
import { AutocombineModel } from '../Model/AutocombineModel';
import { ConvertLargeNumber } from '../Other/ConvertLargeNumber';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { TypesViews } from '../Static/TypesViews';
const { ccclass, property } = _decorator;

@ccclass('AutocombineView')
export class AutocombineView extends Component {

    public static instance: AutocombineView

    @property({ type: Label })
    public quantityWorkGoldMine: Label

    @property({ type: Label })
    public quantityProfit: Label

    @property({ type: Label })
    public quantityCollect: Label

    protected onLoad(): void {
        AutocombineView.instance = this
    }

    public eventGoOverGoldMine() {
        SecondaryInterface.instance.closeFirstLayoutModal()
        SecondaryInterface.instance.openFirstModal(TypesViews.SHOP_OBJECT)
    }

    public eventCollectCoins() {
        SecondaryInterface.instance.closeFirstLayoutModal()
    }

    public renderInterface() {
        let quantityWorkGoldMine = "Рабочий золотой рудник " + AutocombineModel.instance.quantityWorkGoldMine
        let quantityProfit = "Можете сразу получить 6 часов дохода золота: " + ConvertLargeNumber.convert(AutocombineModel.instance.allProfit * 360)
        let quantityCollect = "Сегодня собрано: " + AutocombineModel.instance.quantityCollect + "/6"

        this.quantityWorkGoldMine.string = quantityWorkGoldMine
        this.quantityProfit.string = quantityProfit
        this.quantityCollect.string = quantityCollect
    }
}