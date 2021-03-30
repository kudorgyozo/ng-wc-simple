import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
    title = 'ng-wc-simple';

    @Input() counter = 0;

    @Output() countChanged = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void { }

    inc() {
        this.counter++;
        this.countChanged.next(this.counter);
    }

    dec() {
        this.counter--;
        this.countChanged.next(this.counter);
    }
}
