import { _decorator, Component, Node } from 'cc';
import { MapController } from '../../BaseMap/MapController';
import { ObjectParameters } from '../../ObjectParameters';
import { RedirectionToScene } from '../../Other/RedirectionToScene';
import { SceneNames } from '../../Static/SceneNames';
const { ccclass, property } = _decorator;

@ccclass('BattleLogic')
export class BattleLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public click() {
        RedirectionToScene.redirect(SceneNames.BATTLE);
        MapController.setObjectParameter(null, this.objectParameters.type, this.objectParameters.index);
        this.node.destroy();
    }
}

