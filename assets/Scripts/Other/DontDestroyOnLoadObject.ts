import { _decorator, Component, Node, director } from 'cc';
const { ccclass } = _decorator;

@ccclass('DontDestroyOnLoadObject')
export class DontDestroyOnLoadObject extends Component {

    public start() {
        director.addPersistRootNode(this.node)
    }
}
