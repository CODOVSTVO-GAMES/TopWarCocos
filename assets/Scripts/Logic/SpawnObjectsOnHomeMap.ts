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

    static SpawnObjectsOnHomeMapFromStorage() {
        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            if (HomeMapStorageController.getObjectParameter(i) == null) continue;
            if (HomeMapStorageController.getObjectParameter(i).index != i) continue;

            let location: string;

            if (HomeMapStorageController.getObjectParameter(i).type == TypesObjects.BARRACKS_MARINE || HomeMapStorageController.getObjectParameter(i).type == TypesObjects.TROOP_MARINE) {
                location = TypesLocation.WATER;
            }
            else {
                location = TypesLocation.EARTH;
            }

            this.SpawnObjectsOnHomeMapPos(
                HomeMapStorageController.getObjectParameter(i).type,
                location,
                HomeMapStorageController.getObjectParameter(i).level,
                HomeMapStorageController.getObjectParameter(i).index
            );
        }
    }

    static SpawnObjectsOnHomeMapPos(type: string, location: string, level: number, index: number): ObjectParameters {
        let object = instantiate(PrefabsStorage.instance.getObjectPrefab(type));
        let objectParameter = object.getComponent(ObjectParameters);
        HomeMapStorageController.setParent(object, index);
        objectParameter.type = type;
        objectParameter.location = location;

        if (type == TypesObjects.TROOP_OVERLAND) {
            objectParameter.sizes = "1x1";
        }
        else if (type == TypesObjects.TROOP_MARINE) {
            objectParameter.sizes = "3x2";
        }
        else if (type == TypesObjects.COMMAND_POST) {
            objectParameter.sizes = "3x3";
        }
        else {
            objectParameter.sizes = "2x2";
        }

        objectParameter.level = level;
        objectParameter.index = index;
        HomeMapStorageController.setObjectParameter(objectParameter, type, index);
        if (type == TypesObjects.GOLD_MINE) {
            AutocombineStorageController.alo(objectParameter);
        }
        return objectParameter;
    }

    static SpawnObjectsOnHomeMapNearby(type: string, location: string, level: number, index: number) {
        let minDistance = 100000;
        let indexeSpawnObject = 0;
        let isSpawnObject = false;
        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            let currentDistance: number = Vec3.distance(HomeMapStorageController.getCoordPosition(index), HomeMapStorageController.getCoordPosition(i));
            if (currentDistance < minDistance) {
                let arrayIndexes = HomeMapStorageController.getArrayObject(type);
                let check = false;
                for (let j = 0; j < arrayIndexes.length; j++) {
                    if (HomeMapStorageController.getObjectParameter(i - arrayIndexes[j]) != null) {
                        check = true;
                        break;
                    }
                }
                if (check == false) {
                    minDistance = currentDistance;
                    indexeSpawnObject = i;
                    isSpawnObject = true;
                }
            }
        }
        if (isSpawnObject) {
            return this.SpawnObjectsOnHomeMapPos(type, location, level, indexeSpawnObject);
        }
        else {
            console.log("error: there is no free space.");
        }
    }

    static SpawnObjectsOnHomeMapMerge(type: string, location: string, level: number, index: number) {
        this.SpawnObjectsOnHomeMapPos(type, location, level + 1, index);
    }
}