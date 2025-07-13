import { Component, Input, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Blog } from '../../core/interface/blog.interface';

@Component({
  selector: 'app-blog-card',
  imports: [MatCardModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() blog: Blog | null = null;
}
