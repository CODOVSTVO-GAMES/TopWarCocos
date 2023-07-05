import { _decorator, Component, Node, Label } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
import { HomeMapPresenter } from '../Presenter/HomeMapPresenter';
import { GameObjectPresenter } from '../Presenter/GameObjectPresenter';
const { ccclass, property } = _decorator;

@ccclass('GameObjectView')
export class GameObjectView extends Component {

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

    public eventClickOnMessage() {
        GameObjectPresenter.processingClickOnMessage(this.objectParameters)
    }

    public openInterface(objParam: ObjectParameters) {
        if (this.objectParameters == null) {
            this.objectParameters = objParam
        }
        this.titleObject.active = true
        this.levelObject.active = true
        if (this.quantityObject && this.subtitleObject) {
            this.quantityObject.active = true
            this.subtitleObject.active = true
        }
        this.renderTitleObject()
        this.renderLevelObject()
        if (this.quantityObject && this.subtitleObject) {
            this.renderQuantityObject()
            this.renderSubtitleObject()
        }
    }

    public closeInterface() {
        this.titleObject.active = false
        this.levelObject.active = false
        if (this.quantityObject && this.subtitleObject) {
            this.quantityObject.active = false
            this.subtitleObject.active = false
        }
    }

    private renderTitleObject() {
        let titleObjectText = this.objectParameters.type

        this.titleObjectText.string = titleObjectText
    }

    private renderLevelObject() {
        let levelObjectText = "Ур. " + this.objectParameters.level.toString()

        this.levelObjectText.string = levelObjectText
    }

    private renderQuantityObject() {
        let quantityObject = (HomeMapPresenter.getQuantityObjectsByTypeAndLevel(this.objectParameters.type, this.objectParameters.level) + 1).toString()

        this.quantityObjectText.string = quantityObject
    }

    private renderSubtitleObject() {
        let subtitleObject = ""

        this.subtitleObjectText.string = subtitleObject
    }
}

