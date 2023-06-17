import { DialogueStorageController } from "../../../Controllers/DialogueStorageController";
import { RenderDIalog } from "./RenderDIalog";

export class DIalogueLogic {

    static renderDialog(index: number) {
        let dialogArr: Array<string> = DialogueStorageController.getDialogue(index)
        RenderDIalog.instance.renderDialog(dialogArr[0], dialogArr[1])
    }

}