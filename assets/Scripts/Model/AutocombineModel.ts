import { _decorator, Component } from 'cc';
import { Autocombine } from '../Structures/Autocombine';
const { ccclass } = _decorator;

@ccclass('AutocombineModel')
export class AutocombineModel extends Component {

    public static instance: AutocombineModel

    public allProfit: number = 0
    public quantityWorkGoldMine: number = 0
    public quantityProfit: number = 0
    public quantityCollect: number = 0
    public indexes: Array<Autocombine> = new Array<Autocombine>()
    public isActiveAutocombine: boolean = false

    protected onLoad(): void {
        AutocombineModel.instance = this
    }
}