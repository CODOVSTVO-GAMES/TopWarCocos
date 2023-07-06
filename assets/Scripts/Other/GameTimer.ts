import { _decorator, Component } from 'cc';
import { AutocombinePresenter } from '../Presenter/AutocombinePresenter';
import { BarracksPresenter } from '../Presenter/BarracksPresenter';
import { RadarPresenter } from '../Presenter/RadarPresenter';
const { ccclass } = _decorator;

@ccclass('GameTimer')
export class GameTimer extends Component {

    protected start(): void {
        this.schedule(this.timer, 1)
    }

    private timer() {
        AutocombinePresenter.TEST()
        BarracksPresenter.timer()
        RadarPresenter.taskProcessing()
    }
}
