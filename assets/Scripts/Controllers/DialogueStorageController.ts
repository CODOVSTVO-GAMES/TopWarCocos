import { DialogueStorage } from "../Storage/DialogueStorage";

export class DialogueStorageController {

    static getDialogue(index: number) {
        if (DialogueStorage.instance.dialogues.length < index) throw "Индекс диалога не найден";
        return DialogueStorage.instance.dialogues[index];
    }

}