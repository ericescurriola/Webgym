//Imports
import { Injectable } from '@angular/core';
import { RecipeItem } from './recipe-book.model';

//Decorator
@Injectable()

//Class definition
export class RecipeBookService {

    //Constructor
    constructor() {
        let allEntrys = this.getRecipeItemEntry();
    }

    /*
    Get Recipe Item Function
    This function fetches the entries stored in the localStorage so that they can be displayed in the list.
    */
    public getRecipeItemEntry(): RecipeItem[] {
        let localStorageItem = JSON.parse(localStorage.getItem('RecipeItem'));
        return localStorageItem == null ? [] : localStorageItem;
    }
    
    /***********************
    *        IGNORE        *
    ************************/

    
    /*
    Add Recipe Item Entry Function
    This function expects a date and a text so it can be saved as a journal entry in localStorage.
    */
   /*
    public addRecipeItemEntry(id: number, date: string, text: string): void {
        let singleEntry = new RecipeItem(id, date, text);
        let allEntrys = this.getJournalEntry();
        allEntrys.push(singleEntry);

        this.setLocalStorageJournalEntry(allEntrys);
    }*/

    /*
    Set LocalStorage Journal Entry Function
    This function can create a new entry in the localStorage.
    */
    /*
    private setLocalStorageJournalEntry(allEntrys: RecipeItem[]): void {
        localStorage.setItem('RecipeItem', JSON.stringify( allEntrys ));
    }*/
}
