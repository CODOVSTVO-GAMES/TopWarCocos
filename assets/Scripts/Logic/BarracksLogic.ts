import { _decorator, Component } from 'cc';
import { BarraksStorage } from '../Storage/BarraksStorage';
import { Barrack } from '../Structures/Barrack';
import { ConfigStorageController } from '../Controllers/StorageControllers/ConfigStorageController';
import { BarracksStorageController } from '../Controllers/StorageControllers/BarracksStorageController';
import { SpawnObjectsOnHomeMap } from './SpawnObjectsOnHomeMap';
import { QueueBarrack } from '../Structures/QueueBarrack';
const { ccclass, property } = _decorator;

@ccclass('BarracksLogic')
export class BarracksLogic extends Component {

    public static instance: BarracksLogic

    public onLoad() {
        BarracksLogic.instance = this
        this.schedule(this.timer, 1)
    }

    public timer() {
        for (let i = 0; i < BarraksStorage.instance.storage.length; i++) {
            for (let j = 0; j < BarraksStorage.instance.storage[i].queueSpawnObject.length; j++) {

                BarraksStorage.instance.storage[i].queueSpawnObject[j].timeTroop -= 1

                if (BarraksStorage.instance.storage[i].queueSpawnObject[j].timeTroop <= 0) {
                    let typeTroop = BarraksStorage.instance.storage[i].queueSpawnObject[j].typeTroop
                    let locationTroop: string
                    let levelTroop = BarraksStorage.instance.storage[i].queueSpawnObject[j].levelTroop
                    let indexBarrack = BarraksStorage.instance.storage[i].indexBarrack

                    SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeTroop, locationTroop, levelTroop, indexBarrack)
                    BarraksStorage.instance.storage[i].queueSpawnObject.splice(j, 1)
                }
            }
        }
        BarracksStorageController.saveStorage()
    }

    public addTroops(typeTroop: string, levelTroop: number, indexBarrack: number) {

        let timeSpawnTroop = ConfigStorageController.getTimeCreationUnitsByTypeAndLevel(typeTroop, levelTroop)

        for (let i = 0; i < BarraksStorage.instance.storage.length; i++) {
            if (BarraksStorage.instance.storage[i].indexBarrack == indexBarrack) {
                if (BarraksStorage.instance.storage[i].queueSpawnObject.length < 5) {

                    BarraksStorage.instance.storage[i].queueSpawnObject.push(new QueueBarrack(typeTroop, levelTroop, timeSpawnTroop))
                    return
                }
                else return
            }
        }

        BarraksStorage.instance.storage.push(new Barrack(indexBarrack))

        if (BarraksStorage.instance.storage[BarraksStorage.instance.storage.length - 1].queueSpawnObject == null) {
            BarraksStorage.instance.storage[BarraksStorage.instance.storage.length - 1].queueSpawnObject = new Array
        }

        BarraksStorage.instance.storage[BarraksStorage.instance.storage.length - 1].queueSpawnObject.push(new QueueBarrack(typeTroop, levelTroop, timeSpawnTroop))
        BarracksStorageController.saveStorage()
    }

    public updateIndexBarrack(oldIndex: number, newIndex: number) {
        for (let i = 0; i < BarraksStorage.instance.storage.length; i++) {
            if (BarraksStorage.instance.storage[i].indexBarrack == oldIndex) {
                BarraksStorage.instance.storage[i].indexBarrack = newIndex
                break
            }
        }
    }

    public deleteBarrack(indexBarrack: number) {
        for (let i = 0; i < BarraksStorage.instance.storage.length; i++) {
            if (BarraksStorage.instance.storage[i].indexBarrack == indexBarrack) {
                BarraksStorage.instance.storage.slice(i, 1)
            }
        }
    }
}