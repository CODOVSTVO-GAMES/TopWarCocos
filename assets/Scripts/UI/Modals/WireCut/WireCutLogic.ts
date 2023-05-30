import { EventMouse, Input, NodeEventType } from 'cc';
import { _decorator, Component, Node } from 'cc';
import { WireCutInterface } from './WireCutInterface';
import { SecondaryInterface } from '../../SecondaryInterface';
import { BuferTasks } from '../../../Radar/BuferTasks';
const { ccclass, property } = _decorator;

@ccclass('WireCutLogic')
export class WireCutLogic extends Component {

    @property({ type: Node })
    public wire: Node;

    @property({ type: Node })
    public zoneBox: Node;

    private triggerPush: boolean;

    onLoad() {

        this.wire.on(NodeEventType.MOUSE_ENTER, this.mouseEnder, this);

        this.zoneBox.on(Input.EventType.TOUCH_START, () => this.triggerPush = true, this);
        this.zoneBox.on(Input.EventType.TOUCH_END, () => this.triggerPush = false, this);
        this.zoneBox.on(Input.EventType.TOUCH_CANCEL, () => this.triggerPush = false, this);
    }

    onDestroy() {
        this.wire.off(NodeEventType.MOUSE_ENTER, this.mouseEnder, this);

        this.zoneBox.off(Input.EventType.TOUCH_START, () => this.triggerPush = true, this);
        this.zoneBox.off(Input.EventType.TOUCH_END, () => this.triggerPush = false, this);
        this.zoneBox.off(Input.EventType.TOUCH_CANCEL, () => this.triggerPush = false, this);
    }

    mouseEnder() {
        if (this.triggerPush) {
            WireCutInterface.instance.renderWireCut();
            setTimeout(() => {
                SecondaryInterface.instance.closeAllModals();
                BuferTasks.instance.awardingPersonal();
            }, 1000);
        }
    }
}