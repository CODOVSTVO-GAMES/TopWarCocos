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

    static openCellWater() {
        for (let i = 0; i < IndexesMap.indexesWater.length; i++) {
            HomeMapStorage.instance.spriteCoords[IndexesMap.indexesWater[i]].spriteFrame = SpriteStorage.instance.getSpriteCoord("f");
        }
    }

    static openCellEarth() {
        for (let i = 0; i < IndexesMap.indexesEarth.length; i++) {
            HomeMapStorage.instance.spriteCoords[IndexesMap.indexesEarth[i]].spriteFrame = SpriteStorage.instance.getSpriteCoord("f");
        }
    }

    static openCell(type: string, level: number, pos: Vec3) {
        let minDistance: number = 1000000;
        let indexObject: number;
        let arrayIndexs: number[] = ControllerHomeMapStorage.getArrayIndexs(type);
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            let currentDistance = Vec3.distance(ControllerHomeMapStorage.getCoordWorldPosition(i), pos);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = i;
                if (minDistance < 42) break;
            }
        }
        if (type == TypesObjects.BARRACKS_MARINE || type == TypesObjects.TROOP_MARINE) {
            this.closeSpriteCoord();
            this.openCellWater();
        }
        else {
            this.closeSpriteCoord();
            this.openCellEarth();
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
        for (let i = 0; i < arrayIndexs.length; i++) {
            let tempIndex = indexObject - arrayIndexs[i];
            if (ControllerHomeMapStorage.getObjectParameter(tempIndex) == null) {
                HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("s");
            }
            else {
                if (ControllerHomeMapStorage.getObjectParameter(tempIndex).type == type) {
                    HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("s");
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

