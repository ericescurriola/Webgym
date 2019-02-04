/* 
    This Class is the model for an journal entry
*/
export class JournalEntry {
    date: string;           //dateinput from user
    text: string;           //textinput from user

    constructor(date: string, text: string){
        this.date = date;
        this.text = text;
    }
}