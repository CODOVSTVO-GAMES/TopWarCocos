import { _decorator, Component, Input, Touch, Node, Vec3, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MouseClickVisualization')
export class MouseClickVisualization extends Component {

    public static instance: MouseClickVisualization;

    @property({ type: Node })
    public click: Node;

    @property({ type: Node })
    public canvas: Node;

    @property({ type: Node })
    public containerVisualization: Node;

    private screenSize: Vec3;
    private animScale: number;
    private animator: any;
    private invoke: any;

    onLoad() {
        MouseClickVisualization.instance = this;

        this.canvas.on(Input.EventType.MOUSE_DOWN, this.touchStart, this);
        this.screenSize = new Vec3(screen.height, screen.width, 0);
    }

    onDestroy() {
        this.canvas.off(Input.EventType.MOUSE_DOWN, this.touchStart, this);
    }

    resizeSecondaryInterface(raito = 1) {
        this.containerVisualization.setScale(v3(raito, raito, this.containerVisualization.scale.z));
    }

    touchStart(e: Touch) {
        clearTimeout(this.invoke);
        clearInterval(this.animator);
        this.click.active = false;
        let pos = e.getUILocation();
        this.click.setPosition(new Vec3(pos.x - (this.screenSize.x / 2), pos.y - (this.screenSize.y / 2), 0));
        this.click.active = true;
        this.animScale = 0.5;
        this.click.setScale(this.animScale, this.animScale);
        this.animator = setInterval(this.animation, 17);
        this.invoke = setTimeout(() => {
            try {
                this.click.active = false
            } catch (e) {
                console.log('костыль. ООбьект анимации не найден. Дописать метод остановки SEtTimeout при редиректе сцен     ' + e)
            }

        }, 200);

    }

    startAnimation() {
        this.animScale = 0.5;
        this.click.setScale(this.animScale, this.animScale);
        this.animator = setInterval(this.animation, 17);
    }

    animation() {
        let thiiis = MouseClickVisualization.instance;
        thiiis.animScale += 0.05;
        thiiis.click.setScale(thiiis.animScale, thiiis.animScale);
        if (thiiis.animScale >= 1) {
            clearInterval(thiiis.animator);
        }
    }
}