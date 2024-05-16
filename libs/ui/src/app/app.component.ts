import { Component, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome.component';
import { createCustomElement } from '@angular/elements';

@Component({
  standalone: true,
  selector: 'app-root',
  template: '',
  styleUrl: './app.component.scss',
  imports: [RouterModule, WelcomeComponent],
})
export class AppComponent {
  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const WelcomeElement = createCustomElement(WelcomeComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('welcome-element', WelcomeElement);
  }
}
