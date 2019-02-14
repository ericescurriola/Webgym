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
import { Injectable } from '@angular/core';
//Decorator
var RecipeBookService = /** @class */ (function () {
    //Constructor
    function RecipeBookService() {
        var allEntrys = this.getRecipeItemEntry();
    }
    /*
    Get Recipe Item Function
    This function fetches the entries stored in the localStorage so that they can be displayed in the list.
    */
    RecipeBookService.prototype.getRecipeItemEntry = function () {
        var localStorageItem = JSON.parse(localStorage.getItem('RecipeItem'));
        return localStorageItem == null ? [] : localStorageItem;
    };
    RecipeBookService = __decorate([
        Injectable()
        //Class definition
        ,
        __metadata("design:paramtypes", [])
    ], RecipeBookService);
    return RecipeBookService;
}());
export { RecipeBookService };
//# sourceMappingURL=recipe-book.service.js.map