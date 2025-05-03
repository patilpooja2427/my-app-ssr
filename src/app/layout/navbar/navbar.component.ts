import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  auth = inject(AuthService);
  logout() {
    this.auth.logout();
  }
}
