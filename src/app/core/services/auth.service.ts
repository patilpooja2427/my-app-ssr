import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = signal(false);
  role = signal<string | null>(null);
  router = inject(Router);
  http = inject(HttpClient);

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>('assets/users.json').pipe(
      map(users => users.find(u => u.username === username && u.password === password)),
      tap(user => {
        if (user) {
          this.isLoggedIn.set(true);
          this.role.set(user.role);
        }
      }),
      map(user => !!user)
    );
  } 

  logout() {
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    return this.role();
  }
}
