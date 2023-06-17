import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('ShopObjectEvents')
export class ShopObjectEvents extends Component {

    public eventBuyBarrackAir() {
        // купить базу ВВС

    }

    public eventBuyBarrackMarine() {
        // купить верфь

    }

    public eventBuyBarrackOverland() {
        // купить казарму

    }

    public eventBuyGoldMine() {
        // купить золотую шахту

    }
}
