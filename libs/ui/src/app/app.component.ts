import { Component, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome.component';
import { createCustomElement } from '@angular/elements';

@Component({
  standalone: true,
  selector: 'webc-ui-root',
  template: '',
  imports: [RouterModule, WelcomeComponent],
})
export class AppComponent {
  constructor(injector: Injector) {
    const WelcomeElement = createCustomElement(WelcomeComponent, { injector });
    customElements.define('webc-welcome-element', WelcomeElement);
  }
}
