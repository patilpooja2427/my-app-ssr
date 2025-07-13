import { Component } from '@angular/core';
import { BlogService } from '../../core/services/blog.service';
import { Blog } from '../../core/interface/blog.interface';

import { MatCardModule } from '@angular/material/card';  // Import MatCardModule
import { BlogCardComponent } from '../../layout/blog-card/blog-card.component';

@Component({
  selector: 'app-blogs',
  imports: [MatCardModule, BlogCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  blogs: Blog[] = [];  // Array to hold the fetched blogs

  constructor(private blogService: BlogService) {}  // Inject BlogService

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {
      this.blogs = data;  // Assign fetched blogs to the component's array
    });
  }
}
