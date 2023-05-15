import { _decorator, Component, Node } from 'cc';
import { SecondaryInterface } from '../../UI/SecondaryInterface';
import { TypesModals } from '../../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('AutocombineLogic')
export class AutocombineLogic extends Component {

    click() {
        SecondaryInterface.instance.openModal(TypesModals.AUT);
    }
}

