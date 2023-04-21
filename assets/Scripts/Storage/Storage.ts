import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Storage')
export class Storage extends Component {
    //Отдает и изменяет данные
    public static instance: Storage;

    start() {
        Storage.instance = this;
    }

    //game variables

    private coins: number = 0;

    private gems: number = 0;

    private energy: number = 0;

    private power: number = 0;

    private level: number = 0;

    private experience: number = 0;

    //game variables

    addCoins(number: number){
        this.coins += number;
    }

    addGems(number: number){
        this.gems += number;
    }

    addEnergy(number: number){
        this.energy += number;
    }

    addPower(number: number){
        this.power += number;
    }

    addExpirience(number: number){
        //Добавляем опыт, проверяем уровень
    }

    //

    getCoins(){
        return this.coins
    }

    getGems(){
        return this.gems
    }

    getEnergy(){
        return this.energy
    }

    getPower(){
        return this.power
    }

    getLevel(){
        return this.level
    }

    getExpirience(){
        return this.experience
    }

    //

}

