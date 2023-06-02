import { _decorator, Component } from 'cc';
import { SecondaryInterface } from '../../UI/SecondaryInterface';
import { TypesModals } from '../../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('AutocombineLogic')
export class AutocombineLogic extends Component {

    clickAutocombine() {
        SecondaryInterface.instance.openFirstModal(TypesModals.AUTOCOMBINE);
    }
}
