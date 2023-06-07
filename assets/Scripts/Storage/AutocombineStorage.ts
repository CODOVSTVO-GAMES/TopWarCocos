import { _decorator, Component, CCInteger } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AutocombineStorage')
export class AutocombineStorage extends Component {

    public static instance: AutocombineStorage;

    @property({ type: CCInteger })
    public allProfit: number;

    @property({ type: CCInteger })
    public quantityWorkGoldMine: number;

    @property({ type: CCInteger })
    public quantityProfit: number;

    @property({ type: CCInteger })
    public quantityCollect: number;

    onLoad() {
        AutocombineStorage.instance = this;

        this.allProfit = 0;
        this.quantityCollect = 0;
    }
}

