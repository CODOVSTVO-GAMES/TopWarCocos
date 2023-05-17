import { _decorator } from 'cc';
import { CommandPostStorage } from '../CommandPostStorage';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';

export class ControllerCommandPostStorage {

    // =================================================================

    static equateLevelCommandPost(value: number) {
        CommandPostStorage.instance.levelCommandPost = value;
    }

    static addLevelCommandPost(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelCommandPost(): number {
        return CommandPostStorage.instance.levelCommandPost;
    }

    static equateLevelRepairShop(value: number) {
        CommandPostStorage.instance.levelRepairShop = value;
    }

    static addLevelRepairShop(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelRepairShop(): number {
        return CommandPostStorage.instance.levelRepairShop;
    }

    // =================================================================

    static equateLevelMergeGoldMine(value: number) {
        CommandPostStorage.instance.levelMergeGoldMine = value;
    }

    static addLevelMergeGoldMine(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelMergeGoldMine(): number {
        return CommandPostStorage.instance.levelMergeGoldMine;
    }

    static equateLevelBuildGoldMine(value: number) {
        CommandPostStorage.instance.levelBuildGoldMine = value;
    }

    static addLevelBuildGoldMine(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelBuildGoldMine(): number {
        return CommandPostStorage.instance.levelBuildGoldMine;
    }

    // =================================================================

    static equateLevelMergeTroopAir(value: number) {
        CommandPostStorage.instance.levelMergeTroopAir = value;
    }

    static addLevelMergeTroopAir(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelMergeTroopAir(): number {
        return CommandPostStorage.instance.levelMergeTroopAir;
    }

    static equateLevelMergeBarracksAir(value: number) {
        CommandPostStorage.instance.levelMergeBarracksAir = value;
    }

    static addLevelMergeBarracksAir(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelMergeBarracksAir(): number {
        return CommandPostStorage.instance.levelMergeBarracksAir;
    }

    static equateLevelBuildBarracksAir(value: number) {
        CommandPostStorage.instance.levelBuildBarracksAir = value;
    }

    static addLevelBuildBarracksAir(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelBuildBarracksAir(): number {
        return CommandPostStorage.instance.levelBuildBarracksAir;
    }

    // =================================================================

    static equateLevelMergeTroopMarine(value: number) {
        CommandPostStorage.instance.levelMergeTroopMarine = value;
    }

    static addLevelMergeTroopMarine(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelMergeTroopMarine(): number {
        return CommandPostStorage.instance.levelMergeTroopMarine;
    }

    static equateLevelMergeBarracksMarine(value: number) {
        CommandPostStorage.instance.levelMergeBarracksMarine = value;
    }

    static addLevelMergeBarracksMarine(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelMergeBarracksMarine(): number {
        return CommandPostStorage.instance.levelMergeBarracksMarine;
    }

    static equateLevelBuildBarracksMarine(value: number) {
        CommandPostStorage.instance.levelBuildBarracksMarine = value;
    }

    static addLevelBuildBarracksMarine(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelBuildBarracksMarine(): number {
        return CommandPostStorage.instance.levelBuildBarracksMarine;
    }

    // =================================================================

    static equateLevelMergeTroopOverland(value: number) {
        CommandPostStorage.instance.levelMergeTroopOverland = value;
    }

    static addLevelMergeTroopOverland(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelMergeTroopOverland(): number {
        return CommandPostStorage.instance.levelMergeTroopOverland;
    }

    static equateLevelMergeBarracksOverland(value: number) {
        CommandPostStorage.instance.levelMergeBarracksOverland = value;
    }

    static addLevelMergeBarracksOverland(value: number) {
        if (value == 0) return;
        this.updateCommandPostStorage();
    }

    static getLevelMergeBarracksOverland(): number {
        return CommandPostStorage.instance.levelMergeBarracksOverland;
    }

    static equateLevelBuildBarracksOverland(value: number) {
        CommandPostStorage.instance.levelBuildBarracksOverland = value;
    }

    static addLevelBuildBarracksOverland(value: number) {
        if (value == 0) return;
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
        ControllerBufferStorage.addItem(TypesStorages.GAME_STORAGE, obj);
        console.log("updateCommandPostStorage");
    }
}
