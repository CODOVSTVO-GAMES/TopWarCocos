import { _decorator, Component } from 'cc';
import { Autocombine } from '../Structures/Autocombine';
const { ccclass } = _decorator;

@ccclass('AutocombineModel')
export class AutocombineModel extends Component {

    public static instance: AutocombineModel

    public allProfit: number
    public quantityWorkGoldMine: number
    public quantityProfit: number
    public quantityCollect: number
    public indexes: Autocombine[]
    public isActiveAutocombine: boolean

    protected onLoad(): void {
        AutocombineModel.instance = this
        this.assignStartingValues()
        // AutocombinePresenter.TEST()
    }

    private assignStartingValues() {
        this.allProfit = 0
        this.quantityWorkGoldMine = 0
        this.quantityProfit = 0
        this.quantityCollect = 0
        this.indexes = []
        this.isActiveAutocombine = false
    }
}