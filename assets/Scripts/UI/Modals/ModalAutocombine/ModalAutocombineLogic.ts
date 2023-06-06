import { _decorator, Component, Node } from 'cc';
import { SecondaryInterface } from '../../SecondaryInterface';
import { TypesModals } from '../../../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('ModalAutocombineLogic')
export class ModalAutocombineLogic extends Component {

    goOverGoldMine() {
        SecondaryInterface.instance.closeFirstLayoutModal();
        SecondaryInterface.instance.openFirstModal(TypesModals.SHOP_OBJECT);
    }

    collectCoins() {
        SecondaryInterface.instance.closeFirstLayoutModal();
    }
}

