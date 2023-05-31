import { _decorator, Sprite, Vec3 } from 'cc';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { IndexesMap } from '../Static/IndexesMap';

export class HighlightHomeMap {

    static initCellFree() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.spriteCoords[i] = ControllerHomeMapStorage.getCoord(i).getComponent(Sprite);
        }
        this.hideAllCoord();
    }

    static openCell(type: string, location: string, level: number, pos: Vec3) {
        let minDistance = 1000000;
        let indexObject = 0;
        let arrayObject = ControllerHomeMapStorage.getArrayObject(type);
        let arrayRegionObject = ControllerHomeMapStorage.getArratRegionObject(type);

        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            let currentDistance = Vec3.distance(ControllerHomeMapStorage.getCoordWorldPosition(i), pos);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = i;
                if (minDistance < 42) break;
            }
        }

        this.hideAllCoord();

        for (let i = 0; i < arrayRegionObject.length; i++) {
            if (IndexesMap.indexes[indexObject - arrayRegionObject[i]].typeCoord == location) {
                this.renderCoordFree(indexObject - arrayRegionObject[i]);
            }
        }

        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i) == null) continue;
            if (ControllerHomeMapStorage.getObjectParameter(i).type == type) {
                if (ControllerHomeMapStorage.getObjectParameter(i).level == level) {
                    this.renderCoordHint(i);
                }
                else {
                    this.hideCoord(i);
                }
            }
            else {
                this.hideCoord(i);
            }
        }

        for (let i = 0; i < arrayObject.length; i++) {
            let tempIndex = indexObject - arrayObject[i];
            if (ControllerHomeMapStorage.getObjectParameter(tempIndex) == null) {
                if (IndexesMap.indexes[tempIndex].typeCoord == location) {
                    this.renderCoordSelect(tempIndex);
                }
                else {
                    this.renderCoordBlock(tempIndex);
                }
            }
            else {
                if (ControllerHomeMapStorage.getObjectParameter(tempIndex).type == type) {
                    if (IndexesMap.indexes[tempIndex].typeCoord == location) {
                        this.renderCoordSelect(tempIndex);
                    }
                    else {
                        this.renderCoordBlock(tempIndex);
                    }
                }
                else {
                    this.renderCoordBlock(tempIndex);
                }
            }
        }
    }

    static hideAllCoord() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.spriteCoords[i].spriteFrame = null;
        }
    }

    static hideCoord(index: number) {
        if (ControllerHomeMapStorage.getMapSize() > index) {
            HomeMapStorage.instance.spriteCoords[index].spriteFrame = null;
        }
    }

    static renderCoordFree(index: number) {
        if (ControllerHomeMapStorage.getMapSize() > index) {
            HomeMapStorage.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("f");
        }
    }

    static renderCoordSelect(index: number) {
        if (ControllerHomeMapStorage.getMapSize() > index) {
            HomeMapStorage.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("s");
        }
    }

    static renderCoordBlock(index: number) {
        if (ControllerHomeMapStorage.getMapSize() > index) {
            HomeMapStorage.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("b");
        }
    }

    static renderCoordHint(index: number) {
        if (ControllerHomeMapStorage.getMapSize() > index) {
            HomeMapStorage.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("h");
        }
    }
}

