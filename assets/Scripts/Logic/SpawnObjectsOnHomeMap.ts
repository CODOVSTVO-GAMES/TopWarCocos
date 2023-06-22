import { _decorator, instantiate, Vec3 } from 'cc';
import { PrefabsStorage } from '../Storage/PrefabsStorage';
import { ObjectParameters } from '../ObjectParameters';
import { HomeMapStorageController } from '../Controllers/StorageControllers/HomeMapStorageController';
import { TypesObjects } from '../Static/TypesObjects';
import { TypesLocation } from '../Static/TypesLocation';
import { AutocombineStorageController } from '../Controllers/StorageControllers/AutocombineStorageController';
const { ccclass } = _decorator;

@ccclass('SpawnObjectsOnHomeMap')
export class SpawnObjectsOnHomeMap {

    public static SpawnObjectsOnHomeMapFromStorage() {
        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            if (HomeMapStorageController.getObjectParameter(i) == null) continue
            if (HomeMapStorageController.getObjectParameter(i).index != i) continue

            let typeObject = HomeMapStorageController.getObjectParameter(i).type
            let locationObject: string
            let levelObject = HomeMapStorageController.getObjectParameter(i).level
            let indexObject = HomeMapStorageController.getObjectParameter(i).index

            if (typeObject == TypesObjects.BARRACKS_MARINE || typeObject == TypesObjects.TROOP_MARINE) {
                locationObject = TypesLocation.WATER
            }
            else {
                locationObject = TypesLocation.EARTH
            }

            this.SpawnObjectsOnHomeMapPos(typeObject, locationObject, levelObject, indexObject)
        }
    }

    public static SpawnObjectsOnHomeMapPos(type: string, location: string, level: number, index: number): ObjectParameters {

        let object = instantiate(PrefabsStorage.instance.getObjectPrefab(type))
        let objectParameter = object.getComponent(ObjectParameters)

        HomeMapStorageController.setParent(object, index)

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
        HomeMapStorageController.setObjectParameter(objectParameter, type, index)

        if (type == TypesObjects.GOLD_MINE) {
            AutocombineStorageController.alo(objectParameter)
        }
        
        return objectParameter
    }

    public static SpawnObjectsOnHomeMapNearby(type: string, location: string, level: number, index: number) {
        let minDistance = 100000
        let indexeSpawnObject = 0
        let isSpawnObject = false

        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            let currentDistance: number = Vec3.distance(HomeMapStorageController.getCoordPosition(index), HomeMapStorageController.getCoordPosition(i))
            if (currentDistance < minDistance) {
                let arrayIndexes = HomeMapStorageController.getArrayObject(type)
                let check = false
                for (let j = 0; j < arrayIndexes.length; j++) {
                    if (HomeMapStorageController.getObjectParameter(i - arrayIndexes[j]) != null) {
                        check = true
                        break
                    }
                }
                if (check == false) {
                    minDistance = currentDistance
                    indexeSpawnObject = i
                    isSpawnObject = true
                }
            }
        }

        if (isSpawnObject) {
            return this.SpawnObjectsOnHomeMapPos(type, location, level, indexeSpawnObject)
        }
        else {
            console.log("error: there is no free space.")
        }
    }

    public static SpawnObjectsOnHomeMapMerge(type: string, location: string, level: number, index: number) {
        this.SpawnObjectsOnHomeMapPos(type, location, level + 1, index)
    }
}