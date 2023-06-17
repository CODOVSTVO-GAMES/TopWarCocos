import { _decorator, Component, Node, Label } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { HomeMapStorageController } from '../../Controllers/StorageControllers/HomeMapStorageController';
const { ccclass, property } = _decorator;

@ccclass('ObjectInterface')
export class ObjectInterface extends Component {

    @property({ type: Node })
    public titleObject: Node;

    @property({ type: Node })
    public levelObject: Node;

    @property({ type: Node })
    public quantityObject: Node;

    @property({ type: Node })
    public subtitleObject: Node;

    @property({ type: Label })
    public titleText: Label;

    @property({ type: Label })
    public levelText: Label;

    @property({ type: Label })
    public quantityText: Label;

    private objectParameters: ObjectParameters;

    public openInterface(objectParameters: ObjectParameters) {
        this.titleObject.active = true;
        this.levelObject.active = true;
        if (this.quantityObject && this.subtitleObject) {
            this.quantityObject.active = true;
            this.subtitleObject.active = true;
        }
        this.objectParameters = objectParameters;
        this.updateText();
    }

    public closeInterface() {
        this.titleObject.active = false;
        this.levelObject.active = false;
        if (this.quantityObject && this.subtitleObject) {
            this.quantityObject.active = false;
            this.subtitleObject.active = false;
        }
    }

    public updateText() {
        this.titleText.string = this.objectParameters.type;
        this.levelText.string = "Ур. " + this.objectParameters.level.toString();
        if (this.quantityObject && this.subtitleObject) {
            this.quantityText.string = (HomeMapStorageController.getQuantityObjectsByTypeAndLevel(this.objectParameters.type, this.objectParameters.level) + 1).toString();
        }
    }
}

