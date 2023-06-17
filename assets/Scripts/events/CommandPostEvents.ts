import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('CommandPostEvents')
export class CommandPostEvents extends Component {

    public eventOpenUpgradeCommandPost() {
        // открыть окно улучшения командного центра

    }

    public eventOpenUpgradeRepairShop() {
        // открыть окно улучшения ремонтного цеха

    }

    public eventOpenUpgadeMergeGoldMine() {
        // открыть окно улучшения мерджа золотой шахты

    }

    public eventOpenUpgadeBuildGoldMine() {
        // открыть окно улучшения постройки золотой шахты

    }

    public eventOpenUpgadeMergeTroopAir() {
        // открыть окно улучшения мерджа воина ВВС

    }

    public eventOpenUpgadeMergeTroopMarine() {
        // открыть окно улучшения мерджа воина ВМФ

    }

    public eventOpenUpgadeMergeTroopOverland() {
        // открыть окно улучшения мерджа воина СВ

    }

    public eventOpenUpgadeMergeBarrackAir() {
        // открыть окно улучшения мерджа базы ВВС

    }

    public eventOpenUpgadeMergeBarrackMarine() {
        // открыть окно улучшения мерджа верфь

    }

    public eventOpenUpgadeMergeBarrackOverland() {
        // открыть окно улучшения мерджа казармы

    }

    public eventOpenUpgadeBuildBarrackAir() {
        // открыть окно улучшения постройки базы ВВС

    }

    public eventOpenUpgadeBuildBarrackMarine() {
        // открыть окно улучшения постройки верфь

    }

    public eventOpenUpgadeBuildBarrackOverland() {
        // открыть окно улучшения постройки казармы

    }

    //------------------------------------------------------------

    public eventUpgrade() {

    }

    public eventOpenCollectItems() {

    }
}
