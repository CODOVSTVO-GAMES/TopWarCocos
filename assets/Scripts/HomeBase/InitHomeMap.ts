import { _decorator, Component, Node, Prefab, Sprite, Vec3 } from 'cc';
import { SpawnObjectsOnHomeMap } from '../Logic/SpawnObjectsOnHomeMap';
import { HomeMapPresenter } from '../Presenter/HomeMapPresenter';
import { HomeMapModel } from '../Model/HomeMapModel';
const { ccclass, property } = _decorator;

@ccclass('InitHomeMap')
export class InitHomeMap extends Component {

    @property({ type: Node })
    public parentSelectObject: Node

    @property({ type: Node })
    public backgraund: Node

    @property({ type: Prefab })
    public coord: Prefab

    public onLoad() {
        this.fillParentObject()
        this.fillArrayCoords()
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapFromStorage()
    }

    private fillParentObject() {
        HomeMapModel.instance.parentSelectObject = this.parentSelectObject
    }

    private fillArrayCoords() {
        let name = 0
        let pos = new Vec3(-100, 2000, 0)
        let x = -100
        let y = 2000
        let count = 0
        for (let i = 0; i < HomeMapPresenter.getMapSize(); i++) {
            HomeMapPresenter.setCoord(this.backgraund.getChildByName(name.toString()), i, pos)
            name += 1
            pos.x += 70
            pos.y -= 50
            count += 1
            if (count == 50) {
                x -= 70
                y -= 50
                pos = new Vec3(x, y, 0)
                count = 0
            }
        }
        this.fillArraySpriteCoords()
    }

    private fillArraySpriteCoords() {
        for (let i = 0; i < HomeMapPresenter.getMapSize(); i++) {
            let spriteCoord = HomeMapPresenter.getCoord(i).getComponent(Sprite)

            HomeMapPresenter.setSpriteCoord(spriteCoord, i)
        }
    }
}