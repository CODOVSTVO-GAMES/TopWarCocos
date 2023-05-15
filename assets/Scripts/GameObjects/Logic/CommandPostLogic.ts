import { _decorator, Component } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { SecondaryInterface } from '../../UI/SecondaryInterface';
import { TypesModals } from '../../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('CommandPostLogic')
export class CommandPostLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public click() {
        SecondaryInterface.instance.openModal(TypesModals.COMMAND_POST);
    }
}
