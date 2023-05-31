import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DialogueStorage')
export class DialogueStorage extends Component {

    public static instance: DialogueStorage

    public dialogues: Array<Array<string>> = [['Юнит св', 'fdfwedwed', 'efef'], ['Персонаж 2', 'wefw']];

    onLoad() {
        DialogueStorage.instance = this
    }
}