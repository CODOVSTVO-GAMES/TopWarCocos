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

    addPower(number: number){
        this.power += number;
    }
    getPower(){
        return this.power
    }

    addExpirience(number: number){
        //Добавляем опыт, проверяем уровень
    }
    getExpirience(){
        return this.experience
    }

    getLevel(){
        return this.level
    }
    
    //game variables


    //technical variables
    
    @property({ type: String })
    private sessionHash: string = '';

    @property({ type: String })
    private sessionId: string = '0';

    @property({ type: String })
    private nodeId: string = '';
    
    @property({ type: String })
    private userId: string = 'cocos';

    setSessionHash(sessionHash: string){
        // console.log("Hash instaled")
        this.sessionHash = sessionHash;
    }
    getSessionHash() : string{
        return this.sessionHash
    }

    setSessionId(sessionId: string){
        this.sessionId = sessionId
    }
    getSessionId(){
        // console.log("request sessionid")
        return this.sessionId
    }
    
    setNodeId(nodeId: string){
        this.nodeId = nodeId
    }
    getNodeId(){
        return this.nodeId
    }

    setuserId(userId: string){
        this.userId = userId
    }
    getuserId(){
        // console.log("request userid")
        return this.userId
    }

    //technical variables

}

