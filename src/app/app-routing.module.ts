import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { NutritionPlanComponent } from './nutrition-plan/nutrition-plan.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { JournalComponent } from './journal/journal.component';
import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { JournalEntryListComponent } from './journal/journal-entry-list/journal-entry-list.component';

const navigationRoutes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  { path: 'Trainingsplan', component: WorkoutPlanComponent},
  { path: 'Ernährungsplan', component: NutritionPlanComponent},
  { path: 'Rezeptbuch', component: RecipeBookComponent},
  { path: 'Tagebuch', component: JournalComponent},
  { path: 'Bibliothek', component: LibraryComponent},
  { path: 'Test1', component: JournalEntryListComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/404' }
];

@NgModule({
    imports: [ RouterModule.forRoot( navigationRoutes ) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}