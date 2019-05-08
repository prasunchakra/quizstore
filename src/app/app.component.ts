import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitSearch } from './git-search';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private gitSearchService: GitSearchService) {}
  title = 'Angular';
  ngOnInit() {
    this.gitSearchService.gitSearch('Angular').then((response: GitSearch) => {
      alert('Total Libraries Found' + response.total_count);
    }, (error) => {
      alert('Error Occured: ' + error.statusText);
    });
  }
}
