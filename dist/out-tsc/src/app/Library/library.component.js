var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Imports
import { Component } from '@angular/core';
//Decorator
var LibraryComponent = /** @class */ (function () {
    //Constructor
    function LibraryComponent() {
        this.index = [{ conentPoint: '' },]; //Table of contents
        //Article text
        this.trainingsvolumen = ""
            + "Das Trainingsvolumen bzw. Belastungsvolumen ist die Gesamtmenge an Belastungsreizen"
            + "innerhalb einer Kraftübung und ein wichtiger Parameter in der Trainingsplanung."
            + "Das Volumen stellt die bewältigte Last in Kilogramm dar."
            + "Berechnung: Werden zu der Übung Kniebeugen beispielsweise 3 Sätze mit je 10 Wiederholungen"
            + "und einem Gewicht von 80 kg durchgeführt, ergibt sich ein Trainingsvolumen von 2400 kg.";
        //Library entrys
        this.libraryData = [
            { id: 0, image: '../../assets/dumbbell.png', titel: 'Trainingsvolumen', description: this.trainingsvolumen, index: [{ conentPoint: 'Beschreibung' }, { conentPoint: 'Berechnung' }], source: [{ link: 'https://www.wikifit.de/wiki/trainingsvolumen' }] }
        ];
    }
    //NgOnInit
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        Component({
            selector: 'app-library',
            templateUrl: './library.component.html',
            styleUrls: ['./library.component.css']
        })
        //Class definition
        ,
        __metadata("design:paramtypes", [])
    ], LibraryComponent);
    return LibraryComponent;
}());
export { LibraryComponent };
//# sourceMappingURL=library.component.js.map