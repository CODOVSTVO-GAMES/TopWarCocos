import { _decorator, Component } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { RedirectionToScene } from '../../Other/RedirectionToScene';
import { SceneNames } from '../../Static/SceneNames';
import { ControllerTroopStorage } from '../../Storage/Controllers/ControllerTroopStorage';
import { ControllerHomeMapStorage } from '../../Storage/Controllers/ControllerHomeMapStorage';
const { ccclass, property } = _decorator;

@ccclass('BattleLogic')
export class BattleLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public click() {
        ControllerTroopStorage.setTroopStorage();
        RedirectionToScene.redirect(SceneNames.BATTLE);
        ControllerHomeMapStorage.setObjectParameter(null, this.objectParameters.type, this.objectParameters.index);
        this.node.destroy();
    }
}
