var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrainingsplanComponent } from './workout-plan/workout-plan.component';
import { ErnaehrungsplanComponent } from './ernaehrungsplan/ernaehrungsplan.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { JournalComponent } from './Journal/journal.component';
import { LibraryComponent } from './Library/library.component';
import { HomeComponent } from './home/home.component';
var navigationRoutes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Trainingsplan', component: TrainingsplanComponent },
    { path: 'Ernährungsplan', component: ErnaehrungsplanComponent },
    { path: 'Rezeptbuch', component: RecipeBookComponent },
    { path: 'Tagebuch', component: JournalComponent },
    { path: 'Bibliothek', component: LibraryComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(navigationRoutes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map