import { _decorator, Component, director } from 'cc';
const { ccclass } = _decorator;

@ccclass('DontDestroyOnLoadObject')
export class DontDestroyOnLoadObject extends Component {

    protected start(): void {
        director.addPersistRootNode(this.node)
    }
}
