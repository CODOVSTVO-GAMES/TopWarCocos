import { _decorator, Vec3 } from 'cc';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { HomeMapStorageController } from '../Controllers/StorageControllers/HomeMapStorageController';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { HomeMapStructure } from '../Static/HomeMapStructure';

export class HighlightHomeMap {

    public static indexesActiveCooord: number[] = [];

    // static Test(){
    //     for(let i = 0; i < IndexesMap.indexesMap.length; i++) {
    //         if(IndexesMap.indexesMap[i].typeCoord == "earth")
    //         {
    //              this.renderCoordFree(i);
    //         }
    //         else
    //         {
    //             this.renderCoordBlock(i);
    //         }
    //     }
    // }

    static openCell(type: string, location: string, level: number, pos: Vec3) {
        let minDistance = 1000000;
        let indexObject = 0;
        let arrayObject = HomeMapStorageController.getArrayObject(type);
        let arrayRegionObject = HomeMapStorageController.getArratRegionObject(type);

        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            let currentDistance = Vec3.distance(HomeMapStorageController.getCoordWorldPosition(i), pos);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = i;
                if (minDistance < 42) break;
            }
        }

        this.hideAllCoord();

        for (let i = 0; i < arrayRegionObject.length; i++) {
            if (indexObject - arrayRegionObject[i] < 0 || indexObject - arrayRegionObject[i] > 1999) continue;
            if (HomeMapStructure.structure[indexObject - arrayRegionObject[i]].location == location) {
                if (HomeMapStorageController.getObjectParameter(indexObject - arrayRegionObject[i]) == null) {
                    this.renderCoordFree(indexObject - arrayRegionObject[i]);
                }
                else {
                    this.hideCoord(indexObject - arrayRegionObject[i]);
                }
            }
        }

        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            if (HomeMapStorageController.getObjectParameter(i) == null) continue;
            if (HomeMapStorageController.getObjectParameter(i).type == type) {
                if (HomeMapStorageController.getObjectParameter(i).level == level) {
                    this.renderCoordHint(i);
                }
            }
        }

        for (let i = 0; i < arrayObject.length; i++) {
            let tempIndex = indexObject - arrayObject[i];
            if (tempIndex < 0) continue;
            if (HomeMapStorageController.getObjectParameter(tempIndex) == null) {
                if (HomeMapStructure.structure[tempIndex].location == location) {
                    this.renderCoordSelect(tempIndex);
                }
                else {
                    this.renderCoordBlock(tempIndex);
                }
            }
            else {
                if (HomeMapStorageController.getObjectParameter(tempIndex).type == type) {
                    if (HomeMapStructure.structure[tempIndex].location == location) {
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
        for (let i = 0; i < this.indexesActiveCooord.length; i++) {
            HomeMapStorage.instance.spriteCoords[this.indexesActiveCooord[i]].spriteFrame = null;
        }
        this.indexesActiveCooord = new Array<number>;
    }

    static hideCoord(index: number) {
        if (HomeMapStorageController.getMapSize() > index) {
            HomeMapStorage.instance.spriteCoords[index].spriteFrame = null;
        }
    }

    static renderCoordFree(index: number) {
        if (HomeMapStorageController.getMapSize() > index) {
            HomeMapStorage.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("coordFree");
            this.indexesActiveCooord.push(index);
        }
    }

    static renderCoordSelect(index: number) {
        if (HomeMapStorageController.getMapSize() > index) {
            HomeMapStorage.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("coordSelect");
            this.indexesActiveCooord.push(index);
        }
    }

    static renderCoordBlock(index: number) {
        if (HomeMapStorageController.getMapSize() > index) {
            HomeMapStorage.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("coordBlock");
            this.indexesActiveCooord.push(index);
        }
    }

    static renderCoordHint(index: number) {
        if (HomeMapStorageController.getMapSize() > index) {
            HomeMapStorage.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("coordHint");
            this.indexesActiveCooord.push(index);
        }
    }
}
