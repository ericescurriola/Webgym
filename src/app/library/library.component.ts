//Imports
import { Component, OnInit } from '@angular/core';
import { LibraryItem } from './library.model';

//Decorator
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})

//Class definition
export class LibraryComponent implements OnInit {

  index: { conentPoint: string }[] = [{ conentPoint: '' }, ];   //Table of contents
  source: { link: string }[];                                   //sources of information

  //Article text
  trainingsvolumen: string = ""
  + "Das Trainingsvolumen bzw. Belastungsvolumen ist die Gesamtmenge an Belastungsreizen"
  + "innerhalb einer Kraftübung und ein wichtiger Parameter in der Trainingsplanung."
  + "Das Volumen stellt die bewältigte Last in Kilogramm dar."
  + "Berechnung: Werden zu der Übung Kniebeugen beispielsweise 3 Sätze mit je 10 Wiederholungen"
  + "und einem Gewicht von 80 kg durchgeführt, ergibt sich ein Trainingsvolumen von 2400 kg.";

  //Library entrys
  libraryData: LibraryItem[] = [
    {id: 0, image: '../../assets/dumbbell.png', titel: 'Trainingsvolumen', description: this.trainingsvolumen, index: [{ conentPoint: 'Beschreibung'}, { conentPoint: 'Berechnung'}], source: [{ link: 'https://www.wikifit.de/wiki/trainingsvolumen'}]}
  ];

  //Constructor
  constructor() {
  }

  //NgOnInit
  ngOnInit() {
  }
}
