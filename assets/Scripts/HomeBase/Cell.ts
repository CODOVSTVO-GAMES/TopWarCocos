import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Cell')
export class Cell extends Component {

    @property({ type: Node })
    public cellBackground: Node;
}

