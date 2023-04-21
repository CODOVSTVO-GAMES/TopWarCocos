import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TouchMessage')
export class TouchMessage extends Component {

    onClickMessage() {
        console.log("onClickMessage");
    }
}

