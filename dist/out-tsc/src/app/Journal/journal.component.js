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
import { JournalService } from './journal.service';
//Decorator
var JournalComponent = /** @class */ (function () {
    //Constructor
    function JournalComponent(journalService) {
        this.journalService = journalService;
    }
    /*
    Save Button Function
    This functions saves the date and textinput as an entry in the localStorage of the browser.
    The function also includes a few input controls.
    */
    JournalComponent.prototype.saveJournalEntry = function (date, text) {
        if (this.date == null || "") {
            window.alert("Bitte geben Sie ein Datum ein.");
            return;
        }
        else { }
        if (this.journalText == null || "") {
            window.alert("Bitte geben Sie einen Tagebucheintrag ein.");
            return;
        }
        else { }
        date = this.date;
        text = this.journalText;
        this.journalService.addJournalEntry(date, text);
    };
    /*
    Select Journal Entry Function
    This function fills the date- and text field with the selected journal entry dates.
    */
    JournalComponent.prototype.selectJournalEntry = function (selectedItem) {
        this.selectedItem = selectedItem;
        this.date = selectedItem.date;
        this.journalText = selectedItem.text;
    };
    /*
    Clear date- and text input field
    This function clears the text of the date- and text field so that the user is able to create a new entry.
    */
    JournalComponent.prototype.clearNewJournalEntry = function () {
        this.journalText = "";
        this.date = "";
    };
    //NgOnInit
    JournalComponent.prototype.ngOnInit = function () {
    };
    JournalComponent = __decorate([
        Component({
            selector: 'app-journal',
            templateUrl: './journal.component.html',
            styleUrls: ['./journal.component.css']
        })
        //Class definition
        ,
        __metadata("design:paramtypes", [JournalService])
    ], JournalComponent);
    return JournalComponent;
}());
export { JournalComponent };
//# sourceMappingURL=journal.component.js.map