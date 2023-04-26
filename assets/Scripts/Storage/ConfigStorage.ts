import { _decorator, Component, Node } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TypesAttack } from '../Static/TypesAttack';
import { TroopConfiguration } from '../Structures/TroopConfiguration';
const { ccclass, property } = _decorator;

@ccclass('ConfigStorage')
export class ConfigStorage extends Component {

    public static instance: ConfigStorage;

    private troopConfigurations: Array<TroopConfiguration> = []

    start() {
        ConfigStorage.instance = this;
        this.initOwerland()
        console.log(this.getTroopConfigByTypeAndLevel(TypesObjects.TROOP_OVERLAND, 6))
    }   

    
    initOwerland(){
        let type = TypesObjects.TROOP_OVERLAND

        this.troopConfigurations.push(new TroopConfiguration(type, 1, 5, 1, TypesAttack.ONE))
        this.troopConfigurations.push(new TroopConfiguration(type, 2, 10, 3, TypesAttack.ONE))
        this.troopConfigurations.push(new TroopConfiguration(type, 3, 20, 5, TypesAttack.ONE))
        this.troopConfigurations.push(new TroopConfiguration(type, 4, 28, 7, TypesAttack.HORIZON))
        this.troopConfigurations.push(new TroopConfiguration(type, 5, 39, 9, TypesAttack.ONE))
        
        this.troopConfigurations.push(new TroopConfiguration(type, 6, 55, 13, TypesAttack.TWO))
        this.troopConfigurations.push(new TroopConfiguration(type, 7, 77, 19, TypesAttack.THREE))
        this.troopConfigurations.push(new TroopConfiguration(type, 8, 108, 27, TypesAttack.ONE))
        this.troopConfigurations.push(new TroopConfiguration(type, 9, 150, 37, TypesAttack.VERTICAL))
        this.troopConfigurations.push(new TroopConfiguration(type, 10, 210, 52, TypesAttack.TWO))
    }

    getTroopConfigByTypeAndLevel(type: string, level: number) {
        for(let x = 0; x < this.troopConfigurations.length; x++){
            if(this.troopConfigurations[x].type == type && this.troopConfigurations[x].level == level){
                return this.troopConfigurations[x]
            }
        }
        throw "Не существует такого войска"
    }

}