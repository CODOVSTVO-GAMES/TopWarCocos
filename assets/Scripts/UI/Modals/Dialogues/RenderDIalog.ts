import { _decorator, Component, Label, Node } from 'cc';
import { SecondaryInterface } from '../../SecondaryInterface';
import { TypesModals } from '../../../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('RenderDIalog')
export class RenderDIalog extends Component {

    public static instance: RenderDIalog

    @property({ type: Label })
    public title: Label

    @property({ type: Label })
    public text: Label

    protected onLoad(): void {
        RenderDIalog.instance = this
    }

    protected start(): void {
        // setTimeout(() => SecondaryInterface.instance.openModal(TypesModals.DIALOG), 3000)
    }


    renderDialog(title: string, text: string) {
        this.setTitle(title)
        this.setText(text)
    }

    private setText(field: string) {
        this.text.string = field
    }

    private setTitle(field: string) {
        this.title.string = field
    }


}

