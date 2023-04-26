import { _decorator, Component, Node } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
import { TypesObjects } from '../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('TroopsStorage')
export class TroopsStorage extends Component {

    public static instance: TroopsStorage;

    // TypesObjects.TROOP_AIR,
    types: string[] = [TypesObjects.TROOP_MARINE, TypesObjects.TROOP_OVERLAND];
    levels: number[] = [1, 2, 3];

    @property({ type: ObjectParameters })
    public arrayObjectParameters: ObjectParameters[] = [];

    onLoad() {
        TroopsStorage.instance = this;
        this.arrayObjectParameters = new Array(20);
    }
    start() {
        for (let i = 0; i < 10; i++) {
            let freeIndex;
            for (let i = 0; i < this.arrayObjectParameters.length; i++) {
                if (this.arrayObjectParameters[i] == null) {
                    freeIndex = i;
                    break;
                }
            }
            this.arrayObjectParameters[freeIndex] = new ObjectParameters();
            this.arrayObjectParameters[freeIndex].type = this.types[Math.floor(Math.random() * this.types.length)];
            this.arrayObjectParameters[freeIndex].level = this.levels[Math.floor(Math.random() * this.levels.length)];
        }
    }
}