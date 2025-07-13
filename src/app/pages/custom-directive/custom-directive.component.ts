import { Component } from '@angular/core';
import { DebounceClickDirective } from '../../directive/debounce-click.directive';

@Component({
  selector: 'app-custom-directive',
  imports: [DebounceClickDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.scss'
})
export class CustomDirectiveComponent {

  submitForm() {
    console.log('preventDefaultClick');
  }
}
