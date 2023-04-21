import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ChoosingArmy')
export class ChoosingArmy extends Component {

    public static instance: ChoosingArmy;

    onLoad() {
        ChoosingArmy.instance = this;
    }
}