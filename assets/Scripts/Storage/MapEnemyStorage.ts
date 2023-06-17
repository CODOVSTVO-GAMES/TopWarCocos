import { _decorator, Component, Node } from 'cc';
import { Unit } from '../Structures/Unit';
import { MapEnemyBattle } from '../Structures/MapEnemyUnits';
const { ccclass, property } = _decorator;

@ccclass('MapEnemyStorage')
export class MapEnemyStorage extends Component {

    public static instance: MapEnemyStorage

    public mapEnemyArr: MapEnemyBattle[] = []

    public start() {
        MapEnemyStorage.instance = this
    }
}