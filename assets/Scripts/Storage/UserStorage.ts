import { _decorator, Component, Node } from 'cc';
import { ConfigStorage } from './ConfigStorage';
const { ccclass, property } = _decorator;

@ccclass('UserStorage')
export class UserStorage extends Component {

    public static instance: UserStorage

    start() {
        UserStorage.instance = this
    }

    private coins: number = 0;

    private coinsInTime: number = 0;

    private gems: number = 0;

    private energy: number = 0;

    private experience: number = 0;

    private level: number = 0;

    //power

    private maxPower: number = 0;

    private territoryPower: number = 0;

    private technoPower: number = 0;

    private heroPower: number = 0;

    private arsenalPower: number = 0;

    private professionPower: number = 0;

    //power

    addCoins(number: number){
        this.coins += number;
    }
    getCoins(){
        return this.coins
    }

    addGems(number: number){
        this.gems += number;
    }
    getGems(){
        return this.gems
    }

    addEnergy(number: number){
        this.energy += number;
    }
    getEnergy(){
        return this.energy
    }

    addExpirience(number: number){
        this.experience += number
        if(this.experience > ConfigStorage.instance.getLevelExpirienceByLevel(this.level)){//точнее будет работать при установке уровня по опыту а не +1
            this.level = ConfigStorage.instance.getLevelByExpirience(this.experience);
        }
    }

    getExpirience(){
        return this.experience
    }

    getExpirienceForNextLevel(){
        return ConfigStorage.instance.getLevelExpirienceByLevel(this.level + 1) - this.experience
    }

    getLevel(){
        return this.level
    }


    getPowerMax() : number {
        return this.maxPower
    }

    getPower() : number {
        return this.territoryPower + this.technoPower + this.heroPower + this.arsenalPower + this.professionPower
    }

    addPowerTerritory(power : number) {
        this.territoryPower += power
        this.updateMaxPower()
    }

    addPowerTechno(power : number) {
        this.technoPower += power
        this.updateMaxPower()
    }

    updateMaxPower(){
        if (this.getPower() > this.maxPower){
            this.maxPower = this.getPower()
        }
    }
}

