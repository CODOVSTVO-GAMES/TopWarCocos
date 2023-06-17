import { _decorator, Component, CCInteger, CCBoolean } from 'cc';
import { AutocombineStorageController } from '../Controllers/StorageControllers/AutocombineStorageController';
import { Aut } from '../Structures/Aut';
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

    @property({ type: Aut })
    public indexes: Array<Aut> = new Array<Aut>();

    @property({ type: CCBoolean })
    public isActiveAutocombine: boolean;

    onLoad() {
        AutocombineStorage.instance = this;
        AutocombineStorageController.TEST();
    }
}

