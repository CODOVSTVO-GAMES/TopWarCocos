import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ArrowGameObject')
export class ArrowGameObject extends Component {

    @property({ type: Node })
    public arrows: Node[] = []

    public activeArrow() {
        for (let i = 0; i < this.arrows.length; i++) {
            this.arrows[i].active = true
        }
    }

    public deactiveArrow() {
        for (let i = 0; i < this.arrows.length; i++) {
            this.arrows[i].active = false
        }
    }
}