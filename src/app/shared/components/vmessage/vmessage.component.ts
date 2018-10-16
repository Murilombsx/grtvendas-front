import { Component, Input } from '@angular/core';

@Component({
    selector: 'grt-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent{

    @Input() text = '';

}