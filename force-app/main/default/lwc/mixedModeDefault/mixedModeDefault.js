import { LightningElement, api } from 'lwc';

export default class MixedModeDefault extends LightningElement {
    @api isSynthetic = 'unknown';
    
    firstRender = true;

    renderedCallback() {
        if (this.firstRender) {
            this.firstRender = false;
            this.isSynthetic = !!this.template.synthetic;
        }
    }
}
