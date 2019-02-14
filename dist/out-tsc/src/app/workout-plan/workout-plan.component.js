var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
var WorkoutPlanComponent = /** @class */ (function () {
    function WorkoutPlanComponent() {
        //Arrays for the draggable zones
        this.abs = [];
        this.arms = [];
        this.back = [];
        this.chest = [];
        this.legs = [];
        this.shoulders = [];
        //Array that gathers all entrys of the day and summarise them into an nutrition plan entry
        this.workoutPlan = [
            { abs: this.abs,
                bauch: this.bauch,
                beine: this.beine,
                brust: this.brust,
                ruecken: this.ruecken,
                schultern: this.schultern }
        ];
        //Recipe array with the different recipes
        this.excercises = [
            { title: 'Bankdrücken' },
            { title: 'Beinpresse' },
            { title: 'Bizep curls' },
            { title: 'Trizepsdrücken' },
            { title: 'Dips' },
            { title: 'Latziehen' },
            { title: 'Schulterdrücken' },
            { title: 'Crunches' },
            { title: 'Wadenheben' }
        ];
    }
    //Angular Material Drag&Drop Function
    WorkoutPlanComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    WorkoutPlanComponent.prototype.ngOnInit = function () {
    };
    WorkoutPlanComponent = __decorate([
        Component({
            selector: 'app-workout-plan',
            templateUrl: './workout-plan.component.html',
            styleUrls: ['./workout-plan.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], WorkoutPlanComponent);
    return WorkoutPlanComponent;
}());
export { WorkoutPlanComponent };
//# sourceMappingURL=workout-plan.component.js.map