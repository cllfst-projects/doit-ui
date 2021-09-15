import { Injectable } from '@angular/core';
import { ITEMS } from '../../mockData/cardItems';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getItems() {
    const items = ITEMS;
    return items;
  }

}
