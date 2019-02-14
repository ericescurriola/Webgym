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
import { RecipeBookService } from './recipe-book.service';
//Decorator
var RecipeBookComponent = /** @class */ (function () {
    //Constructor
    function RecipeBookComponent(recipeService) {
        this.recipeService = recipeService;
        //This variable contains the description of the Salade Nicoise recipe
        this.saladeNicoiseDescription = ""
            + "Sauce: Essig und alle Zutaten bis und mit Pfeffer gut verrühren."
            + "Gemüse kochen: Bohnen im Salzwasser ca. 5 Min. kochen. Kartoffeln beigeben, ca. 10 Min. weich kochen, abgiessen, etwas abkühlen, mit der Sauce mischen."
            + "Salade Niçoise: Thon und alle Zutaten bis und mit Basilikum zum Gemüse geben, sorgfältig mischen."
            + "Anrichten: Salat mit den Eiern auf Tellern anrichten.";
        //Recipe Array from the Object type RecipeItem(id, image, recipeName, recipeDescription, ingredients[], macros[])
        this.recipeHeader = [
            { id: 0, image: '../../assets/dumbbell.png', recipeName: 'Salade Niçoise', recipeDescription: this.saladeNicoiseDescription, ingredients: [{ amount: '1', ingredient: 'Ei' },
                    { amount: '250g', ingredient: 'Thunfisch' }, { amount: '250g', ingredient: 'Salat' }, { amount: '6EL', ingredient: 'Olivenöl' }, { amount: '3El', ingredient: 'Aceto balsamico' },
                    { amount: '1 prise', ingredient: 'Salz' }, { amount: '1 prise', ingredient: 'Pfeffer' }], macros: [{ protein: '20g', fat: '15g', carbs: '65g' }] },
            { id: 1, image: '../../assets/dumbbell.png', recipeName: 'Caprese', recipeDescription: 'Leer', ingredients: [{ amount: "250g", ingredient: 'Mozarella' }, { amount: "250g", ingredient: 'Tomaten' }, { amount: '6EL', ingredient: 'Olivenöl' }, { amount: '3El', ingredient: 'Aceto balsamico' },
                    { amount: '1 prise', ingredient: 'Salz' }, { amount: '1 prise', ingredient: 'Pfeffer' }], macros: [{ protein: '23g', fat: '4g', carbs: '77g' }] },
            { id: 2, image: '../../assets/dumbbell.png', recipeName: 'Fruchtsalat', recipeDescription: 'Leer', ingredients: [{ amount: "250g", ingredient: 'Thunfisch' }], macros: [{ protein: '20g', fat: '5g', carbs: '48g' }] },
            { id: 3, image: '../../assets/dumbbell.png', recipeName: 'Kartoffelsalat', recipeDescription: 'Leer', ingredients: [{ amount: "250g", ingredient: 'Thunfisch' }], macros: [{ protein: '5g', fat: '7g', carbs: '26g' }] },
            { id: 4, image: '../../assets/dumbbell.png', recipeName: 'Kürbissuppe', recipeDescription: 'Leer', ingredients: [{ amount: "250g", ingredient: 'Thunfisch' }], macros: [{ protein: '7g', fat: '14g', carbs: '57g' }] },
            { id: 5, image: '../../assets/dumbbell.png', recipeName: 'Safran-May', recipeDescription: 'Leer', ingredients: [{ amount: "250g", ingredient: 'Thunfisch' }], macros: [{ protein: '12g', fat: '3g', carbs: '39g' }] },
            { id: 6, image: '../../assets/dumbbell.png', recipeName: 'Gulaschsuppe', recipeDescription: 'Leer', ingredients: [{ amount: "250g", ingredient: 'Thunfisch' }], macros: [{ protein: '23g', fat: '27g', carbs: '46g' }] },
            { id: 7, image: '../../assets/dumbbell.png', recipeName: 'Risotto', recipeDescription: 'Leer', ingredients: [{ amount: "250g", ingredient: 'Thunfisch' }], macros: [{ protein: '8g', fat: '7g', carbs: '56g' }] },
            { id: 8, image: '../../assets/dumbbell.png', recipeName: 'Penne all`arrabiata', recipeDescription: 'Leer', ingredients: [{ amount: "250g", ingredient: 'Thunfisch' }], macros: [{ protein: '11g', fat: '11g', carbs: '65g' }] },
            { id: 9, image: '../../assets/dumbbell.png', recipeName: 'Pizza Napoli', recipeDescription: 'Leer', ingredients: [{ amount: "250g", ingredient: 'Thunfisch' }], macros: [{ protein: '10g', fat: '15g', carbs: '45g' }] },
        ];
    }
    //NgOnInit
    RecipeBookComponent.prototype.ngOnInit = function () {
    };
    RecipeBookComponent = __decorate([
        Component({
            selector: 'app-recipe-book',
            templateUrl: './recipe-book.component.html',
            styleUrls: ['./recipe-book.component.css']
        })
        //Class definition
        ,
        __metadata("design:paramtypes", [RecipeBookService])
    ], RecipeBookComponent);
    return RecipeBookComponent;
}());
export { RecipeBookComponent };
//# sourceMappingURL=recipe-book.component.js.map