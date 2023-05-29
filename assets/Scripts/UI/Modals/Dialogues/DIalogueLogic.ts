import { ControllerDialogueStorage } from "../../../Storage/Controllers/ControllerDialogueStorage";
import { RenderDIalog } from "./RenderDIalog";

export class DIalogueLogic {

    static renderDialog(index: number) {
        let dialogArr: Array<string> = ControllerDialogueStorage.getDialogue(index)
        RenderDIalog.instance.renderDialog(dialogArr[0], dialogArr[1])
    }

}