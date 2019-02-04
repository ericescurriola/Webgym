//Imports
import { Injectable } from '@angular/core';
import { JournalEntry } from './journal-entry.model';

//Decorator
@Injectable()

//Class definition
export class JournalService {
    
    date: string;            //dateinput from user
    text: string;            //textinput from user

    //Constructor
    constructor() {
        let allEntrys = this.getJournalEntry();
    }

    /*
    Add Journal Entry Function
    This function expects a date and a text so it can be saved as a journal entry in localStorage.
    */
    public addJournalEntry(date: string, text: string): void {
        let singleEntry = new JournalEntry(date, text);
        let allEntrys = this.getJournalEntry();
        allEntrys.push(singleEntry);

        this.setLocalStorageJournalEntry(allEntrys);
    }

    /*
    Get Journal Entry Function
    This function fetches the entries stored in the localStorage so that they can be displayed in the list.
    */
    public getJournalEntry(): JournalEntry[] {
        let localStorageItem = JSON.parse(localStorage.getItem('JournalEntry'));
        return localStorageItem == null ? [] : localStorageItem;
    }

    /*
    Set LocalStorage Journal Entry Function
    This function can create a new entry in the localStorage.
    */
    private setLocalStorageJournalEntry(allEntrys: JournalEntry[]): void {
        localStorage.setItem('JournalEntry', JSON.stringify( allEntrys ));
    }
}
