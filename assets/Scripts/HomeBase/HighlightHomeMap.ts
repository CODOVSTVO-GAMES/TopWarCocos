import { _decorator, Sprite, Vec3 } from 'cc';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';
import { SpriteStorage } from '../Storage/SpriteStorage';

export class HighlightHomeMap {

    static initCellFree() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.spriteCoords[i] = ControllerHomeMapStorage.getCoord(i).getComponent(Sprite);
        }
        this.closeSpriteCoord();
    }

    static openCellFree() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i) == null) {
                HomeMapStorage.instance.spriteCoords[i].spriteFrame = SpriteStorage.instance.getSpriteCoord("f");
            }
        }
    }

    static openCell(type: string, pos: Vec3) {
        let minDistance: number = 1000000;
        let indexObject: number;
        let arrayIndexs: number[] = ControllerHomeMapStorage.getArrayIndexs(type);
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.spriteCoords[i].spriteFrame = SpriteStorage.instance.getSpriteCoord("f");
            let currentDistance = Vec3.distance(ControllerHomeMapStorage.getCoordWorldPosition(i), pos);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = i;
            }
        }
        for (let i = 0; i < arrayIndexs.length; i++) {
            try {
                let tempIndex = indexObject - arrayIndexs[i]
                if (ControllerHomeMapStorage.getObjectParameter(tempIndex) == null) {
                    // HomeMapStorage.instance.cellHint[tempIndex].active = false;
                    HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("s");
                }
                else {
                    if (ControllerHomeMapStorage.getObjectParameter(tempIndex).type == type) {
                        // HomeMapStorage.instance.cellHint[tempIndex].active = false;
                        HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("s");
                    }
                    else {
                        HomeMapStorage.instance.spriteCoords[tempIndex].spriteFrame = SpriteStorage.instance.getSpriteCoord("b");
                    }
                }
            }
            catch
            {
                console.log("error");
            }
        }
    }

    static openCellHint(type: string, level: number) {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i)) {
                if (ControllerHomeMapStorage.getObjectParameter(i).type == type) {
                    if (ControllerHomeMapStorage.getObjectParameter(i).level == level) {
                        // HomeMapStorage.instance.cellBackgraund[i].active = false;
                        // HomeMapStorage.instance.cellHint[i].active = true;
                    }
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

