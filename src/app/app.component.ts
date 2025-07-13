import { Component, effect, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  auth = inject(AuthService);
  isLoggedIn = this.auth.isLoggedIn;
  theme: WritableSignal<'light' | 'dark'> = signal<'light' | 'dark'>('light');
  constructor() {
    effect(() => {
      const current = this.theme();
      if (typeof document !== 'undefined') {
        document?.body?.classList.remove('light-theme', 'dark-theme');
        document?.body?.classList.add(`${current}-theme`);
      }
    });
  }

  toggleTheme() {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
  }
}
