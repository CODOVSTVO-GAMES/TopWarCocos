import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('DialogueStorage')
export class DialogueStorage extends Component {

    public static instance: DialogueStorage

    public dialogues: Array<Array<string>> = [['Юнит св', 'fdfwedwed', 'efef'], ['Персонаж 2', 'wefw']]

    public onLoad() {
        DialogueStorage.instance = this
    }
}