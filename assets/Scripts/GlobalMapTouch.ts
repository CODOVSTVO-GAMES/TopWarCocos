import { _decorator, Camera, Canvas, Component, Input, instantiate, Node, Touch, UI, UITransform, Vec2, Vec3 } from 'cc';
import { ZoomCamera } from './Camera/ZoomCamera';
import { ControllerGlobalMap } from './Storage/Controllers/ControllerGlobalMap';
const { ccclass, property } = _decorator;

@ccclass('GlobalMapTouch')
export class GlobalMapTouch extends Component {

    /**
     * карта 512 х 512 клеток
     * арта 8 х 8 чанков
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

    private screenSize: Vec3;
    private widthCell = 100
    private lengthCell = 100

    private buildings: Array<Building> = []
    private activeBuilding: Building = null

    @property({ type: Node })
    public touchObject: Node;

    @property({ type: Node })
    public image: Node;

    @property({ type: Camera })
    public cam: Camera;

    start() {
        this.screenSize = new Vec3(screen.height, screen.width, 0);

        for (let l = 0; l < ControllerGlobalMap.getBuildings().length; l++) {

            let x = ControllerGlobalMap.getBuildings()[l].x * ControllerGlobalMap.widthCell
            let y = ControllerGlobalMap.getBuildings()[l].y * ControllerGlobalMap.lengthCell

            let node = instantiate(this.image)
            node.setParent(this.touchObject)
            node.setPosition(new Vec3(x, y, 0))
            console.log('заспавнен обьект в координатах: ' + x + '   ' + y)
        }
    }
}

class Building {
    coords: Vec2
    node: Node

    constructor(coords: Vec2, node: Node) {
        this.coords = coords
        this.node = node
    }
}