import { _decorator, Component } from 'cc';
import { BarraksStorage } from '../Storage/BarraksStorage';
import { Barrack } from '../Structures/Barrack';
import { ConfigStorageController } from '../Controllers/StorageControllers/ConfigStorageController';
import { BarracksStorageController } from '../Controllers/StorageControllers/BarracksStorageController';
import { SpawnObjectsOnHomeMap } from './SpawnObjectsOnHomeMap';
const { ccclass, property } = _decorator;

export class BarracksLogic {

    // @ccclass('BarracksLogic')
    // export class BarracksLogic extends Component {

    // public static instance: BarracksLogic

    // public onLoad() {
    //     BarracksLogic.instance = this
    // }

    public static timer() {
        for (let i = 0; i < BarraksStorage.instance.storage.length; i++) {
            for (let j = 0; j < BarraksStorage.instance.storage[i].queueSpawnObject.length; j++) {

                let json = JSON.parse(JSON.stringify(BarraksStorage.instance.storage[i].queueSpawnObject[j]))

                json.timeObject -= 1

                if (json.timeObject <= 0) {
                    let typeTroop = json.typeObject
                    let locationTroop: string
                    let levelTroop = json.levelTroop
                    let indexBarrack = BarraksStorage.instance.storage[i].indexBarrack

                    SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeTroop, locationTroop, levelTroop, indexBarrack)
                    BarraksStorage.instance.storage[i].queueSpawnObject.splice(j, 1)
                }
                else {
                    BarraksStorage.instance.storage[i].queueSpawnObject[j] = json
                }
            }
        }
    }

    public static addTroops(typeTroop: string, levelTroop: number, indexBarrack: number) {

        let timeSpawnTroop = ConfigStorageController.getTimeCreationUnitsByTypeAndLevel(typeTroop, levelTroop)

        for (let i = 0; i < BarraksStorage.instance.storage.length; i++) {
            if (BarraksStorage.instance.storage[i].indexBarrack == indexBarrack) {
                if (BarraksStorage.instance.storage[i].queueSpawnObject.length < 5) {

                    BarraksStorage.instance.storage[i].queueSpawnObject.push({
                        typeObject: typeTroop,
                        levelObject: levelTroop,
                        timeObject: timeSpawnTroop
                    })
                    this.timer()
                    return
                }
                else return
            }
        }

        BarraksStorage.instance.storage.push(new Barrack(indexBarrack))

        if (BarraksStorage.instance.storage[BarraksStorage.instance.storage.length - 1].queueSpawnObject == null) {
            BarraksStorage.instance.storage[BarraksStorage.instance.storage.length - 1].queueSpawnObject = new Array<Object>
        }

        BarraksStorage.instance.storage[BarraksStorage.instance.storage.length - 1].queueSpawnObject.push({
            typeObject: typeTroop,
            levelObject: levelTroop,
            timeObject: timeSpawnTroop
        })
        BarracksStorageController.saveStorage()
        console.log(BarraksStorage.instance.storage)
        this.timer()
    }

    public static updateIndexBarrack(oldIndex: number, newIndex: number) {
        for (let i = 0; i < BarraksStorage.instance.storage.length; i++) {
            if (BarraksStorage.instance.storage[i].indexBarrack == oldIndex) {
                BarraksStorage.instance.storage[i].indexBarrack = newIndex
                break
            }
        }
    }
}