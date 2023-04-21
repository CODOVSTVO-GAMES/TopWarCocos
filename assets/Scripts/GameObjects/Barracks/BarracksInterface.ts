import { _decorator, Component, Label, Node } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('BarracksInterface')
export class BarracksInterface extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    @property({ type: Node })
    public messageObject: Node;

    @property({ type: Node })
    public titleObject: Node;

    @property({ type: Node })
    public levelObject: Node;

    @property({ type: Label })
    public titleText: Label;

    @property({ type: Label })
    public levelText: Label;

    public openInterface() {
        this.messageObject.active = true;
        this.titleObject.active = true;
        this.levelObject.active = true;
        this.updateText();
    }

    public closeInterface() {
        this.messageObject.active = false;
        this.titleObject.active = false;
        this.levelObject.active = false;
    }

    public updateText() {
        this.titleText.string = this.objectParameters.type;
        this.levelText.string = "lvl. " + this.objectParameters.level.toString();
    }
}

