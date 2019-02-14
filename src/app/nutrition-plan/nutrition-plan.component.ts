//Imports
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

//Decorator
@Component({
  selector: 'app-nutrition-plan',
  templateUrl: './nutrition-plan.component.html',
  styleUrls: ['./nutrition-plan.component.css']
})

//Class definition
export class NutritionPlanComponent implements OnInit {

  //Arrays for the draggable zones
  breakfast: {title: string}[] = [];
  morningBreak: {title: string}[] = [];
  lunch: {title: string}[] = [];
  afternoonBreak: {title: string}[] = [];
  dinner: {title: string}[] = [];
  nightSnack: {title: string}[] = [];

  //Array that gathers all entrys of the day and summarise them into an nutrition plan entry
  nutritionPlan: {breakfast: {title: string}[], morningBreak: {title: string}[], lunch: {title: string}[], afternoonBreak: {title: string}[], dinner: {title: string}[], nightSnack: {title: string}[]}[] = [
    {breakfast: this.breakfast,
    morningBreak: this.morningBreak,
    lunch: this.lunch,
    afternoonBreak: this.afternoonBreak,
    dinner: this.dinner,
    nightSnack: this.nightSnack}
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
