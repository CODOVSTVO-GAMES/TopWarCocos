import { _decorator, Camera, Canvas, Component, Input, instantiate, Node, Touch, UI, UITransform, Vec2, Vec3 } from 'cc';
import { ZoomCamera } from './Camera/ZoomCamera';
import { ControllerGlobalMap } from './Storage/Controllers/ControllerGlobalMap';
import { Building } from './Storage/GlobalMapStorage';
import { MovingCamera } from './Camera/MovingCamera';
import { RedirectionToScene } from './Other/RedirectionToScene';
const { ccclass, property } = _decorator;

@ccclass('GlobalMapTouch')
export class GlobalMapTouch extends Component {

    /**
     * карта 512 х 512 клеток
     * карта 8 х 8 чанков
     * чанк 64 х 64 клетки
     * 
     * Логика работы карты:
     * При старте игры запрашивается чанк игрока
     * При входе на карту центр камеры игрока равен координатам его базы
     * При входе на карту спавнятся все обьекты в радиусе 20 клеток
     * 
     * При перемещении камеры новые обьекты доспавниваются в радиусе 20 клеток
     * 
     */

    @property({ type: Node })
    public touchObject: Node;

    @property({ type: Node })
    public image: Node;

    start() {
        for (let l = 0; l < ControllerGlobalMap.getBuildings().length; l++) {
            this.spawnObject(ControllerGlobalMap.getBuildings()[l])
        }
        this.setStartCameraPosition()
    }

    private spawnObject(building: Building) {
        let coordinates = ControllerGlobalMap.getCoordinatesBuilding(building)

        let node = instantiate(this.image)
        if (building.type == 'base') {
            node.setScale(new Vec3(2, 2))
        }
        node.setParent(this.touchObject)
        node.setPosition(new Vec3(coordinates.x, coordinates.y, 0))
        console.log('заспавнен обьект в координатах: ' + coordinates.x + '   ' + coordinates.y)
    }

    private setStartCameraPosition() {
        MovingCamera.instance.movie(ControllerGlobalMap.getBaseCoordinates())
        RedirectionToScene.getSceneName()
    }
}