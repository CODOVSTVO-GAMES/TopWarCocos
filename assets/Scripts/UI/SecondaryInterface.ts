import { _decorator, Component, instantiate, Node, v3 } from 'cc';
import { TypesViews } from '../Static/TypesViews';
import { QueueItem } from '../Structures/InterfaceQueueStructure';
import { WireCutInterface } from './Modals/WireCut/WireCutInterface';
import { BombDisposalLogic } from './Modals/BombDisposal/BombDisposalLogic';
import { QuestionLogic } from './Modals/Question/QuestionLogic';
import { SwitchLogic } from './Modals/Switch/SwitchLogic';
import { AnimationModals } from '../Animations/UI/AnimationModals';
import { TypesAnimation } from '../Static/TypesAnimation';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
import { CharactersModel } from '../Model/CharactersModel';
import { RadarModel } from '../Model/RadarModel';
import { RadarPresenter } from '../Presenter/RadarPresenter';
import { CharacterParameters } from '../View/CharacterParameters';
import { UpgradeCharacterView } from '../View/UpgradeCharacterView';
import { CharactersView } from '../View/CharactersView';
import { TasksGameView } from '../View/TasksGameView';
import { ShopObjectView } from '../View/ShopObjectView';
import { PrefabsModel } from '../Model/PrefabsModel';
const { ccclass, property } = _decorator;

@ccclass('SecondaryInterface')
export class SecondaryInterface extends Component {

    public static instance: SecondaryInterface

    @property({ type: Node })
    public secondaryNode: Node

    @property({ type: Node })
    public firstBackgraund: Node

    @property({ type: Node })
    public secondBackgraund: Node

    @property({ type: Node })
    public shopObject: Node

    @property({ type: Node })
    public experience: Node

    @property({ type: Node })
    public powar: Node

    @property({ type: Node })
    public characters: Node

    @property({ type: Node })
    public characterInfo: Node

    @property({ type: Node })
    public characterPumping: Node

    @property({ type: Node })
    public commandPost: Node

    @property({ type: Node })
    public tasksGame: Node

    @property({ type: Node })
    public upgrateCommandPost0: Node

    @property({ type: Node })
    public upgrateCommandPost1: Node

    @property({ type: Node })
    public autocombine: Node

    @property({ type: Node })
    public radar: Node

    @property({ type: Node })
    public radarTaskInfo: Node

    @property({ type: Node })
    public gameReward: Node

    @property({ type: Node })
    public backpack: Node

    @property({ type: Node })
    public wireCut: Node

    @property({ type: Node })
    public bombDisposal: Node

    @property({ type: Node })
    public question: Node

    @property({ type: Node })
    public switch: Node

    @property({ type: Node })
    public spatialMine: Node

    public listOpeningFirstLayoutView: QueueItem[] = []
    public listOpeningSeconLayoutdView: QueueItem[] = []
    public activeFirstLayoutView: string = ""
    public activeSecondLayoutView: string = ""
    private workQueueFirstLayout: boolean = false
    private workQueueSecondLayout: boolean = false

    public onLoad(): void {
        SecondaryInterface.instance = this
        this.closeAllModals()
    }

    public eventRedirectToGlobalMap() {
        RedirectionToScene.redirect(SceneNames.GLOBAL_MAP)
    }

    public eventRedirectToHomeMap() {
        RedirectionToScene.redirect(SceneNames.HOME_MAP)
    }

    public openFirstModal(type: string, data?: {}) {
        if (this.listOpeningFirstLayoutView.find((i) => i.modalName == type) == null) {
            this.listOpeningFirstLayoutView.push(new QueueItem(type, data))
            if (this.workQueueFirstLayout == false) {
                this.queueFirstModals()
            }
        }
    }

    public openSecondModal(type: string, data?: {}) {
        if (this.listOpeningSeconLayoutdView.find((i) => i.modalName == type) == null) {
            this.listOpeningSeconLayoutdView.push(new QueueItem(type, data))
            if (this.workQueueSecondLayout == false) {
                this.queueSecondModals()
            }
        }
    }

    queueFirstModals() {
        this.workQueueFirstLayout = true;
        let interval = setInterval(() => {
            try {
                if (this.listOpeningFirstLayoutView.length > 0) {
                    this.openModal(this.listOpeningFirstLayoutView[0]);
                    this.activeFirstLayoutView = this.listOpeningFirstLayoutView[0].modalName;
                    this.listOpeningFirstLayoutView.splice(0, 1);
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
                if (this.listOpeningSeconLayoutdView.length > 0) {
                    this.openModal(this.listOpeningSeconLayoutdView[0]);
                    this.activeSecondLayoutView = this.listOpeningSeconLayoutdView[0].modalName;
                    this.listOpeningSeconLayoutdView.splice(0, 1);
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
        if (item.modalName == TypesViews.SHOP_OBJECT) {
            ShopObjectView.instance.renderInterface()
            this.shopObject.active = true;
        }
        else if (item.modalName == TypesViews.EXPERIENCE) {
            this.experience.active = true;
        }
        else if (item.modalName == TypesViews.POWER) {
            this.firstBackgraund.active = true;
            this.powar.active = true;
        }
        else if (item.modalName == TypesViews.CHARACTERS) {
            CharactersView.instance.renderCharacters();
            this.firstBackgraund.active = true;
            this.characters.active = true;
        }
        else if (item.modalName == TypesViews.CHARACTER_PARAMETERS) {
            CharactersModel.instance.characterIndex = item.data["index"];
            let availableCharacter = CharacterParameters.instance.renderCharacter(CharactersModel.instance.characterIndex);
            if (availableCharacter) {
                this.firstBackgraund.active = true;
                this.characterInfo.active = true;
            }
            else {
                this.activeFirstLayoutView = "";
            }
        }
        else if (item.modalName == TypesViews.UPGRADE_CHARACTER) {
            UpgradeCharacterView.instance.characterIndex = CharactersModel.instance.characterIndex;
            UpgradeCharacterView.instance.renderModalPumping(item.data["type"]);
            this.secondBackgraund.active = true;
            this.characterPumping.active = true;
            AnimationModals.instance.modalAnimation(this.characterPumping, TypesAnimation.OPEN_MODAL_CHARACTER);
        }
        else if (item.modalName == TypesViews.COMMAND_POST) {
            this.firstBackgraund.active = true;
            this.commandPost.active = true;
        }
        else if (item.modalName == TypesViews.TASKS_GAME) {
            let object = instantiate(PrefabsModel.instance.getViewPrefab(TypesViews.TASKS_GAME))
            object.parent = this.secondaryNode
        }
        else if (item.modalName == TypesViews.UPGRATE_COMMAND_POST) {
            this.secondBackgraund.active = true;
            this.upgrateCommandPost0.active = true;
            AnimationModals.instance.modalAnimation(this.upgrateCommandPost0, TypesAnimation.OPEN_MODAL_UPGRADE_COMMAND_POST);
        }
        else if (
            item.modalName == TypesViews.UPGRATE_REPAIR_SHOP ||
            item.modalName == TypesViews.UPGRATE_MERGE_GOLD_MINE ||
            item.modalName == TypesViews.UPGRATE_MERGE_TROOP_AIR ||
            item.modalName == TypesViews.UPGRATE_MERGE_TROOP_MARINE ||
            item.modalName == TypesViews.UPGRATE_MERGE_TROOP_OVERLAND ||
            item.modalName == TypesViews.UPGRATE_MERGE_BARRACK_AIR ||
            item.modalName == TypesViews.UPGRATE_MERGE_BARRACK_MARINE ||
            item.modalName == TypesViews.UPGRATE_MERGE_BARRACK_OVERLAND ||
            item.modalName == TypesViews.UPGRATE_BUILD_GOLD_MINE ||
            item.modalName == TypesViews.UPGRATE_BUILD_BARRACK_AIR ||
            item.modalName == TypesViews.UPGRATE_BUILD_BARRACK_MARINE ||
            item.modalName == TypesViews.UPGRATE_BUILD_BARRACK_OVERLAND
        ) {
            this.secondBackgraund.active = true;
            this.upgrateCommandPost1.active = true;
            AnimationModals.instance.modalAnimation(this.upgrateCommandPost1, TypesAnimation.OPEN_MODAL_UPGRADE_COMMAND_POST);
        }
        else if (item.modalName == TypesViews.AUTOCOMBINE) {
            this.firstBackgraund.active = true;
            this.autocombine.active = true;
        }
        else if (item.modalName == TypesViews.RADAR) {
            RadarPresenter.getNewTasks()
            this.firstBackgraund.active = true;
            this.radar.active = true;
        }
        else if (item.modalName == TypesViews.TASKS_RADAR) {
            this.secondBackgraund.active = true;
            this.radarTaskInfo.active = true;
            AnimationModals.instance.modalAnimation(this.radarTaskInfo, TypesAnimation.OPEN_MODAL_RADAR);
        }
        else if (item.modalName == TypesViews.GAME_REWARD) {
            RadarModel.instance.task = item.data;
            this.secondBackgraund.active = true;
            this.gameReward.active = true;
            // AnimationModals.instance.modalAnimation(this.gameReward, TypesAnimation.OPEN_MODAL_RADAR);
        }
        else if (item.modalName == TypesViews.BACKPACK) {
            let object = instantiate(PrefabsModel.instance.getViewPrefab(TypesViews.BACKPACK))
            object.parent = this.secondaryNode
        }
        else if (item.modalName == TypesViews.WIRE_CUT) {
            WireCutInterface.instance.renderWire();
            this.firstBackgraund.active = true;
            this.wireCut.active = true;
        }
        else if (item.modalName == TypesViews.BOMB_DISPOSAL) {
            BombDisposalLogic.instance.renderModal();
            this.firstBackgraund.active = true;
            this.bombDisposal.active = true;
        }
        else if (item.modalName == TypesViews.QUESTION) {
            QuestionLogic.instance.renderModal();
            this.firstBackgraund.active = true;
            this.question.active = true;
        }
        else if (item.modalName == TypesViews.SWITCH) {
            SwitchLogic.instance.renderModal();
            this.firstBackgraund.active = true;
            this.switch.active = true;
        }
        else if (item.modalName == TypesViews.SPATIAL_MINE) {

            this.firstBackgraund.active = true;
            this.spatialMine.active = true;
        }
    }

    openProfile() { this.openFirstModal(TypesViews.PROFILE); }

    openShopCoins() { this.openFirstModal(TypesViews.SHOP_COINS); }

    openShopGems() { this.openFirstModal(TypesViews.SHOP_GEMS); }

    openShopObject() { this.openFirstModal(TypesViews.SHOP_OBJECT); }

    openExperience() { this.openFirstModal(TypesViews.EXPERIENCE); }

    openPower() { this.openFirstModal(TypesViews.POWER); }

    openCharacters() { this.openFirstModal(TypesViews.CHARACTERS); }

    openCharacterInfo(event, customEventData) { this.openFirstModal(TypesViews.CHARACTER_PARAMETERS, { index: customEventData }); }

    openCharacterPumping(data: object) { this.openSecondModal(TypesViews.UPGRADE_CHARACTER, data); }

    openCommandPost() { this.openFirstModal(TypesViews.COMMAND_POST); }

    openTasksGame() { this.openFirstModal(TypesViews.TASKS_GAME); }

    openBank() { this.openFirstModal(TypesViews.BANK); }

    openAutocombine() { this.openFirstModal(TypesViews.AUTOCOMBINE); }

    openRadar() { this.openFirstModal(TypesViews.RADAR); }

    openRadarTaskInfo(data: object) { this.openSecondModal(TypesViews.TASKS_RADAR, data); }

    openRadarReward(data: object) { this.openSecondModal(TypesViews.GAME_REWARD, data); }

    openRepairShop() { this.openFirstModal(TypesViews.REPAIR_SHOP); }

    openBackpack() { this.openFirstModal(TypesViews.BACKPACK); }

    openWireCut() { this.openFirstModal(TypesViews.WIRE_CUT); }

    openBombDisposal() { this.openFirstModal(TypesViews.BOMB_DISPOSAL); }

    openQuestion() { this.openFirstModal(TypesViews.QUESTION); }

    openSwith() { this.openFirstModal(TypesViews.SWITCH); }

    openSpatialMine() { this.openFirstModal(TypesViews.SPATIAL_MINE); }

    closeFirstLayoutModal() {
        if (this.activeFirstLayoutView != TypesViews.CHARACTER_PARAMETERS) {
            this.firstBackgraund.active = false
        }
        if (this.activeFirstLayoutView == TypesViews.SHOP_OBJECT) {
            this.shopObject.active = false
        }
        else if (this.activeFirstLayoutView == TypesViews.EXPERIENCE) {
            this.experience.active = false
        }
        else if (this.activeFirstLayoutView == TypesViews.CHARACTERS) {
            this.characters.active = false
        }
        else if (this.activeFirstLayoutView == TypesViews.CHARACTER_PARAMETERS) {
            CharactersView.instance.renderCharacters();
            CharacterParameters.instance.renderCharacter(CharactersModel.instance.characterIndex);
            this.characterInfo.active = false
            this.activeFirstLayoutView = TypesViews.CHARACTERS;
        }
        else if (this.activeFirstLayoutView == TypesViews.COMMAND_POST) {
            this.commandPost.active = false
        }
        else if (this.activeFirstLayoutView == TypesViews.TASKS_GAME) {
            this.tasksGame.active = false
        }
        else if (this.activeFirstLayoutView == TypesViews.AUTOCOMBINE) {
            this.autocombine.active = false
        }
        else if (this.activeFirstLayoutView == TypesViews.RADAR) {
            this.radar.active = false
        }
        else if (this.activeFirstLayoutView == TypesViews.BACKPACK) {
            this.backpack.active = false
        }
        else if (this.activeFirstLayoutView == TypesViews.SPATIAL_MINE) {
            this.spatialMine.active = false
        }
        if (this.activeFirstLayoutView != TypesViews.CHARACTER_PARAMETERS) {
            this.activeFirstLayoutView = ""
        }
    }

    closeSecondLayoutModal() {
        setTimeout(() => this.secondBackgraund.active = false, 85);
        if (this.activeSecondLayoutView == TypesViews.UPGRATE_COMMAND_POST) {
            AnimationModals.instance.modalAnimation(this.upgrateCommandPost0, TypesAnimation.CLOSE_MODAL_UPGRADE_COMMAND_POST);
            setTimeout(() => this.upgrateCommandPost0.active = false, 85);
        }
        else if (
            this.activeSecondLayoutView == TypesViews.UPGRATE_REPAIR_SHOP ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_MERGE_GOLD_MINE ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_MERGE_TROOP_AIR ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_MERGE_TROOP_MARINE ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_MERGE_TROOP_OVERLAND ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_MERGE_BARRACK_AIR ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_MERGE_BARRACK_MARINE ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_MERGE_BARRACK_OVERLAND ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_BUILD_GOLD_MINE ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_BUILD_BARRACK_AIR ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_BUILD_BARRACK_MARINE ||
            this.activeSecondLayoutView == TypesViews.UPGRATE_BUILD_BARRACK_OVERLAND
        ) {
            AnimationModals.instance.modalAnimation(this.upgrateCommandPost1, TypesAnimation.CLOSE_MODAL_UPGRADE_COMMAND_POST);
            setTimeout(() => this.upgrateCommandPost1.active = false, 85);
        }
        else if (this.activeSecondLayoutView == TypesViews.UPGRADE_CHARACTER) {
            AnimationModals.instance.modalAnimation(this.characterPumping, TypesAnimation.CLOSE_MODAL_CHARACTER);
            setTimeout(() => this.characterPumping.active = false, 85);
        }
        else if (this.activeSecondLayoutView == TypesViews.TASKS_RADAR) {
            AnimationModals.instance.modalAnimation(this.radarTaskInfo, TypesAnimation.CLOSE_MODAL_RADAR);
            setTimeout(() => this.radarTaskInfo.active = false, 85);
        }
        else if (this.activeSecondLayoutView == TypesViews.GAME_REWARD) {
            AnimationModals.instance.modalAnimation(this.gameReward, TypesAnimation.CLOSE_MODAL_RADAR);
            setTimeout(() => this.gameReward.active = false, 85);
        }
        this.activeSecondLayoutView = "";
    }

    closeAllModals() {
        this.firstBackgraund.active = false
        this.secondBackgraund.active = false
        this.shopObject.active = false
        this.experience.active = false
        this.powar.active = false
        this.characters.active = false
        this.characterInfo.active = false
        this.characterPumping.active = false
        this.commandPost.active = false
        this.tasksGame.active = false
        this.upgrateCommandPost0.active = false
        this.upgrateCommandPost1.active = false
        this.autocombine.active = false
        this.radar.active = false
        this.radarTaskInfo.active = false
        // this.gameReward.active = false
        this.backpack.active = false
        this.wireCut.active = false
        this.bombDisposal.active = false
        this.question.active = false
        this.switch.active = false
        this.spatialMine.active = false
        this.activeFirstLayoutView = ""
        this.activeSecondLayoutView = ""
    }

    getTypeActiveFirstLayoutModal(): string {
        return this.activeFirstLayoutView;
    }

    getTypeActiveSecondLayoutModal(): string {
        return this.activeSecondLayoutView;
    }
}