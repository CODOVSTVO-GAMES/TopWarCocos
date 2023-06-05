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
import { ModalShopObjectInterface } from './Modals/ModalShopObject/ModalShopObjectInterface';
import { DIalogueLogic } from './Modals/Dialogues/DIalogueLogic';
import { QueueItem } from '../Structures/InterfaceQueueStructure';
import { WireCutInterface } from './Modals/WireCut/WireCutInterface';
import { ModalRadarLogic } from './Modals/ModalRadar/ModalRadarLogic';
import { BombDisposalLogic } from './Modals/BombDisposal/BombDisposalLogic';
import { QuestionLogic } from './Modals/Question/QuestionLogic';
import { SwitchLogic } from './Modals/Switch/SwitchLogic';
import { BattleStorage } from '../Storage/BattleStorage';
const { ccclass, property } = _decorator;

@ccclass('SecondaryInterface')
export class SecondaryInterface extends Component {

    public static instance: SecondaryInterface;

    @property({ type: Node })
    public secondaryNode: Node;

    @property({ type: Node })
    public firstBackgraund: Node;

    @property({ type: Node })
    public secondBackgraund: Node;

    @property({ type: Node })
    public profile: Node;

    @property({ type: Node })
    public shopCoins: Node;

    @property({ type: Node })
    public shopGems: Node;

    @property({ type: Node })
    public shopObject: Node;

    @property({ type: Node })
    public experience: Node;

    @property({ type: Node })
    public powar: Node;

    @property({ type: Node })
    public characters: Node;

    @property({ type: Node })
    public characterInfo: Node;

    @property({ type: Node })
    public characterPumping: Node;

    @property({ type: Node })
    public commandPost: Node;

    @property({ type: Node })
    public upgrateCommandPost0: Node;

    @property({ type: Node })
    public upgrateCommandPost1: Node;

    @property({ type: Node })
    public bank: Node;

    @property({ type: Node })
    public autocombine: Node;

    @property({ type: Node })
    public radar: Node;

    @property({ type: Node })
    public radarTaskInfo: Node;

    @property({ type: Node })
    public radarReward: Node;

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

    @property({ type: Node })
    public question: Node;

    @property({ type: Node })
    public switch: Node;

    public listOpeningFirstLayoutModals: Array<QueueItem> = [];

    public listOpeningSeconLayoutdModals: Array<QueueItem> = [];

    public activeFirstLayoutModal: string = "";

    public activeSecondLayoutModal: string = "";

    private workQueueFirstLayout: boolean = false;

    private workQueueSecondLayout: boolean = false;

    onLoad() {
        SecondaryInterface.instance = this;
    }

    start() {
        this.closeAllModals();
    }

    openFirstModal(type: string, data?: {}) {
        if (this.listOpeningFirstLayoutModals.find((i) => i.modalName == type) == null) {
            this.listOpeningFirstLayoutModals.push(new QueueItem(type, data));
            if (this.workQueueFirstLayout == false) {
                this.queueFirstModals();
            }
        }
    }

    openSecondModal(type: string, data?: {}) {
        if (this.listOpeningSeconLayoutdModals.find((i) => i.modalName == type) == null) {
            this.listOpeningSeconLayoutdModals.push(new QueueItem(type, data));
            if (this.workQueueSecondLayout == false) {
                this.queueSecondModals();
            }
        }
    }

    queueFirstModals() {
        this.workQueueFirstLayout = true;
        let interval = setInterval(() => {
            try {
                if (this.listOpeningFirstLayoutModals.length > 0) {
                    this.openModal(this.listOpeningFirstLayoutModals[0]);
                    this.activeFirstLayoutModal = this.listOpeningFirstLayoutModals[0].modalName;
                    this.listOpeningFirstLayoutModals.splice(0, 1);
                }
            }
            catch { console.error("Ащибка в очереди"); clearInterval(interval); }
        }, 50);
        this.workQueueFirstLayout = false;
    }

    queueSecondModals() {
        this.workQueueSecondLayout = true;
        let interval = setInterval(() => {
            try {
                if (this.listOpeningSeconLayoutdModals.length > 0) {
                    this.openModal(this.listOpeningSeconLayoutdModals[0]);
                    this.activeSecondLayoutModal = this.listOpeningSeconLayoutdModals[0].modalName;
                    this.listOpeningSeconLayoutdModals.splice(0, 1);
                }
            }
            catch { console.error("Ащибка в очереди"); clearInterval(interval); }
        }, 50);
        this.workQueueSecondLayout = false;
    }

    resizeSecondaryInterface(raito = 1) {
        this.secondaryNode.setScale(v3(raito, raito, this.secondaryNode.scale.z))
    }

    private openModal(item: QueueItem) {
        if (item.modalName == TypesModals.PROFILE) {
            this.firstBackgraund.active = true;
            this.profile.active = true;
        }
        else if (item.modalName == TypesModals.SHOP_COINS) {
            this.firstBackgraund.active = true;
            this.shopCoins.active = true;
        }
        else if (item.modalName == TypesModals.SHOP_GEMS) {
            this.firstBackgraund.active = true;
            this.shopGems.active = true;
        }
        else if (item.modalName == TypesModals.SHOP_OBJECT) {
            ModalShopObjectInterface.instance.updateInterface();
            this.shopObject.active = true;
        }
        else if (item.modalName == TypesModals.EXPERIENCE) {
            ModalExperienceInerface.instance.updateInterface();
            this.experience.active = true;
        }
        else if (item.modalName == TypesModals.POWER) {
            ModalPowerInterface.instance.updateInterface();
            this.firstBackgraund.active = true;
            this.powar.active = true;
        }
        else if (item.modalName == TypesModals.CHARACTERS) {
            ModalCharacterGridInterface.instance.renderCharacters();
            this.firstBackgraund.active = true;
            this.characters.active = true;
        }
        else if (item.modalName == TypesModals.CHARACTER_INFO) {
            // ModalCharacterGridInterface.instance.renderCharacters();
            // this.characterIndex = customEventData;
            // this.modal.active = ModalCharacterInfoIntarface.instance.renderCharacter(this.characterIndex);
            this.firstBackgraund.active = true;
            this.characterInfo.active = true;
        }
        else if (item.modalName == TypesModals.CHARACTER_PUMPING) {
            // ModalCharacterGridInterface.instance.renderCharacters();
            this.secondBackgraund.active = true;
            this.characterPumping.active = true;
        }
        else if (item.modalName == TypesModals.COMMAND_POST) {
            ModalCommandPostInterface.instance.updateInterface();
            this.firstBackgraund.active = true;
            this.commandPost.active = true;
        }
        else if (item.modalName == TypesModals.UPGRATE_COMMAND_POST_0) {
            this.secondBackgraund.active = true;
            this.upgrateCommandPost0.active = true;

        }
        else if (item.modalName == TypesModals.UPGRATE_COMMAND_POST_1) {
            this.secondBackgraund.active = true;
            this.upgrateCommandPost1.active = true;
        }
        else if (item.modalName == TypesModals.BANK) {
            ModalBankInterface.instance.updateInterface();
            this.firstBackgraund.active = true;
            this.bank.active = true;
        }
        else if (item.modalName == TypesModals.AUTOCOMBINE) {
            ModalAutocombineInterface.instance.updateInterface();
            this.firstBackgraund.active = true;
            this.autocombine.active = true;
        }
        else if (item.modalName == TypesModals.RADAR) {
            ModalRadarInterface.instance.updateInterface();
            ModalRadarLogic.instance.spawnNewTasks();
            this.firstBackgraund.active = true;
            this.radar.active = true;
        }
        else if (item.modalName == TypesModals.RADAR_TASK_INFO) {
            // ModalCharacterGridInterface.instance.renderCharacters();
            this.secondBackgraund.active = true;
            this.radarTaskInfo.active = true;
        }
        else if (item.modalName == TypesModals.RADAR_REWARD) {
            // ModalCharacterGridInterface.instance.renderCharacters();
            this.secondBackgraund.active = true;
            this.radarReward.active = true;
        }
        else if (item.modalName == TypesModals.REPAIR_SHOP) {
            ModalRepairShopInterface.instance.updateInterface();
            this.firstBackgraund.active = true;
            this.repairShop.active = true;
        }
        else if (item.modalName == TypesModals.BACKPACK) {
            ModalBackpackLogic.instance.openModalBackpack();
            ModalBackpackInterface.instance.spawnBackpack();
            ModalBackpackInterface.instance.updateInterface();
            this.firstBackgraund.active = true;
            this.backpack.active = true;
        }
        else if (item.modalName == TypesModals.DIALOG) {
            DIalogueLogic.renderDialog(0)
            this.firstBackgraund.active = true;
            this.dialog.active = true
        }
        else if (item.modalName == TypesModals.WIRE_CUT) {
            WireCutInterface.instance.renderWire();
            this.firstBackgraund.active = true;
            this.wireCut.active = true;
        }
        else if (item.modalName == TypesModals.BOMB_DISPOSAL) {
            BombDisposalLogic.instance.renderModal();
            this.firstBackgraund.active = true;
            this.bombDisposal.active = true;
        }
        else if (item.modalName == TypesModals.QUESTION) {
            QuestionLogic.instance.renderModal();
            this.firstBackgraund.active = true;
            this.question.active = true;
        }
        else if (item.modalName == TypesModals.SWITCH) {
            SwitchLogic.instance.renderModal();
            this.firstBackgraund.active = true;
            this.switch.active = true;
        }
    }

    openProfile() { this.openFirstModal(TypesModals.PROFILE); }

    openShopCoins() { this.openFirstModal(TypesModals.SHOP_COINS); }

    openShopGems() { this.openFirstModal(TypesModals.SHOP_GEMS); }

    openShopObject() { this.openFirstModal(TypesModals.SHOP_OBJECT); }

    openExperience() { this.openFirstModal(TypesModals.EXPERIENCE); }

    openPower() { this.openFirstModal(TypesModals.POWER); }

    openCharacters() { this.openFirstModal(TypesModals.CHARACTERS); }

    openCharacterInfo(event, customEventData) { this.openFirstModal(TypesModals.CHARACTER_INFO, customEventData); }

    openCharacterPumping() { this.openFirstModal(TypesModals.CHARACTER_PUMPING); }

    openCommandPost() { this.openFirstModal(TypesModals.COMMAND_POST); }

    openBank() { this.openFirstModal(TypesModals.BANK); }

    openAutocombine() { this.openFirstModal(TypesModals.AUTOCOMBINE); }

    openRadar() { this.openFirstModal(TypesModals.RADAR); }

    openRepairShop() { this.openFirstModal(TypesModals.REPAIR_SHOP); }

    openBackpack() { this.openFirstModal(TypesModals.BACKPACK); }

    openWireCut() { this.openFirstModal(TypesModals.WIRE_CUT); }

    openBombDisposal() { this.openFirstModal(TypesModals.BOMB_DISPOSAL); }

    openQuestion() { this.openFirstModal(TypesModals.QUESTION); }

    openSwith() { this.openFirstModal(TypesModals.SWITCH); }

    closeFirstLayoutModal() {
        this.firstBackgraund.active = false;
        if (this.activeFirstLayoutModal == TypesModals.PROFILE) {
            this.profile.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.SHOP_COINS) {
            this.shopCoins.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.SHOP_GEMS) {
            this.shopGems.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.SHOP_OBJECT) {
            this.shopObject.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.EXPERIENCE) {
            this.experience.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.CHARACTERS) {
            this.characters.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.COMMAND_POST) {
            this.commandPost.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.BANK) {
            this.bank.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.AUTOCOMBINE) {
            this.autocombine.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.RADAR) {
            this.radar.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.REPAIR_SHOP) {
            this.repairShop.active = false;
        }
        else if (this.activeFirstLayoutModal == TypesModals.BACKPACK) {
            this.backpack.active = false;
        }
        this.activeFirstLayoutModal = "";
    }

    closeSecondLayoutModal() {
        this.secondBackgraund.active = false;
        if (this.activeSecondLayoutModal == TypesModals.UPGRATE_COMMAND_POST_0) {
            this.upgrateCommandPost0.active = false;
        }
        else if (this.activeSecondLayoutModal == TypesModals.UPGRATE_COMMAND_POST_1) {
            this.upgrateCommandPost1.active = false;
        }
        this.activeSecondLayoutModal = "";
    }

    closeAllModals() {
        this.firstBackgraund.active = false;
        this.secondBackgraund.active = false;
        this.profile.active = false;
        this.shopCoins.active = false;
        this.shopGems.active = false;
        this.shopObject.active = false;
        this.experience.active = false;
        this.powar.active = false;
        this.characters.active = false;
        this.commandPost.active = false;
        this.upgrateCommandPost0.active = false;
        this.upgrateCommandPost1.active = false;
        this.bank.active = false;
        this.autocombine.active = false;
        this.radar.active = false;
        this.repairShop.active = false;
        this.backpack.active = false;
        this.dialog.active = false;
        this.wireCut.active = false;
        this.bombDisposal.active = false;
        this.question.active = false;
        this.switch.active = false;
        this.activeFirstLayoutModal = "";
        this.activeSecondLayoutModal = "";
    }

    getTypeActiveFirstLayoutModal(): string {
        return this.activeFirstLayoutModal;
    }

    getTypeActiveSecondLayoutModal(): string {
        return this.activeSecondLayoutModal;
    }
}