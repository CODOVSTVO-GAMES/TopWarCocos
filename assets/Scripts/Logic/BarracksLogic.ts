import { _decorator, Component } from 'cc';
import { Barrack } from '../Structures/Barrack';
import { ConfigPresenter } from '../Presenter/ConfigPresenter';
import { SpawnObjectsOnHomeMap } from '../Presenter/SpawnObjectsOnHomeMap';
import { QueueBarrack } from '../Structures/QueueBarrack';
import { BarrackModel } from '../Model/BarrackModel';
const { ccclass, property } = _decorator;

@ccclass('BarracksLogic')
export class BarracksLogic extends Component {

    public static instance: BarracksLogic

    public onLoad() {
        BarracksLogic.instance = this
        this.schedule(this.timer, 1)
    }

    public timer() {
        for (let i = 0; i < BarrackModel.instance.arrayBarracks.length; i++) {
            for (let j = 0; j < BarrackModel.instance.arrayBarracks[i].queueSpawnObject.length; j++) {

                BarrackModel.instance.arrayBarracks[i].queueSpawnObject[j].timeTroop -= 1

                if (BarrackModel.instance.arrayBarracks[i].queueSpawnObject[j].timeTroop <= 0) {
                    let typeTroop = BarrackModel.instance.arrayBarracks[i].queueSpawnObject[j].typeTroop
                    let locationTroop: string
                    let levelTroop = BarrackModel.instance.arrayBarracks[i].queueSpawnObject[j].levelTroop
                    let indexBarrack = BarrackModel.instance.arrayBarracks[i].indexBarrack

                    SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeTroop, locationTroop, levelTroop, indexBarrack)
                    BarrackModel.instance.arrayBarracks[i].queueSpawnObject.splice(j, 1)
                }
            }
        }
    }

    public addTroop(typeTroop: string, levelTroop: number, indexBarrack: number) {

        let timeSpawnTroop = ConfigPresenter.getTimeCreationUnitsByTypeAndLevel(typeTroop, levelTroop)

        for (let i = 0; i < BarrackModel.instance.arrayBarracks.length; i++) {
            if (BarrackModel.instance.arrayBarracks[i].indexBarrack == indexBarrack) {
                if (BarrackModel.instance.arrayBarracks[i].queueSpawnObject.length < 5) {

                    BarrackModel.instance.arrayBarracks[i].queueSpawnObject.push(new QueueBarrack(typeTroop, levelTroop, timeSpawnTroop))
                    return
                }
                else return
            }
        }

        BarrackModel.instance.arrayBarracks.push(new Barrack(indexBarrack))

        if (BarrackModel.instance.arrayBarracks[BarrackModel.instance.arrayBarracks.length - 1].queueSpawnObject == null) {
            BarrackModel.instance.arrayBarracks[BarrackModel.instance.arrayBarracks.length - 1].queueSpawnObject = new Array
        }

        BarrackModel.instance.arrayBarracks[BarrackModel.instance.arrayBarracks.length - 1].queueSpawnObject.push(new QueueBarrack(typeTroop, levelTroop, timeSpawnTroop))
    }

    public updateIndexBarrack(oldIndex: number, newIndex: number) {
        for (let i = 0; i < BarrackModel.instance.arrayBarracks.length; i++) {
            if (BarrackModel.instance.arrayBarracks[i].indexBarrack == oldIndex) {
                BarrackModel.instance.arrayBarracks[i].indexBarrack = newIndex
                break
            }
        }
    }

    public deleteBarrack(indexBarrack: number) {
        for (let i = 0; i < BarrackModel.instance.arrayBarracks.length; i++) {
            if (BarrackModel.instance.arrayBarracks[i].indexBarrack == indexBarrack) {
                BarrackModel.instance.arrayBarracks.slice(i, 1)
            }
        }
    }
}