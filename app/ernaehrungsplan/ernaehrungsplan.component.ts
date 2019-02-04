//Imports
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

//Decorator
@Component({
  selector: 'app-ernaehrungsplan',
  templateUrl: './ernaehrungsplan.component.html',
  styleUrls: ['./ernaehrungsplan.component.css']
})

//Class definition
export class ErnaehrungsplanComponent implements OnInit {

  //Arrays for the draggable zones
  morgen: {title: string}[] = [];
  znueni: {title: string}[] = [];
  mittag: {title: string}[] = [];
  zvieri: {title: string}[] = [];
  abend: {title: string}[] = [];
  nacht: {title: string}[] = [];

  //Array that gathers all entrys of the day and summarise them into an nutrition plan entry
  nutritionPlan: {morgen: {title: string}[], znueni: {title: string}[], mittag: {title: string}[], zvieri: {title: string}[], abend: {title: string}[], nacht: {title: string}[]}[] = [
    {morgen: this.morgen,
    znueni: this.znueni,
    mittag: this.mittag,
    zvieri: this.zvieri,
    abend: this.abend,
    nacht: this.nacht}
  ];

  //Recipe array with the different recipes
  recipes: {title: string}[] = [
    {title: 'Reis und Poulet'},
    {title: 'Müesli'},
    {title: 'Schinkensandwich'},
    {title: 'Proteinriegel'},
    {title: 'Gurkensalat'}
  ];

  //Angular Material Drag&Drop Function
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

  constructor() { }

  ngOnInit() {
  }

}
