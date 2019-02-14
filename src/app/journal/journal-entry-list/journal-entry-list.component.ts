import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-journal-entry-list',
  templateUrl: './journal-entry-list.component.html',
  styleUrls: ['./journal-entry-list.component.css']
})
export class JournalEntryListComponent implements OnInit {

  date: string;                   //dateinput from user
  journalText: string;            //textinput from user
  selectedItem: any;              //selected journal entry from list
  localStorageKey: string = "TestUno";        //key name from local storage
  entrys: {title: string}[] =
  [{title: 'Ich'}, {title: 'Ich hoffe'}, {title: 'Ich hoffe es'}, {title: 'Ich hoffe es klappt'}];      //data for local storage

  constructor( private journalService: JournalService ) {
    journalService.setKeyName( this.localStorageKey );
  }

  setLocalStorageEntry( key: string, entry ): void {
    localStorage.setItem( key, JSON.stringify( entry ));
  }

  ngOnInit() {
  }

  /*
  Select Journal Entry Function
  This function fills the date- and text field with the selected journal entry dates.
  */
  selectEntry( selectedItem ) {
    this.selectedItem = selectedItem;
    this.date = selectedItem.date;
    this.journalText = selectedItem.text; 
  }

}
