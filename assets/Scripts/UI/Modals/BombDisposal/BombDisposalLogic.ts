import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BombDisposalLogic')
export class BombDisposalLogic extends Component {



    pushButton(event, customEventData) {
        console.log(customEventData);
    }
}