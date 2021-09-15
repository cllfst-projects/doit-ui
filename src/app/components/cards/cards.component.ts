import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ItemService } from 'src/app/services/itemService/item.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  items = []
  constructor(private itemService: ItemService) { }


  ngOnInit(): void {
    this.items = this.itemService.getItems();
    console.log(this.items)
  }
  isTodoCard(cardName: string){
    return cardName == 'To Do'
    
  }
  isDoingCard(cardName: string){
    return cardName == 'Doing'
  }
  isDoneCard(cardName: string){
    return cardName == 'Done'
  }
  addItem(cardName: string, input: any){
    let itemName = input.value;
    input.value = ""
    
    this.items.forEach( (card) => {
      if(card.cardName === cardName) {
        card.cardItems.push(itemName)
      }
    })
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
