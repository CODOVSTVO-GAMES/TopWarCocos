import { _decorator, Component } from 'cc';
import { SecondaryInterface } from '../../UI/SecondaryInterface';
import { TypesModals } from '../../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('BankLogic')
export class BankLogic extends Component {

    clickBank() {
        SecondaryInterface.instance.openFirstModal(TypesModals.BANK);
    }
}
