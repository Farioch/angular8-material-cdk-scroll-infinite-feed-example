import {of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  readonly itemsPerPage = 10;

  private cache = {};

  constructor() {}

  getOldData(page: number) {
    if (!this.cache[page]) {
      this.cache[page] = Array.from({length: this.itemsPerPage}).map((x, i) => ({
        id: page * this.itemsPerPage + i,
        value: `item #${page * this.itemsPerPage + i}`
      }));
    }
    return of(this.cache[page]);
  }

  getNewData() {
    const id = new Date().valueOf();
    return {
      id,
      value: `item #${id}`
    };
  }
}
