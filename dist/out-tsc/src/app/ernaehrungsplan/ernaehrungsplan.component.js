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
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
//Decorator
var ErnaehrungsplanComponent = /** @class */ (function () {
    function ErnaehrungsplanComponent() {
        //Arrays for the draggable zones
        this.morgen = [];
        this.znueni = [];
        this.mittag = [];
        this.zvieri = [];
        this.abend = [];
        this.nacht = [];
        //Array that gathers all entrys of the day and summarise them into an nutrition plan entry
        this.nutritionPlan = [
            { morgen: this.morgen,
                znueni: this.znueni,
                mittag: this.mittag,
                zvieri: this.zvieri,
                abend: this.abend,
                nacht: this.nacht }
        ];
        //Recipe array with the different recipes
        this.recipes = [
            { title: 'Reis und Poulet' },
            { title: 'Müesli' },
            { title: 'Schinkensandwich' },
            { title: 'Proteinriegel' },
            { title: 'Gurkensalat' }
        ];
    }
    //Angular Material Drag&Drop Function
    ErnaehrungsplanComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    ErnaehrungsplanComponent.prototype.ngOnInit = function () {
    };
    ErnaehrungsplanComponent = __decorate([
        Component({
            selector: 'app-ernaehrungsplan',
            templateUrl: './ernaehrungsplan.component.html',
            styleUrls: ['./ernaehrungsplan.component.css']
        })
        //Class definition
        ,
        __metadata("design:paramtypes", [])
    ], ErnaehrungsplanComponent);
    return ErnaehrungsplanComponent;
}());
export { ErnaehrungsplanComponent };
//# sourceMappingURL=ernaehrungsplan.component.js.map