import { _decorator, instantiate, Vec3 } from 'cc';
import { PrefabsStorage } from './Storage/PrefabsStorage';
import { ObjectParameters } from './ObjectParameters';
import { ControllerHomeMapStorage } from './Storage/Controllers/ControllerHomeMapStorage';
import { IndexesMap } from './Static/IndexesMap';
import { TypesObjects } from './Static/TypesObjects';
import { TypesLocation } from './Static/TypesLocation';
import { ControllerAutocombineStorage } from './Storage/Controllers/ControllerAutocombineStorage';
const { ccclass } = _decorator;

@ccclass('SpawnObjects')
export class SpawnObjects {

    static spawnObjectsFromStorage() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i) == null) continue;
            if (ControllerHomeMapStorage.getObjectParameter(i).index != i) continue;
            let location: string;
            if (ControllerHomeMapStorage.getObjectParameter(i).type == TypesObjects.BARRACKS_MARINE || ControllerHomeMapStorage.getObjectParameter(i).type == TypesObjects.TROOP_MARINE) {
                location = TypesLocation.WATER;
            }
            else {
                location = TypesLocation.EARTH;
            }
            this.spawnObjectsPos(
                ControllerHomeMapStorage.getObjectParameter(i).type,
                location,
                ControllerHomeMapStorage.getObjectParameter(i).level,
                ControllerHomeMapStorage.getObjectParameter(i).index
            );
        }
    }

    static spawnObjectsPos(type: string, location: string, level: number, index: number): ObjectParameters {
        let object = instantiate(PrefabsStorage.instance.getObjectPrefab(type));
        let objectParameter = object.getComponent(ObjectParameters);
        ControllerHomeMapStorage.setParent(object, index);
        objectParameter.type = type;
        objectParameter.location = location;
        objectParameter.level = level;
        objectParameter.index = index;
        ControllerHomeMapStorage.setObjectParameter(objectParameter, type, index);
        if (type == TypesObjects.GOLD_MINE) {
            ControllerAutocombineStorage.alo(objectParameter);
        }
        return objectParameter;
    }

    static spawnObjectsNearby(type: string, location: string, level: number, index: number) {
        let minDistance = 100000;
        let indexeSpawnObject = 0;
        let isSpawnObject = false;
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            let currentDistance: number = Vec3.distance(ControllerHomeMapStorage.getCoordPosition(index), ControllerHomeMapStorage.getCoordPosition(i));
            if (currentDistance < minDistance) {
                let arrayIndexes = ControllerHomeMapStorage.getArrayObject(type);
                let check = false;
                for (let j = 0; j < arrayIndexes.length; j++) {
                    if (ControllerHomeMapStorage.getObjectParameter(i - arrayIndexes[j]) != null) {
                        check = true;
                        break;
                    }
                    try {
                        if (IndexesMap.indexesMap[i - arrayIndexes[j]].typeCoord != location) {
                            check = true;
                            break;
                        }
                        if (
                            type == TypesObjects.TROOP_AIR ||
                            type == TypesObjects.BARRACKS_AIR ||
                            type == TypesObjects.BARRACKS_MARINE ||
                            type == TypesObjects.BARRACKS_OVERLAND ||
                            type == TypesObjects.GOLD_MINE ||
                            type == TypesObjects.BANK ||
                            type == TypesObjects.AUTOCOMBINE ||
                            type == TypesObjects.RADAR ||
                            type == TypesObjects.TREASURES ||
                            type == TypesObjects.MANIPULATOR ||
                            type == TypesObjects.REPAIR_SHOP ||
                            type == TypesObjects.LOBBY_WARS ||
                            type == TypesObjects.WALL ||
                            type == TypesObjects.BATTLE
                        ) {
                            if (IndexesMap.indexesMap[i - arrayIndexes[j]].availableObject2x2 == false) {
                                check = true;
                                break;
                            }
                        }
                        else if (type == TypesObjects.TROOP_MARINE) {
                            if (IndexesMap.indexesMap[i - arrayIndexes[j]].availableObject2x2 == false) {
                                check = true;
                                break;
                            }
                        }
                        else if (type == TypesObjects.COMMAND_POST) {
                            if (IndexesMap.indexesMap[i - arrayIndexes[j]].availableObject3x3 == false) {
                                check = true;
                                break;
                            }
                        }
                        if (!IndexesMap.indexesMap[i - arrayIndexes[j]].availableObject2x2) {
                            check = true;
                            break;
                        }
                    }
                    catch { }
                }
                if (check == false) {
                    minDistance = currentDistance;
                    indexeSpawnObject = i;
                    isSpawnObject = true;
                }
            }
        }
        if (isSpawnObject) {
            return this.spawnObjectsPos(type, location, level, indexeSpawnObject);
        }
        else {
            console.log("error: there is no free space.");
        }
    }

    static spawnObjectsMerge(type: string, location: string, level: number, index: number) {
        this.spawnObjectsPos(type, location, level + 1, index);
    }
}