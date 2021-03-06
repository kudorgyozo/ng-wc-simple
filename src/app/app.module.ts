import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule {
    constructor(private injector: Injector) { }

    ngDoBootstrap() {
        const ngElement = createCustomElement(AppComponent, {
            injector: this.injector,
        });
 
        customElements.define(`counter-wc`, ngElement);

    }
}
