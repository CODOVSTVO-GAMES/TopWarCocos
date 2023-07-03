import { _decorator, Component, Node, Label } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { HomeMapPresenter } from '../../Presenter/HomeMapPresenter';
const { ccclass, property } = _decorator;

@ccclass('GameObjectInterface')
export class GameObjectInterface extends Component {

    @property({ type: Node })
    public titleObject: Node

    @property({ type: Node })
    public levelObject: Node

    @property({ type: Node })
    public quantityObject: Node

    @property({ type: Node })
    public subtitleObject: Node

    @property({ type: Label })
    public titleObjectText: Label

    @property({ type: Label })
    public levelObjectText: Label

    @property({ type: Label })
    public quantityObjectText: Label

    @property({ type: Label })
    public subtitleObjectText: Label

    private objectParameters: ObjectParameters

    public openInterface(objectParameters: ObjectParameters) {
        this.titleObject.active = true
        this.levelObject.active = true
        if (this.quantityObject && this.subtitleObject) {
            this.quantityObject.active = true
            this.subtitleObject.active = true
        }
        this.objectParameters = objectParameters
        this.updateText()
    }

    public closeInterface() {
        this.titleObject.active = false
        this.levelObject.active = false
        if (this.quantityObject && this.subtitleObject) {
            this.quantityObject.active = false
            this.subtitleObject.active = false
        }
    }

    public updateText() {
        let typeObject = this.objectParameters.type
        let levelObject = "Ур. " + this.objectParameters.level.toString()

        this.titleObjectText.string = typeObject
        this.levelObjectText.string = levelObject

        if (this.quantityObject && this.subtitleObject) {

            let quantityObject = (HomeMapPresenter.getQuantityObjectsByTypeAndLevel(this.objectParameters.type, this.objectParameters.level) + 1).toString()
            this.quantityObjectText.string = quantityObject
            this.subtitleObjectText.string = "";
        }
    }
}

