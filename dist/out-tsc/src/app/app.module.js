var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TrainingsplanComponent } from './trainingsplan/trainingsplan.component';
import { ErnaehrungsplanComponent } from './ernaehrungsplan/ernaehrungsplan.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { JournalComponent } from './Journal/journal.component';
import { AuswertungComponent } from './auswertung/auswertung.component';
import { LibraryComponent } from './Library/library.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { JournalService } from './Journal/journal.service';
import { RecipeBookService } from './recipe-book/recipe-book.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, } from '@angular/material';
import { JournalEntryListComponent } from './Journal/journal-entry-list/journal-entry-list.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavigationComponent,
                TrainingsplanComponent,
                ErnaehrungsplanComponent,
                RecipeBookComponent,
                JournalComponent,
                AuswertungComponent,
                LibraryComponent,
                ShopComponent,
                HomeComponent,
                LoginComponent,
                FooterComponent,
                TemplateComponent,
                HeaderComponent,
                JournalEntryListComponent,
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
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map