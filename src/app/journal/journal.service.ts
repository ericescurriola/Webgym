//Imports
import { Injectable } from '@angular/core';
import { JournalEntryModel } from './journal-entry.model';

//Decorator
@Injectable()

//Class definition
export class JournalService {
    
    date: string;            //dateinput from user
    text: string;            //textinput from user
    key: string;             //key name

    //Constructor
    constructor() {
        let allEntrys = this.getJournalEntry(this.key);
    }

    public setKeyName(key: string): void {
        this.key = key;
    }

    /*
    Add Journal Entry Function
    This function expects a date and a text so it can be saved as a journal entry in localStorage.
    */
    public addJournalEntry(date: string, text: string): void {
        let singleEntry = new JournalEntryModel(date, text);
        let allEntrys = this.getJournalEntry(this.key);
        allEntrys.push(singleEntry);

        this.setLocalStorageJournalEntry(this.key, allEntrys);
    }

    /*
    Get Journal Entry Function
    This function fetches the entries stored in the localStorage so that they can be displayed in the list.
    */
    public getJournalEntry(key: string): JournalEntryModel[] {
        let localStorageItem = JSON.parse(localStorage.getItem(key));
        return localStorageItem == null ? [] : localStorageItem;
    }

    /*
    Set LocalStorage Journal Entry Function
    This function can create a new entry in the localStorage.
    */
    private setLocalStorageJournalEntry(key: string, allEntrys: JournalEntryModel[]): void {
        localStorage.setItem(key, JSON.stringify( allEntrys ));
    }
}
