import { LightningElement } from 'lwc';

export default class SelectMixedModeCascade extends LightningElement {
    handleClick() {
        this.template.querySelectorAll('.animal').forEach(elem => {
            elem.classList.toggle('highlight');
        });
    }
}