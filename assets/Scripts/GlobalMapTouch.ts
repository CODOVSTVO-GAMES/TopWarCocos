import { _decorator, Camera, Canvas, Component, Input, instantiate, Node, Touch, UI, UITransform, Vec2, Vec3 } from 'cc';
import { ZoomCamera } from './Camera/ZoomCamera';
const { ccclass, property } = _decorator;

@ccclass('GlobalMapTouch')
export class GlobalMapTouch extends Component {

    private screenSize: Vec3;

    //карта 512 х 512 клеток
    //карта 8 х 8 чанков
    //чанк 64 х 64 клетки

    private objFromServer = [{ "id": "112", "zoneId": "testzone", "chunk": "2,0", "coords": "49,19", "type": "base", "accountId": "egfsdsdffdfddffdssedddfffddrmed78dddster-1" }, { "id": "1132", "zoneId": "testzone", "chunk": "2,0", "coords": "49,22", "type": "base", "accountId": "egfsdsdffdfddffdssedddfffddrmed78dddster-1" }]

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
        // this.touchObject.on(Input.EventType.TOUCH_START, this.touchStart, this);
        // this.touchObject.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        // this.touchObject.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        this.screenSize = new Vec3(screen.height, screen.width, 0);



        for (let l = 0; l < this.objFromServer.length; l++) {
            // console.log(this.objFromServer[l])
            let objCoords = this.parceCoord(this.objFromServer[l]['coords'])
            let objChunk = this.parceCoord(this.objFromServer[l]['chunk'])
            let x = this.getZeroCoordChunk(objChunk).x + this.getCoordBuilding(objCoords).x
            let y = this.getZeroCoordChunk(objChunk).y + this.getCoordBuilding(objCoords).y

            let node = instantiate(this.image)
            node.setParent(this.touchObject)
            node.setPosition(new Vec3(x, y, 0))
            console.log('заспавнен обьект в координатах: ' + x + '   ' + y)
        }
    }

    private parceCoord(str: string): Vec2 {
        let arr = str.split(',', 2)
        return new Vec2(parseInt(arr[0]), parseInt(arr[1]))
    }

    private getZeroCoordChunk(chunkCoord: Vec2): Vec2 {
        let x = chunkCoord.x * this.widthCell * 64
        let y = chunkCoord.y * this.lengthCell * 64
        return new Vec2(x, y)
    }

    private getCoordBuilding(buildingCoord: Vec2): Vec2 {
        let x = buildingCoord.x * this.widthCell
        let y = buildingCoord.y * this.lengthCell
        return new Vec2(x, y)
    }

    touchStart(e: Touch) {
        let pos = e.getUILocation()
        let cellCoords = this.getCoordsByTouch(pos.x, pos.y)
        let objCoords = new Vec2(cellCoords.x * this.widthCell, cellCoords.y * this.lengthCell)

        if (this.getObjByCoords(cellCoords) != null) {
            console.log('обьект в этой клетке существует')
            this.activeBuilding = this.getObjByCoords(cellCoords)
            return
        }

        let node = instantiate(this.image)
        node.setParent(this.touchObject)
        node.setPosition(new Vec3(objCoords.x, objCoords.y, 0))

        const building = new Building(cellCoords, node)
        this.buildings.push(building)
        this.activeBuilding = building
    }

    touchMove(e: Touch) {
        let x = this.activeBuilding.node.position.x + e.getUIDelta().x
        let y = this.activeBuilding.node.position.y + e.getUIDelta().y
        this.activeBuilding.node.setPosition(x, y, this.activeBuilding.node.position.z);
    }

    touchEnd() {
        let cellCoords = new Vec2(this.getXcoord(this.activeBuilding.node.position.x), this.getYcoord(this.activeBuilding.node.position.y))

        if (this.getObjByCoords(cellCoords) != null) {
            console.log('обьект в этой клетке существует. верну в старую')
            this.activeBuilding.node.setPosition(new Vec3(this.activeBuilding.coords.x * this.widthCell, this.activeBuilding.coords.y * this.lengthCell, 0))
        } else {
            this.activeBuilding.node.setPosition(new Vec3(cellCoords.x * this.widthCell, cellCoords.y * this.lengthCell, 0))
            this.setObjNewIndexByIndex(this.activeBuilding.coords, cellCoords)
        }

        this.activeBuilding = null
    }

    getCoordsByTouch(posX: number, posY: number): Vec2 {
        posX = Math.round(posX - (this.screenSize.x / 2))
        posY = Math.round(posY - (this.screenSize.y / 2))
        return new Vec2(this.getXcoord(posX), this.getYcoord(posY))
    }

    getObjByCoords(coords: Vec2): Building {
        for (let l = 0; l < this.buildings.length; l++) {
            if (this.buildings[l].coords.x == coords.x && this.buildings[l].coords.y == coords.y) {
                return this.buildings[l]
            }
        }
        return null
    }

    private getXcoord(num: number): number {
        let x = num
        let signX = this.getSign(x)
        x = Math.abs(x)
        let ostX = x % this.widthCell
        x = x - ostX
        if (ostX >= 70) {
            x = x + this.widthCell
        }
        return x / this.widthCell * signX
    }

    private getYcoord(num: number): number {
        let y = num
        let signY = this.getSign(y)
        y = Math.abs(y)
        let ostY = y % this.lengthCell
        y = y - ostY
        if (ostY >= 50) {
            y = y + this.lengthCell
        }

        return y / this.lengthCell * signY
    }

    getSign(num: number): number {
        if (num >= 0) {
            return 1
        } else return -1
    }

    setObjNewIndexByIndex(oldCoords: Vec2, newCoords: Vec2) {
        for (let l = 0; l < this.buildings.length; l++) {
            if (this.buildings[l].coords == oldCoords) {
                this.buildings[l].coords = newCoords
            }
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