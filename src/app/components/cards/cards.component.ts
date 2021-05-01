import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from '../../modules/board.module';
import { Column } from '../../modules/column.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }
  board: Board = new Board('Project Name', [
    new Column('ToDo', [
      "Projeyt JAVA ALGO",
      "PFA",
      "PAUD",
      "OC",
      "CyberSecurity",
      "Stochastique",
      "IF4 subjects"

    ]),
    new Column('Doing', [
      "DOIT Project",
      "Soc",
      "Adminis. Réseau",
      "EVE ng"
    ]),
    new Column('Done', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    
  ]);

  ngOnInit(): void {
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
