import { LightningElement, track } from 'lwc';

export default class Container extends LightningElement {
    @track selectedItem = 'lightdom';

    handleSelect(event) {
        const selected = event.detail.name;

        this.template.querySelectorAll('.card').forEach(elem => {
            if (elem.classList.contains(`select-${selected}`)) {
                elem.classList.add('dblock');
            } else {
                elem.classList.remove('dblock');
            }
        });
    }
}
