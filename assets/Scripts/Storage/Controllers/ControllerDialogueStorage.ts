import { DialogueStorage } from "../DialogueStorage";

export class ControllerDialogueStorage {

    static getDialogue(index: number) {
        if (DialogueStorage.instance.dialogues.length < index) throw "Индекс диалога не найден"
        return DialogueStorage.instance.dialogues[index]
    }

}