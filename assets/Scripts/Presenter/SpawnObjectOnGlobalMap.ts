import { _decorator, Component, instantiate, Node, Prefab, Vec3 } from 'cc';
import { BuildingGlobalMapParameters } from '../BuildingGlobalMapParameters';
import { GlobalMapPresenter } from './GlobalMapPresenter';
const { ccclass, property } = _decorator;

@ccclass('SpawnObjectsOnGlobalMap')
export class SpawnObjectsOnGlobalMap extends Component {

    public static instance: SpawnObjectsOnGlobalMap

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

    @property({ type: Prefab })
    public basePrefab: Prefab;

    @property({ type: Prefab })
    public enemyPrefab: Prefab;


    protected onLoad(): void {
        SpawnObjectsOnGlobalMap.instance = this
        this.massSpawn()
    }

    protected onDisable(): void {
        this.massDespawn()
    }

    public massSpawn() {
        for (let l = 0; l < GlobalMapPresenter.getBuildings().length; l++) {
            if (GlobalMapPresenter.getBuildings()[l].node == null) {
                this.spawnObject(l)
            }
        }
    }

    public massDespawn() {
        for (let l = 0; l < GlobalMapPresenter.getBuildings().length; l++) {
            GlobalMapPresenter.getBuildings()[l].node = null
        }
    }

    private spawnObject(index: number) {
        let building = GlobalMapPresenter.getBuildings()[index]
        let coordinates = GlobalMapPresenter.getCoordinatesBuilding(building)

        if (building.type == 'base') {
            const node = instantiate(this.basePrefab)
            let buildingParabeters = node.getComponent(BuildingGlobalMapParameters)
            buildingParabeters.setAccountId(building.accountId)
            buildingParabeters.setLevel('Уровень: ' + building.level)
            buildingParabeters.setType(building.type)
            node.setScale(new Vec3(1.2, 1.2))
            node.setParent(this.touchObject)
            node.setPosition(new Vec3(coordinates.x, coordinates.y, 0))
            building.node = node
        }
        else if (building.type == 'taskPersonal' || building.type == 'taskSalvation') {
            const node = instantiate(this.enemyPrefab)
            let buildingParabeters = node.getComponent(BuildingGlobalMapParameters)
            buildingParabeters.setLevel('Уровень: ' + building.level)
            buildingParabeters.setType(building.type)
            node.setScale(new Vec3(1, 1))
            node.setParent(this.touchObject)
            node.setPosition(new Vec3(coordinates.x, coordinates.y, 0))
            building.node = node
        }
        GlobalMapPresenter.getBuildings()[index] = building
    }
}