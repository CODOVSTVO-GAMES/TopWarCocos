import { _decorator, Component, Node } from 'cc';
import { RenderCharactersGrid } from '../Characters/RenderCharactersGrid';
const { ccclass, property } = _decorator;

@ccclass('SecondaryInterface')
export class SecondaryInterface extends Component {

    @property({ type: Node })
    public charactersPanel: Node;

    charactersOpen() {
        RenderCharactersGrid.instance.renderCharacters();
        this.charactersPanel.active = true;
    }

    charactersClose() {
        this.charactersPanel.active = false;
    }
}