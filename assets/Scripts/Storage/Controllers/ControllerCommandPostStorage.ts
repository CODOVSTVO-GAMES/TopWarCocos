import { _decorator } from 'cc';
import { CommandPostStorage } from '../CommandPostStorage';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';

export class ControllerCommandPostStorage {

    // =================================================================

    static assignStartingValues() {
        CommandPostStorage.instance.levelCommandPost = 1;
        CommandPostStorage.instance.levelRepairShop = 1;
        CommandPostStorage.instance.levelMergeGoldMine = 1;
        CommandPostStorage.instance.levelBuildGoldMine = 1;
        CommandPostStorage.instance.levelMergeTroopAir = 1;
        CommandPostStorage.instance.levelMergeBarracksAir = 1;
        CommandPostStorage.instance.levelBuildBarracksAir = 1;
        CommandPostStorage.instance.levelMergeTroopMarine = 1;
        CommandPostStorage.instance.levelMergeBarracksMarine = 1;
        CommandPostStorage.instance.levelBuildBarracksMarine = 1;
        CommandPostStorage.instance.levelMergeTroopOverland = 1;
        CommandPostStorage.instance.levelMergeBarracksOverland = 1;
        CommandPostStorage.instance.levelBuildBarracksOverland = 1;
        this.updateCommandPostStorage();
    }

    static assigningSaveValues(obj: Object) {
        let json = JSON.parse(JSON.stringify(obj));
        CommandPostStorage.instance.levelCommandPost = json.levelCommandPost;
        CommandPostStorage.instance.levelRepairShop = json.levelRepairShop;
        CommandPostStorage.instance.levelMergeGoldMine = json.levelMergeGoldMine;
        CommandPostStorage.instance.levelBuildGoldMine = json.levelBuildGoldMine;
        CommandPostStorage.instance.levelMergeTroopAir = json.levelMergeTroopAir;
        CommandPostStorage.instance.levelMergeBarracksAir = json.levelMergeBarracksAir;
        CommandPostStorage.instance.levelBuildBarracksAir = json.levelBuildBarracksAir;
        CommandPostStorage.instance.levelMergeTroopMarine = json.levelMergeTroopMarine;
        CommandPostStorage.instance.levelMergeBarracksMarine = json.levelMergeBarracksMarine;
        CommandPostStorage.instance.levelBuildBarracksMarine = json.levelBuildBarracksMarine;
        CommandPostStorage.instance.levelMergeTroopOverland = json.levelMergeTroopOverland;
        CommandPostStorage.instance.levelMergeBarracksOverland = json.levelMergeBarracksOverland;
        CommandPostStorage.instance.levelBuildBarracksOverland = json.levelBuildBarracksOverland;
    }

    // =================================================================

    static equateLevelCommandPost(value: number) {
        CommandPostStorage.instance.levelCommandPost = value;
    }

    static addLevelCommandPost() {
        CommandPostStorage.instance.levelCommandPost += 1;
        this.updateCommandPostStorage();
    }

    static getLevelCommandPost(): number {
        return CommandPostStorage.instance.levelCommandPost;
    }

    static equateLevelRepairShop(value: number) {
        CommandPostStorage.instance.levelRepairShop = value;
    }

    static addLevelRepairShop() {
        CommandPostStorage.instance.levelRepairShop += 1;
        this.updateCommandPostStorage();
    }

    static getLevelRepairShop(): number {
        return CommandPostStorage.instance.levelRepairShop;
    }

    // =================================================================

    static equateLevelMergeGoldMine(value: number) {
        CommandPostStorage.instance.levelMergeGoldMine = value;
    }

    static addLevelMergeGoldMine() {
        CommandPostStorage.instance.levelMergeGoldMine += 1;
        this.updateCommandPostStorage();
    }

    static getLevelMergeGoldMine(): number {
        return CommandPostStorage.instance.levelMergeGoldMine;
    }

    static equateLevelBuildGoldMine(value: number) {
        CommandPostStorage.instance.levelBuildGoldMine = value;
    }

    static addLevelBuildGoldMine() {
        CommandPostStorage.instance.levelBuildGoldMine += 1;
        this.updateCommandPostStorage();
    }

    static getLevelBuildGoldMine(): number {
        return CommandPostStorage.instance.levelBuildGoldMine;
    }

    // =================================================================

    static equateLevelMergeTroopAir(value: number) {
        CommandPostStorage.instance.levelMergeTroopAir = value;
    }

    static addLevelMergeTroopAir() {
        CommandPostStorage.instance.levelMergeTroopAir += 1;
        this.updateCommandPostStorage();
    }

    static getLevelMergeTroopAir(): number {
        return CommandPostStorage.instance.levelMergeTroopAir;
    }

    static equateLevelMergeBarracksAir(value: number) {
        CommandPostStorage.instance.levelMergeBarracksAir = value;
    }

    static addLevelMergeBarracksAir() {
        CommandPostStorage.instance.levelMergeBarracksAir += 1;
        this.updateCommandPostStorage();
    }

    static getLevelMergeBarracksAir(): number {
        return CommandPostStorage.instance.levelMergeBarracksAir;
    }

    static equateLevelBuildBarracksAir(value: number) {
        CommandPostStorage.instance.levelBuildBarracksAir = value;
    }

    static addLevelBuildBarracksAir() {
        CommandPostStorage.instance.levelBuildBarracksAir += 1;
        this.updateCommandPostStorage();
    }

    static getLevelBuildBarracksAir(): number {
        return CommandPostStorage.instance.levelBuildBarracksAir;
    }

    // =================================================================

    static equateLevelMergeTroopMarine(value: number) {
        CommandPostStorage.instance.levelMergeTroopMarine = value;
    }

    static addLevelMergeTroopMarine() {
        CommandPostStorage.instance.levelMergeTroopMarine += 1;
        this.updateCommandPostStorage();
    }

    static getLevelMergeTroopMarine(): number {
        return CommandPostStorage.instance.levelMergeTroopMarine;
    }

    static equateLevelMergeBarracksMarine(value: number) {
        CommandPostStorage.instance.levelMergeBarracksMarine = value;
    }

    static addLevelMergeBarracksMarine() {
        CommandPostStorage.instance.levelMergeBarracksMarine += 1;
        this.updateCommandPostStorage();
    }

    static getLevelMergeBarracksMarine(): number {
        return CommandPostStorage.instance.levelMergeBarracksMarine;
    }

    static equateLevelBuildBarracksMarine(value: number) {
        CommandPostStorage.instance.levelBuildBarracksMarine = value;
    }

    static addLevelBuildBarracksMarine() {
        CommandPostStorage.instance.levelBuildBarracksMarine += 1;
        this.updateCommandPostStorage();
    }

    static getLevelBuildBarracksMarine(): number {
        return CommandPostStorage.instance.levelBuildBarracksMarine;
    }

    // =================================================================

    static equateLevelMergeTroopOverland(value: number) {
        CommandPostStorage.instance.levelMergeTroopOverland = value;
    }

    static addLevelMergeTroopOverland() {
        CommandPostStorage.instance.levelMergeTroopOverland += 1;
        this.updateCommandPostStorage();
    }

    static getLevelMergeTroopOverland(): number {
        return CommandPostStorage.instance.levelMergeTroopOverland;
    }

    static equateLevelMergeBarracksOverland(value: number) {
        CommandPostStorage.instance.levelMergeBarracksOverland = value;
    }

    static addLevelMergeBarracksOverland() {
        CommandPostStorage.instance.levelMergeBarracksOverland += 1;
        this.updateCommandPostStorage();
    }

    static getLevelMergeBarracksOverland(): number {
        return CommandPostStorage.instance.levelMergeBarracksOverland;
    }

    static equateLevelBuildBarracksOverland(value: number) {
        CommandPostStorage.instance.levelBuildBarracksOverland = value;
    }

    static addLevelBuildBarracksOverland() {
        CommandPostStorage.instance.levelBuildBarracksOverland += 1;
        this.updateCommandPostStorage();
    }

    static getLevelBuildBarracksOverland(): number {
        return CommandPostStorage.instance.levelBuildBarracksOverland;
    }

    // =================================================================

    static updateCommandPostStorage() {
        let obj = {
            levelCommandPost: CommandPostStorage.instance.levelCommandPost,
            levelRepairShop: CommandPostStorage.instance.levelRepairShop,
            levelMergeGoldMine: CommandPostStorage.instance.levelMergeGoldMine,
            levelBuildGoldMine: CommandPostStorage.instance.levelBuildGoldMine,
            levelMergeTroopAir: CommandPostStorage.instance.levelMergeTroopAir,
            levelMergeBarracksAir: CommandPostStorage.instance.levelMergeBarracksAir,
            levelBuildBarracksAir: CommandPostStorage.instance.levelBuildBarracksAir,
            levelMergeTroopMarine: CommandPostStorage.instance.levelMergeTroopMarine,
            levelMergeBarracksMarine: CommandPostStorage.instance.levelMergeBarracksMarine,
            levelBuildBarracksMarine: CommandPostStorage.instance.levelBuildBarracksMarine,
            levelMergeTroopOverland: CommandPostStorage.instance.levelMergeTroopOverland,
            levelMergeBarracksOverland: CommandPostStorage.instance.levelMergeBarracksOverland,
            levelBuildBarracksOverland: CommandPostStorage.instance.levelBuildBarracksOverland,
        };
        ControllerBufferStorage.addItem(TypesStorages.COMMAND_POST_STORAGE, obj);
    }
}
