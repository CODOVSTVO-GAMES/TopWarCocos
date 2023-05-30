import { _decorator, Component, Node, v3 } from 'cc';
import { TypesModals } from '../Static/TypesModals';
import { ModalExperienceInerface } from './Modals/ModalExperience/ModalExperienceInerface';
import { ModalPowerInterface } from './Modals/ModalPower/ModalPowerInterface';
import { ModalCharacterGridInterface } from './Modals/Characters/ModalCharactersGridInterface';
import { ModalCommandPostInterface } from './Modals/ModalCommandPost/ModalCommandPostInterface';
import { ModalAutocombineInterface } from './Modals/ModalAutocombine/ModalAutocombineInterface';
import { ModalRadarInterface } from './Modals/ModalRadar/ModalRadarInterface';
import { ModalBackpackInterface } from './Modals/ModalBackpack/ModalBackpackInterface';
import { ModalRepairShopInterface } from './Modals/ModalRepairShop/ModalRepairShopInterface';
import { ModalBankInterface } from './Modals/ModalBank/ModalBankInterface';
import { ModalBackpackLogic } from './Modals/ModalBackpack/ModalBackpackLogic';
import { DIalogueLogic } from './Modals/Dialogues/DIalogueLogic';
import { QueueItem } from '../Structures/InterfaceQueueStructure';
import { WireCutInterface } from './Modals/WireCut/WireCutInterface';
import { ModalRadarLogic } from './Modals/ModalRadar/ModalRadarLogic';
import { BombDisposalLogic } from './Modals/BombDisposal/BombDisposalLogic';
const { ccclass, property } = _decorator;

@ccclass('SecondaryInterface')
export class SecondaryInterface extends Component {

    public static instance: SecondaryInterface;

    @property({ type: Node })
    public secondaryNode: Node;

    @property({ type: Node })
    public backgraund: Node;

    @property({ type: Node })
    public profile: Node;

    @property({ type: Node })
    public shopCoins: Node;

    @property({ type: Node })
    public shopGems: Node;

    @property({ type: Node })
    public experience: Node;

    @property({ type: Node })
    public powar: Node;

    @property({ type: Node })
    public characters: Node;

    @property({ type: Node })
    public commandPost: Node;

    @property({ type: Node })
    public bank: Node;

    @property({ type: Node })
    public autocombine: Node;

    @property({ type: Node })
    public radar: Node;

    @property({ type: Node })
    public repairShop: Node;

    @property({ type: Node })
    public backpack: Node;

    @property({ type: Node })
    public dialog: Node;

    @property({ type: Node })
    public wireCut: Node;

    @property({ type: Node })
    public bombDisposal: Node;

    public listOpeningModals: Array<QueueItem> = [];

    public activeModal: string = "";

    private workQueue: boolean = false;

    onLoad() {
        SecondaryInterface.instance = this;
    }

    start() {
        this.closeAllModals();
    }

    openModal(type: string) {
        if (this.listOpeningModals.find((i) => i.modalName == type) == null) {
            this.listOpeningModals.push(new QueueItem(type));
            if (this.workQueue == false) {
                this.queueModals();
            }
        }

    }

    private queueModals() {
        this.workQueue = true;

        setInterval(() => {
            if (this.listOpeningModals.length > 0 && this.activeModal == "") {
                this.open(this.listOpeningModals[0]);
                this.listOpeningModals.splice(0, 1);
            }
        }, 100);

        this.workQueue = false;
    }

    resizeSecondaryInterface(raito = 1) {
        this.secondaryNode.setScale(v3(raito, raito, this.secondaryNode.scale.z))
    }


    private open(item: QueueItem) {
        this.activeModal = item.modalName;
        if (item.modalName == TypesModals.PROFILE) {
            this.backgraund.active = true;
            this.profile.active = true;
        }
        else if (item.modalName == TypesModals.SHOP_COINS) {
            this.backgraund.active = true;
            this.shopCoins.active = true;
        }
        else if (item.modalName == TypesModals.SHOP_GEMS) {
            this.backgraund.active = true;
            this.shopGems.active = true;
        }
        else if (item.modalName == TypesModals.EXPERIENCE) {
            ModalExperienceInerface.instance.updateInterface();
            this.backgraund.active = true;
            this.experience.active = true;
        }
        else if (item.modalName == TypesModals.POWER) {
            ModalPowerInterface.instance.updateInterface();
            this.backgraund.active = true;
            this.powar.active = true;
        }
        else if (item.modalName == TypesModals.CHARACTERS) {
            ModalCharacterGridInterface.instance.renderCharacters();
            this.backgraund.active = true;
            this.characters.active = true;
        }
        else if (item.modalName == TypesModals.COMMAND_POST) {
            ModalCommandPostInterface.instance.updateInterface();
            this.backgraund.active = true;
            this.commandPost.active = true;
        }
        else if (item.modalName == TypesModals.BANK) {
            ModalBankInterface.instance.updateInterface();
            this.backgraund.active = true;
            this.bank.active = true;
        }
        else if (item.modalName == TypesModals.AUTOCOMBINE) {
            ModalAutocombineInterface.instance.updateInterface();
            this.backgraund.active = true;
            this.autocombine.active = true;
        }
        else if (item.modalName == TypesModals.RADAR) {
            ModalRadarInterface.instance.updateInterface();
            ModalRadarLogic.instance.spawnNewTasks();
            this.backgraund.active = true;
            this.radar.active = true;
        }
        else if (item.modalName == TypesModals.REPAIR_SHOP) {
            ModalRepairShopInterface.instance.updateInterface();
            this.backgraund.active = true;
            this.repairShop.active = true;
        }
        else if (item.modalName == TypesModals.BACKPACK) {
            ModalBackpackLogic.instance.openModalBackpack();
            ModalBackpackInterface.instance.updateInterface();
            this.backgraund.active = true;
            this.backpack.active = true;
        }
        else if (item.modalName == TypesModals.DIALOG) {
            DIalogueLogic.renderDialog(0)
            this.backgraund.active = true;
            this.dialog.active = true
        }
        else if (item.modalName == TypesModals.WIRE_CUT) {
            WireCutInterface.instance.renderWire();
            this.backgraund.active = true;
            this.wireCut.active = true;
        }
        else if (item.modalName == TypesModals.BOMB_DISPOSAL) {
            BombDisposalLogic.instance.renderModal();
            this.backgraund.active = true;
            this.bombDisposal.active = true;
        }
    }

    openProfile() { this.openModal(TypesModals.PROFILE); }

    openShopCoins() { this.openModal(TypesModals.SHOP_COINS); }

    openShopGems() { this.openModal(TypesModals.SHOP_GEMS); }

    openExperience() { this.openModal(TypesModals.EXPERIENCE); }

    openPower() { this.openModal(TypesModals.POWER); }

    openCharacters() { this.openModal(TypesModals.CHARACTERS); }

    openCommandPost() { this.openModal(TypesModals.COMMAND_POST); }

    openBank() { this.openModal(TypesModals.BANK); }

    openAutocombine() { this.openModal(TypesModals.AUTOCOMBINE); }

    openRadar() { this.openModal(TypesModals.RADAR); }

    openRepairShop() { this.openModal(TypesModals.REPAIR_SHOP); }

    openBackpack() { this.openModal(TypesModals.BACKPACK); }

    openWireCut() { this.openModal(TypesModals.WIRE_CUT); }

    openBombDisposal() { this.openModal(TypesModals.BOMB_DISPOSAL); }

    closeModal() {
        this.backgraund.active = false;
        if (this.activeModal == TypesModals.PROFILE) {
            this.profile.active = false;
        }
        else if (this.activeModal == TypesModals.COMMAND_POST) {
            this.commandPost.active = false;
        }
        else if (this.activeModal == TypesModals.RADAR) {
            this.radar.active = false;
        }
        else if (this.activeModal == TypesModals.REPAIR_SHOP) {
            this.repairShop.active = false;
        }
        else if (this.activeModal == TypesModals.BACKPACK) {
            this.backpack.active = false;
        }
        this.activeModal = "";
    }

    closeAllModals() {
        this.backgraund.active = false;
        this.profile.active = false;
        this.shopCoins.active = false;
        this.shopGems.active = false;
        this.experience.active = false;
        this.powar.active = false;
        this.characters.active = false;
        this.commandPost.active = false;
        this.bank.active = false;
        this.autocombine.active = false;
        this.radar.active = false;
        this.repairShop.active = false;
        this.backpack.active = false;
        this.dialog.active = false;
        this.wireCut.active = false;
        this.bombDisposal.active = false;
        this.activeModal = "";
    }

    getTypeActiveModal(): string {
        return this.activeModal;
    }
}