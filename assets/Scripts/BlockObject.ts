import { _decorator, Component, Node, Sprite, CCString, CCFloat, CCBoolean } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BlockObject')
export class BlockObject extends Component {

    @property({ type: CCString })
    public type: string;

    @property({ type: CCFloat })
    public level: number;

    @property({ type: CCFloat })
    public index: number;
}

