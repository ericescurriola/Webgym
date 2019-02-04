import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-trainingsplan',
  templateUrl: './trainingsplan.component.html',
  styleUrls: ['./trainingsplan.component.css']
})
export class TrainingsplanComponent implements OnInit {
  
  trainingPlanName: string;

  //Arrays for the draggable zones
  arme: {title: string}[] = [];
  bauch: {title: string}[] = [];
  beine: {title: string}[] = [];
  brust: {title: string}[] = [];
  ruecken: {title: string}[] = [];
  schultern: {title: string}[] = [];

  //Array that gathers all entrys of the day and summarise them into an nutrition plan entry
  trainingPlan: {arme: {title: string}[], bauch: {title: string}[], beine: {title: string}[], brust: {title: string}[], ruecken: {title: string}[], schultern: {title: string}[]}[] = [
    {arme: this.arme,
    bauch: this.bauch,
    beine: this.beine,
    brust: this.brust,
    ruecken: this.ruecken,
    schultern: this.schultern}
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
