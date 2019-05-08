import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GitSearch } from './git-search';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  cachedValue: Array<{
    [query: string]: GitSearch
  }> = [];

  constructor(private http: HttpClient) { }

  gitSearch = (query: string) => {
    const promise = new Promise((resolve, reject) => {
      if (this.cachedValue[query]) {
        resolve(this.cachedValue[query]);
      } else {
        this.http.get('https://api.github.com/search/repositories?q=' + query)
        .toPromise()
        .then((response) => {
            resolve(response as GitSearch);
            }, (error) => {
            reject(error);
            }
        );
      }
    });
    return promise;
  }
}
