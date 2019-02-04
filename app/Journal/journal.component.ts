//Imports
import { Component, OnInit, OnChanges } from '@angular/core';
import { JournalEntry } from './journal-entry.model';
import { LocaleDataIndex } from '@angular/common/src/i18n/locale_data';
import { toUnicode } from 'punycode';
import { JournalService } from './journal.service';

//Decorator
@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

//Class definition
export class JournalComponent implements OnInit {
    
    date: string;                   //dateinput from user
    journalText: string;            //textinput from user

    selectedItem: any;              //selected journal entry from list

    //Constructor
    constructor(private journalService: JournalService) {
    }

    /*
    Save Button Function
    This functions saves the date and textinput as an entry in the localStorage of the browser.
    The function also includes a few input controls.
    */
    saveJournalEntry(date: string, text: string): void {

        if ( this.date == null || "" ) {
            window.alert("Bitte geben Sie ein Datum ein.");
            return;
        } else {}

        if ( this.journalText == null || "" ) {
            window.alert("Bitte geben Sie einen Tagebucheintrag ein.");
            return;
        } else {}

        date = this.date;
        text = this.journalText;

        this.journalService.addJournalEntry(date, text);
    }

    /*
    Select Journal Entry Function
    This function fills the date- and text field with the selected journal entry dates.
    */
    selectJournalEntry(selectedItem) {
        this.selectedItem = selectedItem;
        this.date = selectedItem.date;
        this.journalText = selectedItem.text; 
    }

    /*
    Clear date- and text input field
    This function clears the text of the date- and text field so that the user is able to create a new entry.
    */
    clearNewJournalEntry() {
        this.journalText = "";
        this.date = "";
    }

    //NgOnInit
    ngOnInit() {

    }
}