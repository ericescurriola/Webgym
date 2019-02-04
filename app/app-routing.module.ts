import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainingsplanComponent } from './trainingsplan/trainingsplan.component';
import { ErnaehrungsplanComponent } from './ernaehrungsplan/ernaehrungsplan.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { JournalComponent } from './Journal/journal.component';
import { LibraryComponent } from './Library/library.component';
import { HomeComponent } from './home/home.component';

const navigationRoutes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  { path: 'Trainingsplan', component: TrainingsplanComponent},
  { path: 'Ernährungsplan', component: ErnaehrungsplanComponent},
  { path: 'Rezeptbuch', component: RecipeBookComponent},
  { path: 'Tagebuch', component: JournalComponent},
  { path: 'Bibliothek', component: LibraryComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/404' }
];

@NgModule({
    imports: [ RouterModule.forRoot( navigationRoutes ) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}