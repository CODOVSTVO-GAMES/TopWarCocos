import { _decorator, Component } from 'cc';
import { SecondaryInterface } from '../../SecondaryInterface';
import { TypesModals } from '../../../Static/TypesModals';
import { ModalAutocombineInterface } from './ModalAutocombineInterface';
const { ccclass, property } = _decorator;

@ccclass('ModalAutocombineLogic')
export class ModalAutocombineLogic extends Component {

    goOverGoldMine() {
        SecondaryInterface.instance.closeFirstLayoutModal();
        SecondaryInterface.instance.openFirstModal(TypesModals.SHOP_OBJECT);
    }

    collectCoins() {
        ModalAutocombineInterface.instance.updateInterface();
        SecondaryInterface.instance.closeFirstLayoutModal();
    }
}

