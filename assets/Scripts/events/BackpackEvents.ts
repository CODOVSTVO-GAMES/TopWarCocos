import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('BackpackEvents')
export class BackpackEvents extends Component {

    public eventSelectItem() {
        // выбор обьекта

    }

    public eventDeleteItem() {
        // удаление обьекта
    }

    public eventAddQuantitySelectObject() {
        // увеличить количество применения выбранного обьекта

    }

    public eventReduceQuantitySelectObject() {
        // уменьшить количество применения выбранного обьекта

    }

    public eventApplySelectObject() {
        // применить выбранный обьект
        
    }
}
