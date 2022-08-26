import { LightningElement } from 'lwc';

export default class MixedMode_basic extends LightningElement {
    static shadowSupportMode = 'any';

    renderedCallback() {
        console.log('Synthetic?', !!this.template.synthetic);
    }
}
