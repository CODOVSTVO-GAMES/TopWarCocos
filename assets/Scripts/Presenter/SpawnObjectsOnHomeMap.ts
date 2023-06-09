import { _decorator, instantiate, Vec3 } from 'cc';
import { PrefabsModel } from '../Model/PrefabsModel';
import { ObjectParameters } from '../ObjectParameters';
import { TypesObjects } from '../Static/TypesObjects';
import { TypesLocation } from '../Static/TypesLocation';
import { HomeMapStructure } from '../Static/HomeMapStructure';
import { HomeMapPresenter } from './HomeMapPresenter';
import { HomeMapModel } from '../Model/HomeMapModel';
import { AutocombinePresenter } from './AutocombinePresenter';
const { ccclass } = _decorator;

@ccclass('SpawnObjectsOnHomeMap')
export class SpawnObjectsOnHomeMap {

    public static SpawnObjectsFromStorage() {
        for (let i = 0; i < HomeMapPresenter.getMapSize(); i++) {
            if (HomeMapPresenter.getObjectParameter(i) == null) continue
            if (HomeMapPresenter.getObjectParameter(i).index != i) continue

            let typeObject = HomeMapPresenter.getObjectParameter(i).type
            let locationObject: string
            let levelObject = HomeMapPresenter.getObjectParameter(i).level
            let indexObject = HomeMapPresenter.getObjectParameter(i).index

            if (typeObject == TypesObjects.BARRACKS_MARINE || typeObject == TypesObjects.TROOP_MARINE) {
                locationObject = TypesLocation.WATER
            }
            else {
                locationObject = TypesLocation.EARTH
            }

            this.SpawnObjectsPos(typeObject, locationObject, levelObject, indexObject)
        }
    }

    public static SpawnObjectsPos(type: string, location: string, level: number, index: number): ObjectParameters {
        let object = instantiate(PrefabsModel.instance.getGameObjectPrefab(type))
        let objectParameter = object.getComponent(ObjectParameters)

        HomeMapPresenter.setParent(object, index)

        objectParameter.type = type
        objectParameter.location = location

        if (type == TypesObjects.TROOP_OVERLAND) {
            objectParameter.sizes = "1x1"
        }
        else if (type == TypesObjects.TROOP_MARINE) {
            objectParameter.sizes = "3x2"
        }
        else if (type == TypesObjects.COMMAND_POST) {
            objectParameter.sizes = "3x3"
        }
        else if (type == TypesObjects.WALL_4X4 || type == TypesObjects.BATTLE_4X4) {
            objectParameter.sizes = "4x4"
        }
        else if (type == TypesObjects.WALL_8X8 || type == TypesObjects.BATTLE_8X8) {
            objectParameter.sizes = "8x8"
        }
        else {
            objectParameter.sizes = "2x2"
        }

        objectParameter.level = level
        objectParameter.index = index
        HomeMapPresenter.setObjectParameter(objectParameter, type, index)

        if (type == TypesObjects.GOLD_MINE) {
            AutocombinePresenter.alo(objectParameter)
        }

        return objectParameter
    }

    public static SpawnObjectsNearby(type: string, location: string, level: number, index: number) {
        let minDistance = 100000
        let indexeSpawnObject = 0
        let isSpawnObject = false

        for (let i = 0; i < HomeMapPresenter.getMapSize(); i++) {
            let currentDistance: number = Vec3.distance(HomeMapPresenter.getCoordPosition(index), HomeMapPresenter.getCoordPosition(i))
            if (currentDistance < minDistance) {
                let arrayIndexes = HomeMapPresenter.getArrayObject(type)
                let check = false
                for (let j = 0; j < arrayIndexes.length; j++) {
                    if (HomeMapPresenter.getObjectParameter(i - arrayIndexes[j]) != null) {
                        check = true
                        break
                    }
                    try {
                        if (HomeMapStructure.structure[i - arrayIndexes[j]].numberZone > HomeMapModel.instance.numberOpenZones) {
                            check = true
                            break
                        }
                        if (HomeMapStructure.structure[i - arrayIndexes[j]].location != location) {
                            check = true
                            break
                        }
                    }
                    catch { }
                }
                if (check == false) {
                    minDistance = currentDistance
                    indexeSpawnObject = i
                    isSpawnObject = true
                }
            }
        }

        if (isSpawnObject) {
            return this.SpawnObjectsPos(type, location, level, indexeSpawnObject)
        }
        else {
            console.log("error: there is no free space.")
        }
    }

    public static SpawnObjectsMerge(type: string, location: string, level: number, index: number) {
        this.SpawnObjectsPos(type, location, level + 1, index)
    }
}