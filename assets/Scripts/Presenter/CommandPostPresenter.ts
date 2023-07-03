import { CommandPostModel } from "../Model/CommandPostModel";
import { TypesObjects } from "../Static/TypesObjects";

export class CommandPostPresenter {

    public static addLevelCommandPost() {
        CommandPostModel.instance.levelCommandPost += 1
    }

    public static addLevelRepairShop() {
        CommandPostModel.instance.levelRepairShop += 1
    }

    public static addLevelMergeGoldMine() {
        CommandPostModel.instance.levelMergeGoldMine += 1
    }

    public static addLevelBuildGoldMine() {
        CommandPostModel.instance.levelBuildGoldMine += 1
    }

    public static addLevelMergeTroopAir() {
        CommandPostModel.instance.levelMergeTroopAir += 1
    }

    public static addLevelMergeTroopMarine() {
        CommandPostModel.instance.levelMergeTroopMarine += 1
    }

    public static addLevelMergeTroopOverland() {
        CommandPostModel.instance.levelMergeTroopOverland += 1
    }

    public static addLevelMergeBarracksAir() {
        CommandPostModel.instance.levelMergeBarracksAir += 1
    }

    public static addLevelMergeBarracksMarine() {
        CommandPostModel.instance.levelMergeBarracksMarine += 1
    }

    public static addLevelMergeBarracksOverland() {
        CommandPostModel.instance.levelMergeBarracksOverland += 1
    }

    public static addLevelBuildBarracksAir() {
        CommandPostModel.instance.levelBuildBarracksAir += 1
    }

    public static addLevelBuildBarracksMarine() {
        CommandPostModel.instance.levelBuildBarracksMarine += 1
    }

    public static addLevelBuildBarracksOverland() {
        CommandPostModel.instance.levelBuildBarracksOverland += 1
    }

    public static getLevelAllMerge(typeObject: string): number {
        if (typeObject == TypesObjects.GOLD_MINE) {
            return CommandPostModel.instance.levelMergeGoldMine
        }
        else if (typeObject == TypesObjects.TROOP_AIR) {
            return CommandPostModel.instance.levelMergeTroopAir
        }
        else if (typeObject == TypesObjects.TROOP_MARINE) {
            return CommandPostModel.instance.levelMergeTroopMarine
        }
        else if (typeObject == TypesObjects.TROOP_OVERLAND) {
            return CommandPostModel.instance.levelMergeTroopOverland
        }
        else if (typeObject == TypesObjects.BARRACKS_AIR) {
            return CommandPostModel.instance.levelMergeBarracksAir
        }
        else if (typeObject == TypesObjects.BARRACKS_MARINE) {
            return CommandPostModel.instance.levelMergeBarracksMarine
        }
        else if (typeObject == TypesObjects.BARRACKS_OVERLAND) {
            return CommandPostModel.instance.levelMergeBarracksOverland
        }
    }
}