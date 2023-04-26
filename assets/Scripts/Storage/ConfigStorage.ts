import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ConfigStorage')
export class ConfigStorage extends Component {

    //

    public static instance: ConfigStorage;

    start() {
        ConfigStorage.instance = this;
    }
    '"type" : "troopOverland", "number": "5", "level" : "5"}'
    
    '{{"coord": [5,6], "type": "troopOverland", "level": 5, "childSells": [[4,5],[5,5]] },{building},{}}'



    



}

class unit{
    hp: number
    damage: number

    constructor(hp: number, damage: number){
        this.hp = hp
        this.damage = damage
    }
}
