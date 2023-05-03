import { _decorator, CCString, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Storage')
export class Storage extends Component {

    public static instance: Storage;

    @property({ type: CCString })
    private sessionHash: string;

    @property({ type: CCString })
    private sessionId: string;

    @property({ type: CCString })
    private nodeId: string;

    @property({ type: CCString })
    private userId: string = "cocos";

    private coins: number = 0;
    private gems: number = 0;
    private energy: number = 0;
    private power: number = 0;
    private level: number = 0;
    private experience: number = 0;

    onLoad() {
        Storage.instance = this;
    }

    addCoins(value: number) {
        this.coins += value;
    }

    reduceCoins(value: number) {
        this.coins -= value;
    }

    getCoins(): number {
        return this.coins
    }

    addGems(value: number) {
        this.gems += value;
    }

    reduceGems(value: number) {
        this.gems -= value;
    }

    getGems(): number {
        return this.gems
    }

    addEnergy(value: number) {
        this.energy += value;
    }

    reduceEnergy(value: number) {
        this.energy -= value;
    }

    getEnergy(): number {
        return this.energy
    }

    addPower(value: number) {
        this.power += value;
    }

    reducePower(value: number) {
        this.power += value;
    }

    getPower(): number {
        return this.power
    }

    addExpirience(value: number) {
        this.experience += value;
    }

    getExpirience(): number {
        return this.experience
    }

    getLevel(): number {
        return this.level
    }

    //technical variables

    setSessionHash(sessionHash: string) {
        this.sessionHash = sessionHash;
    }
    getSessionHash(): string {
        return this.sessionHash
    }

    setSessionId(sessionId: string) {
        this.sessionId = sessionId
    }

    getSessionId(): string {
        return this.sessionId
    }

    setNodeId(nodeId: string) {
        this.nodeId = nodeId
    }

    getNodeId(): string {
        return this.nodeId
    }

    setUserId(userId: string) {
        this.userId = userId
    }

    getUserId(): string {
        return this.userId
    }
}
