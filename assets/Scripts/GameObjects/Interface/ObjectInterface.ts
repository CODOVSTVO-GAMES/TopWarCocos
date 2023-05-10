import { _decorator, Component, Node, Label } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('ObjectInterface')
export class ObjectInterface extends Component {

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

    private objectParameters: ObjectParameters;

    public openInterface(objectParameters: ObjectParameters) {
        if (this.messageObject) {
            this.messageObject.active = true;
        }
        this.titleObject.active = true;
        this.levelObject.active = true;
        this.objectParameters = objectParameters;
        this.updateText();
    }

    public closeInterface() {
        if (this.messageObject) {
            this.messageObject.active = false;
        }
        this.titleObject.active = false;
        this.levelObject.active = false;
    }

    public updateText() {
        this.titleText.string = this.objectParameters.type;
        this.levelText.string = "Уровень - " + this.objectParameters.level.toString();
    }
}

