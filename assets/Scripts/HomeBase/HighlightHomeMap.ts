import { _decorator, Sprite, Vec3 } from 'cc';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { TypesObjects } from '../Static/TypesObjects';
import { IndexesMap } from '../Static/IndexesMap';

export class HighlightHomeMap {

    static initCellFree() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.spriteCoords[i] = ControllerHomeMapStorage.getCoord(i).getComponent(Sprite);
        }
        this.closeSpriteCoord();
    }

    static openCell(type: string, level: number, pos: Vec3) {
        let minDistance: number = 1000000;
        let indexObject: number;
        let arrayIndexes: number[] = ControllerHomeMapStorage.getArrayIndexes(type);

        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            let currentDistance = Vec3.distance(ControllerHomeMapStorage.getCoordWorldPosition(i), pos);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = i;
                if (minDistance < 42) break;
            }
        }

        this.closeSpriteCoord();

        let arrayIndexes1 = ControllerHomeMapStorage.getArrayIndexes1(type);

        if (type == TypesObjects.BARRACKS_MARINE || type == TypesObjects.TROOP_MARINE) {
            for (let i = 0; i < arrayIndexes1.length; i++) {
                if (IndexesMap.indexes[indexObject - arrayIndexes1[i]].typeCoord == "water") {
                    HomeMapStorage.instance.spriteCoords[indexObject - arrayIndexes1[i]].spriteFrame = SpriteStorage.instance.getSpriteCoord("f");
                }
            }
        }
        else {
            for (let i = 0; i < arrayIndexes1.length; i++) {
                if (IndexesMap.indexes[indexObject - arrayIndexes1[i]].typeCoord == "earth") {
                    HomeMapStorage.instance.spriteCoords[indexObject - arrayIndexes1[i]].spriteFrame = SpriteStorage.instance.getSpriteCoord("f");
                }
            }
        }

        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i) == null) continue;
            if (ControllerHomeMapStorage.getObjectParameter(i).type == type) {
                if (ControllerHomeMapStorage.getObjectParameter(i).level == level) {
                    HomeMapStorage.instance.spriteCoords[i].spriteFrame = SpriteStorage.instance.getSpriteCoord("h");
                }
                else {
                    HomeMapStorage.instance.spriteCoords[i].spriteFrame = null;
                }
            }
            else {
                HomeMapStorage.instance.spriteCoords[i].spriteFrame = null;
            }
        }

        for (let i = 0; i < arrayIndexes.length; i++) {
            let tempIndex = indexObject - arrayIndexes[i];
            if (ControllerHomeMapStorage.getObjectParameter(tempIndex) == null) {
                if (type == TypesObjects.BARRACKS_MARINE || type == TypesObjects.TROOP_MARINE) {
                    if (IndexesMap.indexes[tempIndex].typeCoord == "water") {
                        HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("s");
                    }
                    else {
                        HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("b");
                    }
                }
                else {

                    if (IndexesMap.indexes[tempIndex].typeCoord == "earth") {
                        HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("s");
                    }
                    else {
                        HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("b");
                    }
                }
            }
            else {
                if (ControllerHomeMapStorage.getObjectParameter(tempIndex).type == type) {
                    if (type == TypesObjects.BARRACKS_MARINE || type == TypesObjects.TROOP_MARINE) {
                        if (IndexesMap.indexes[tempIndex].typeCoord == "water") {
                            HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("s");
                        }
                        else {
                            HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("b");
                        }
                    }
                    else {

                        if (IndexesMap.indexes[tempIndex].typeCoord == "earth") {
                            HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("s");
                        }
                        else {
                            HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("b");
                        }
                    }
                }
                else {
                    HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("b");
                }
            }
        }
    }

    static closeSpriteCoord() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.spriteCoords[i].spriteFrame = null;
        }
    }
}

