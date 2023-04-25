import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Cell')
export class Cell extends Component {

    @property({ type: Node })
    public cellFree: Node;

    @property({ type: Node })
    public cellSelected: Node;
}

