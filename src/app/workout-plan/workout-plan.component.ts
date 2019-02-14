import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrls: ['./workout-plan.component.css']
})
export class WorkoutPlanComponent implements OnInit {
  
  workoutPlanName: string;

  //Arrays for the draggable zones
  abs: {title: string}[] = [];
  arms: {title: string}[] = [];
  back: {title: string}[] = [];
  chest: {title: string}[] = [];
  legs: {title: string}[] = [];
  shoulders: {title: string}[] = [];

  //Array that gathers all entrys of the day and summarise them into an nutrition plan entry
  workoutPlan: {abs: {title: string}[], arms: {title: string}[], back: {title: string}[], chest: {title: string}[], legs: {title: string}[], shoulders: {title: string}[]}[] = [
    {abs: this.abs, 
    arms: this.arms,
    back: this.back,
    chest: this.chest,
    legs: this.legs,
    shoulders: this.shoulders}
  ];

  //Recipe array with the different recipes
  excercises: {title: string}[] = [
    {title: 'Bankdrücken'},
    {title: 'Beinpresse'},
    {title: 'Bizep curls'},
    {title: 'Trizepsdrücken'},
    {title: 'Dips'},
    {title: 'Latziehen'},
    {title: 'Schulterdrücken'},
    {title: 'Crunches'},
    {title: 'Wadenheben'}
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
