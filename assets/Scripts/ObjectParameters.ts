import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ObjectParameters')
export class ObjectParameters extends Component {

    @property({ type: String })
    public type: string;

    @property({ type: Number })
    public index: number;

    @property({ type: Number })
    public level: number;
}

