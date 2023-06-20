import { _decorator, Component, Prefab } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('PrefabsStorage')
export class PrefabsStorage extends Component {

    public static instance: PrefabsStorage

    @property({ type: Prefab })
    private troopAir: Prefab

    @property({ type: Prefab })
    private troopMarine: Prefab

    @property({ type: Prefab })
    private troopOverland: Prefab

    @property({ type: Prefab })
    private barracks: Prefab

    @property({ type: Prefab })
    private commandPost: Prefab

    @property({ type: Prefab })
    private goldMine: Prefab

    @property({ type: Prefab })
    private bank: Prefab

    @property({ type: Prefab })
    private autocombine: Prefab

    @property({ type: Prefab })
    private radar: Prefab

    @property({ type: Prefab })
    private treasures: Prefab

    @property({ type: Prefab })
    private manipulator: Prefab

    @property({ type: Prefab })
    private repairShop: Prefab

    @property({ type: Prefab })
    private lobbyWar: Prefab

    @property({ type: Prefab })
    private expedition: Prefab

    @property({ type: Prefab })
    private wall: Prefab

    @property({ type: Prefab })
    private battle: Prefab

    // =================================================================

    @property({ type: Prefab })
    private itemBackpack: Prefab


    onLoad() {
        PrefabsStorage.instance = this;
    }

    getObjectPrefab(type: string): Prefab {
        if (type == TypesObjects.TROOP_AIR) return this.troopAir
        else if (type == TypesObjects.TROOP_MARINE) return this.troopMarine
        else if (type == TypesObjects.TROOP_OVERLAND) return this.troopOverland
        else if (type == TypesObjects.BARRACKS_AIR) return this.barracks
        else if (type == TypesObjects.BARRACKS_MARINE) return this.barracks
        else if (type == TypesObjects.BARRACKS_OVERLAND) return this.barracks
        else if (type == TypesObjects.COMMAND_POST) return this.commandPost
        else if (type == TypesObjects.GOLD_MINE) return this.goldMine
        else if (type == TypesObjects.BANK) return this.bank
        else if (type == TypesObjects.AUTOCOMBINE) return this.autocombine
        else if (type == TypesObjects.RADAR) return this.radar
        else if (type == TypesObjects.TREASURES) return this.treasures
        else if (type == TypesObjects.WHOLE_MANIPULATOR) return this.manipulator
        else if (type == TypesObjects.PADDED_MANIPULATOR) return this.manipulator
        else if (type == TypesObjects.REPAIR_SHOP) return this.repairShop
        else if (type == TypesObjects.LOBBY_WARS) return this.lobbyWar
        else if (type == TypesObjects.EXPEDITION) return this.expedition
        else if (type == TypesObjects.WALL) return this.wall
        else if (type == TypesObjects.BATTLE) return this.battle
        else return null
    }

    getItemBackpack(): Prefab {
        return this.itemBackpack
    }
}

