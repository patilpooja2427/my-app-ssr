import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this._authService.login(username, password).subscribe(success => {
      if (success) {
        this._router.navigate(['/home']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
