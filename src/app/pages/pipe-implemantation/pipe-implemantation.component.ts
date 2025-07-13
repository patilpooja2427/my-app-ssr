import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipe/search.pipe';
@Component({
  selector: 'app-pipe-implemantation',
  imports: [FormsModule, SearchPipe],
  templateUrl: './pipe-implemantation.component.html',
  styleUrl: './pipe-implemantation.component.scss'
})
export class PipeImplemantationComponent {
  searchText = 'pooja';
  users = [
    { name: 'Pooja', role: 'Admin' },
    { name: 'Ankit', role: 'User' },
    { name: 'Ravi', role: 'Manager' }
  ];

}
