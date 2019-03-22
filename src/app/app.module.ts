import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NutritionPlanComponent } from './nutrition-plan/nutrition-plan.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { JournalComponent } from './journal/journal.component';
import { StatsComponent } from './stats/stats.component';
import { LibraryComponent } from './library/library.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';

import { JournalService } from './journal/journal.service';
import { RecipeBookService } from './recipe-book/recipe-book.service';



//Angular Material Imports for Recipe Book List
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { JournalEntryListComponent } from './journal/journal-entry-list/journal-entry-list.component';
import { AppAsideComponent } from './app-aside/app-aside.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NutritionPlanComponent,
    WorkoutPlanComponent,
    RecipeBookComponent,
    JournalComponent,
    StatsComponent,
    LibraryComponent,
    ShopComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    TemplateComponent,
    HeaderComponent,
    JournalEntryListComponent,
    AppAsideComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StorageServiceModule,
    AppRoutingModule,
    DragDropModule,
    //Angular Material Imports for Recipe Book List
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
  ],
  providers: [
    JournalService,
    RecipeBookService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
