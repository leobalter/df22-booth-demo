import { LightningElement, api } from 'lwc';

export default class MixedModeAny extends LightningElement {
    static shadowSupportMode = 'any';

    @api isSynthetic = 'unknown';
    firstRender = true;

    renderedCallback() {
        if (this.firstRender) {
            this.firstRender = false;
            this.isSynthetic = !!this.template.synthetic;
        }
    }
}
