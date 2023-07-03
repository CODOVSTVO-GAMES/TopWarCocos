import { _decorator, Vec3 } from 'cc';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { HomeMapStructure } from '../Static/HomeMapStructure';
import { HomeMapPresenter } from '../Presenter/HomeMapPresenter';
import { HomeMapModel } from '../Model/HomeMapModel';

export class HighlightHomeMap {

    public static indexesActiveCooord: number[] = []

    public static openCell(type: string, location: string, level: number, pos: Vec3) {
        let minDistance = 1000000
        let indexObject = 0
        let arrayObject = HomeMapPresenter.getArrayObject(type)
        let arrayRegionObject = HomeMapPresenter.getArratRegionObject(type)

        for (let i = 0; i < HomeMapPresenter.getMapSize(); i++) {
            let currentDistance = Vec3.distance(HomeMapPresenter.getCoordWorldPosition(i), pos)
            if (currentDistance < minDistance) {
                minDistance = currentDistance
                indexObject = i
                if (minDistance < 42) break
            }
        }

        this.hideAllCoord();

        for (let i = 0; i < arrayRegionObject.length; i++) {
            if (indexObject - arrayRegionObject[i] < 0 || indexObject - arrayRegionObject[i] > 1999) continue
            if (HomeMapStructure.structure[indexObject - arrayRegionObject[i]].location == location) {
                if (HomeMapStructure.structure[indexObject - arrayRegionObject[i]].numberZone <= HomeMapModel.instance.numberOpenZones) {
                    if (HomeMapPresenter.getObjectParameter(indexObject - arrayRegionObject[i]) == null) {
                        this.renderCoordFree(indexObject - arrayRegionObject[i])
                    }
                    else {
                        this.hideCoord(indexObject - arrayRegionObject[i])
                    }
                }
                else {
                    this.hideCoord(indexObject - arrayRegionObject[i])
                }
            }
        }

        for (let i = 0; i < HomeMapPresenter.getMapSize(); i++) {
            if (HomeMapPresenter.getObjectParameter(i) == null) continue
            if (HomeMapPresenter.getObjectParameter(i).type == type) {
                if (HomeMapPresenter.getObjectParameter(i).level == level) {
                    this.renderCoordHint(i)
                }
            }
        }

        for (let i = 0; i < arrayObject.length; i++) {
            let tempIndex = indexObject - arrayObject[i]
            if (tempIndex < 0) continue
            if (HomeMapPresenter.getObjectParameter(tempIndex) == null) {
                if (HomeMapStructure.structure[tempIndex].location == location) {
                    if (HomeMapStructure.structure[tempIndex].numberZone <= HomeMapModel.instance.numberOpenZones) {
                        this.renderCoordSelect(tempIndex)
                    }
                    else {
                        this.renderCoordBlock(tempIndex)
                    }
                }
                else {
                    this.renderCoordBlock(tempIndex)
                }
            }
            else {
                if (HomeMapPresenter.getObjectParameter(tempIndex).type == type) {
                    if (HomeMapStructure.structure[tempIndex].location == location) {
                        if (HomeMapStructure.structure[tempIndex].numberZone <= HomeMapModel.instance.numberOpenZones) {
                            this.renderCoordSelect(tempIndex)
                        }
                        else {
                            this.renderCoordBlock(tempIndex)
                        }
                    }
                    else {
                        this.renderCoordBlock(tempIndex)
                    }
                }
                else {
                    this.renderCoordBlock(tempIndex)
                }
            }
        }
    }

    public static hideAllCoord() {
        for (let i = 0; i < this.indexesActiveCooord.length; i++) {
            HomeMapModel.instance.spriteCoords[this.indexesActiveCooord[i]].spriteFrame = null
        }
        this.indexesActiveCooord = new Array<number>
    }

    private static hideCoord(index: number) {
        if (HomeMapPresenter.getMapSize() > index) {
            HomeMapModel.instance.spriteCoords[index].spriteFrame = null
        }
    }

    private static renderCoordFree(index: number) {
        if (HomeMapPresenter.getMapSize() > index) {
            HomeMapModel.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("coordFree")
            this.indexesActiveCooord.push(index)
        }
    }

    private static renderCoordSelect(index: number) {
        if (HomeMapPresenter.getMapSize() > index) {
            HomeMapModel.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("coordSelect")
            this.indexesActiveCooord.push(index)
        }
    }

    private static renderCoordBlock(index: number) {
        if (HomeMapPresenter.getMapSize() > index) {
            HomeMapModel.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("coordBlock")
            this.indexesActiveCooord.push(index)
        }
    }

    private static renderCoordHint(index: number) {
        if (HomeMapPresenter.getMapSize() > index) {
            HomeMapModel.instance.spriteCoords[index].spriteFrame = SpriteStorage.instance.getSpriteCoord("coordHint")
            this.indexesActiveCooord.push(index)
        }
    }
}
