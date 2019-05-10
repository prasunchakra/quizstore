import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { AdvancedSearchModel } from '../advanced-search-model';
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
  form: FormGroup;
  formcontrols = {};
  model = new AdvancedSearchModel('', '', '', '', '', '');
  modelkeys = Object.keys(this.model);
  noSpecialChars(c: FormControl) {
    const REGEXP = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

    return REGEXP.test(c.value) ? {
        validateEmail: {
        valid: false
        }
    } : null;
}
  constructor(private gitSearchService: GitSearchService,
              private route: ActivatedRoute,
              private router: Router) {
                this.modelkeys.forEach( key => {
                  const validators = [];
                  if (key === 'q') {
                    validators.push(Validators.required);
                  }
                  if (key === 'stars') {
                    validators.push(Validators.maxLength(4));
                  }
                  validators.push(this.noSpecialChars);
                  this.formcontrols[key] = new FormControl(this.model[key], validators);
                });
                this.form = new FormGroup(this.formcontrols);
              }

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
    const search: string = this.form.value.q;
    let params = '';
    this.modelkeys.forEach( (key) => {
        if (key === 'q') {
          return false;
        }
        if (this.model[key]) {
          params += '+' + key + ':' + this.form.value[key];
        }
    });
    this.searchQuery = search;
    if (params !== '') {
      this.searchQuery = search + params;
    }
    this.displayQuery = this.searchQuery;
    this.gitSearch();
  }

}
