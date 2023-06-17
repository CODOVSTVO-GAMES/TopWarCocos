import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('MainInterfaceEvents')
export class MainInterfaceEvents extends Component {

    public eventOpenProfile() {
        // открыть профиль

    }

    public eventOpenShopCoins() {
        // открыть магазин монет

    }

    public eventOpenShopGems() {
        // открыть магазин гемов

    }

    public eventOpenLevelAndExperience() {
        // открыть статистику уровня и опыта

    }

    public eventOpenPower() {
        // открыть статистику боевой мощи

    }
}
