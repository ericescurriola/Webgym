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
import { JournalEntry } from './journal-entry.model';
//Decorator
var JournalService = /** @class */ (function () {
    //Constructor
    function JournalService() {
        var allEntrys = this.getJournalEntry();
    }
    /*
    Add Journal Entry Function
    This function expects a date and a text so it can be saved as a journal entry in localStorage.
    */
    JournalService.prototype.addJournalEntry = function (date, text) {
        var singleEntry = new JournalEntry(date, text);
        var allEntrys = this.getJournalEntry();
        allEntrys.push(singleEntry);
        this.setLocalStorageJournalEntry(allEntrys);
    };
    /*
    Get Journal Entry Function
    This function fetches the entries stored in the localStorage so that they can be displayed in the list.
    */
    JournalService.prototype.getJournalEntry = function () {
        var localStorageItem = JSON.parse(localStorage.getItem('JournalEntry'));
        return localStorageItem == null ? [] : localStorageItem;
    };
    /*
    Set LocalStorage Journal Entry Function
    This function can create a new entry in the localStorage.
    */
    JournalService.prototype.setLocalStorageJournalEntry = function (allEntrys) {
        localStorage.setItem('JournalEntry', JSON.stringify(allEntrys));
    };
    JournalService = __decorate([
        Injectable()
        //Class definition
        ,
        __metadata("design:paramtypes", [])
    ], JournalService);
    return JournalService;
}());
export { JournalService };
//# sourceMappingURL=journal.service.js.map