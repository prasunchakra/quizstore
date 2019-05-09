import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;
  heading: string;
  constructor(private gitSearchService: GitSearchService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.gitSearch();
    });
    this.route.data.subscribe((result) => {
      this.heading = result.title;
    });
  }
  gitSearch = () => {
    this.gitSearchService.gitSearch(this.searchQuery).then( (response: GitSearch) => {
      this.searchResults = response;
    }, (error) => {
      alert(error.statusText);
    });
  }
  sendquery = () => {
    this.searchResults = null;
    this.router.navigate(['search/' + this.searchQuery]);
  }

}
