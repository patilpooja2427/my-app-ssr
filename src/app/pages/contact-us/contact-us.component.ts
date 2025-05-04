import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CanComponentDeactivate } from '../../core/guards/unsaved-changes.guards';
@Component({
  selector: 'app-contact-us',
  imports:    [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements CanComponentDeactivate{
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    alert('Form submitted!');
    this.contactForm.reset();
  }

  canDeactivate(): boolean {
    if (this.contactForm.dirty && !this.submitted) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
