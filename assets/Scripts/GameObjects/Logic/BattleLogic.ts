import { _decorator, Component } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { RedirectionToScene } from '../../Other/RedirectionToScene';
import { SceneNames } from '../../Static/SceneNames';
import { TroopStorageController } from '../../Controllers/TroopStorageController';
import { HomeMapStorageController } from '../../Controllers/HomeMapStorageController';
const { ccclass, property } = _decorator;

@ccclass('BattleLogic')
export class BattleLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public click() {
        TroopStorageController.setTroopStorage();
        RedirectionToScene.redirect(SceneNames.BATTLE);
        // HomeMapStorageController.setObjectParameter(null, this.objectParameters.type, this.objectParameters.index);
        // this.node.destroy();
    }
}
