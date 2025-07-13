import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective {
  @Input() debounceTime = 500;
  @Output() debounceClick = new EventEmitter<Event>();

  private isClicked = false;

  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    if (!this.isClicked) {
      this.isClicked = true;
      this.debounceClick.emit(event);

      setTimeout(() => {
        this.isClicked = false;
      }, this.debounceTime);
    } else {
      event.stopImmediatePropagation(); // optional
    }
  }
}
