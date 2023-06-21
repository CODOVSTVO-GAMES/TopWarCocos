import { _decorator, Component, Node } from 'cc';
import { ObjectParameters } from './ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('ArrowGameObject')
export class ArrowGameObject extends Component {

    @property({ type: Node })
    public arrows: Node[] = []

    activeArrow() {
        for (let i = 0; i < this.arrows.length; i++) {
            this.arrows[i].active = true
        }
    }

    deactiveArrow() {
        console.log("ERORR. TYPE: " + this.getComponent(ObjectParameters).type + " INDEX: " + this.getComponent(ObjectParameters).index)
        for (let i = 0; i < this.arrows.length; i++) {
            this.arrows[i].active = false
        }
    }
}