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
        for (let i = 0; i < BarraksStorage.instance.arrayBarracks.length; i++) {
            for (let j = 0; j < BarraksStorage.instance.arrayBarracks[i].queueSpawnObject.length; j++) {

                BarraksStorage.instance.arrayBarracks[i].queueSpawnObject[j].timeTroop -= 1

                if (BarraksStorage.instance.arrayBarracks[i].queueSpawnObject[j].timeTroop <= 0) {
                    let typeTroop = BarraksStorage.instance.arrayBarracks[i].queueSpawnObject[j].typeTroop
                    let locationTroop: string
                    let levelTroop = BarraksStorage.instance.arrayBarracks[i].queueSpawnObject[j].levelTroop
                    let indexBarrack = BarraksStorage.instance.arrayBarracks[i].indexBarrack

                    SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeTroop, locationTroop, levelTroop, indexBarrack)
                    BarraksStorage.instance.arrayBarracks[i].queueSpawnObject.splice(j, 1)
                }
            }
        }
        BarracksStorageController.saveStorage()
    }

    public addTroop(typeTroop: string, levelTroop: number, indexBarrack: number) {

        let timeSpawnTroop = ConfigStorageController.getTimeCreationUnitsByTypeAndLevel(typeTroop, levelTroop)

        for (let i = 0; i < BarraksStorage.instance.arrayBarracks.length; i++) {
            if (BarraksStorage.instance.arrayBarracks[i].indexBarrack == indexBarrack) {
                if (BarraksStorage.instance.arrayBarracks[i].queueSpawnObject.length < 5) {

                    BarraksStorage.instance.arrayBarracks[i].queueSpawnObject.push(new QueueBarrack(typeTroop, levelTroop, timeSpawnTroop))
                    return
                }
                else return
            }
        }

        BarraksStorage.instance.arrayBarracks.push(new Barrack(indexBarrack))

        if (BarraksStorage.instance.arrayBarracks[BarraksStorage.instance.arrayBarracks.length - 1].queueSpawnObject == null) {
            BarraksStorage.instance.arrayBarracks[BarraksStorage.instance.arrayBarracks.length - 1].queueSpawnObject = new Array
        }

        BarraksStorage.instance.arrayBarracks[BarraksStorage.instance.arrayBarracks.length - 1].queueSpawnObject.push(new QueueBarrack(typeTroop, levelTroop, timeSpawnTroop))
        BarracksStorageController.saveStorage()
    }

    public updateIndexBarrack(oldIndex: number, newIndex: number) {
        for (let i = 0; i < BarraksStorage.instance.arrayBarracks.length; i++) {
            if (BarraksStorage.instance.arrayBarracks[i].indexBarrack == oldIndex) {
                BarraksStorage.instance.arrayBarracks[i].indexBarrack = newIndex
                break
            }
        }
    }

    public deleteBarrack(indexBarrack: number) {
        for (let i = 0; i < BarraksStorage.instance.arrayBarracks.length; i++) {
            if (BarraksStorage.instance.arrayBarracks[i].indexBarrack == indexBarrack) {
                BarraksStorage.instance.arrayBarracks.slice(i, 1)
            }
        }
    }
}