import { LightningElement } from 'lwc';

export default class SelectLightDom extends LightningElement {
    handleClick() {
        this.template.querySelectorAll('.animal').forEach(elem => {
            elem.classList.toggle('highlight');
        });
    }
}